// import mongoose from "mongoose";

// const orderSchema = new mongoose.Schema(
//   {
//     userId: { type: String, required: true },
//     products: [
//       {
//         title: String,
//         quantity: Number,
//         price: Number,
//       },
//     ],
//     totalAmount: Number,
//     paymentMethod: String,
//     status: {
//       type: String,
//       enum: ["Pending", "Confirmed", "Shipped", "Delivered"],
//       default: "Pending",
//     },
//   },
//   { timestamps: true }
// );

// export const Order = mongoose.model("Order", orderSchema);
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    deliveryName: String,
    deliveryLocation: String,
    postalCode: String,
    phone: String,
    items: [
      {
        id: String,
        name: String,
        price: Number,
        quantity: Number,
        size: String,
        image: String,
      },
    ],
    totalAmount: Number,
    paymentMethod: {
      type: String,
      default: "Esewa",
    },
    status: {
      type: String,
      enum: ["Pending", "Completed", "Cancelled"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
