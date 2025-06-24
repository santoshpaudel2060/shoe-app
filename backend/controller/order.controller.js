import Order from "../models/order.js";
import nodemailer from "nodemailer";

// Create new order
// export const createOrder = async (req, res) => {
//   try {
//     const {
//       userId,
//       deliveryName,
//       deliveryLocation,
//       postalCode,
//       phone,
//       items,
//       totalAmount,
//     } = req.body;

//     // ✅ Validate required fields
//     if (
//       !userId ||
//       !deliveryName ||
//       !deliveryLocation ||
//       !postalCode ||
//       !phone ||
//       !items ||
//       items.length === 0 ||
//       !totalAmount
//     ) {
//       return res.status(400).json({
//         success: false,
//         message: "Missing required fields or empty items",
//       });
//     }

//     // ✅ Create new order
//     const order = new Order({
//       userId,
//       deliveryName,
//       deliveryLocation,
//       postalCode,
//       phone,
//       items,
//       totalAmount,
//     });

//     await order.save();

//     // ✅ Compose email details
//     const itemList = items
//       .map(
//         (item) =>
//           `<li>${item.name} (Size: ${item.size}) - Rs.${item.price} × ${item.quantity}</li>`
//       )
//       .join("");

//     const htmlContent = `
//       <h2>📦 New Order Received</h2>
//       <p><strong>Name:</strong> ${deliveryName}</p>
//       <p><strong>Location:</strong> ${deliveryLocation}, ${postalCode}</p>
//       <p><strong>Phone:</strong> ${phone}</p>
//       <h3>🛍️ Items:</h3>
//       <ul>${itemList}</ul>
//       <p><strong>Total:</strong> Rs.${totalAmount}</p>
//     `;

//     // ✅ Send email to admin
//     await sendMail({
//       to: process.env.ADMIN_RECEIVER_EMAIL,
//       subject: "🛒 New Order Placed",
//       text: `New order placed by ${deliveryName}. Total Rs.${totalAmount}`,
//       html: htmlContent,
//     });

//     // ✅ Respond success
//     return res.status(201).json({
//       success: true,
//       message: "Order placed successfully",
//       order,
//     });
//   } catch (err) {
//     console.error("Order creation error:", err);
//     return res.status(500).json({
//       success: false,
//       message: "Order creation failed",
//       error: err.message || err,
//     });
//   }
// };

export const createOrder = async (req, res) => {
  try {
    // console.log("Incoming order data:", req.body);
    const {
      userId,
      deliveryName,
      deliveryLocation,
      postalCode,
      phone,
      items,
      totalAmount,
    } = req.body;

    if (
      !userId ||
      !deliveryName ||
      !deliveryLocation ||
      !postalCode ||
      !phone ||
      !items ||
      items.length === 0 ||
      !totalAmount
    ) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields or empty items",
      });
    }

    const order = new Order({
      userId,
      deliveryName,
      deliveryLocation,
      postalCode,
      phone,
      items,
      totalAmount,
    });

    await order.save();

    // ✅ Send email to admin
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_EMAIL_PASS,
      },
    });

    const itemList = items
      .map(
        (item) => `<li>${item.name} - Rs.${item.price} × ${item.quantity}</li>`
      )
      .join("");

    const htmlMessage = `
      <h2>New Order Received 🛒</h2>
      <p><strong>Customer:</strong> ${deliveryName}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Location:</strong> ${deliveryLocation}</p>
      <p><strong>Postal Code:</strong> ${postalCode}</p>
      <p><strong>Total Amount:</strong> Rs. ${totalAmount}</p>
      <p><strong>Items:</strong></p>
      <ul>${itemList}</ul>
    `;

    await transporter.sendMail({
      from: `"Order System" `,
      to: process.env.ADMIN_EMAIL,
      subject: "New Order Placed",
      html: htmlMessage,
    });

    res.status(201).json({
      success: true,
      message: "Order placed and email sent",
      order,
    });
  } catch (err) {
    console.error("Order creation error:", err);
    res.status(500).json({
      success: false,
      message: "Order creation failed",
      error: err.message || err,
    });
  }
};
// Get all orders (Admin)
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 }); // newest first
    res.status(200).json({ success: true, orders });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Error fetching orders", error: err });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findById(id);

    if (!order) {
      return res
        .status(404)
        .json({ success: false, message: "Order not found" });
    }

    res.status(200).json({ success: true, order });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Error fetching order", error: err });
  }
};
