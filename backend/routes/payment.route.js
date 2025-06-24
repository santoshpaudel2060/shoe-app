// import express from "express";
// import { initiatePayment } from "../controller/payment.controller.js";

// const router = express.Router();
// router.post("/initiate-payment", initiatePayment);
// router.post("/success", (req, res) => {
//   // You can verify the payment here
//   console.log("Success Payload:", req.body);
//   res.status(200).send("Payment successful");
// });

// router.post("/failure", (req, res) => {
//   console.log("Failure Payload:", req.body);
//   res.status(400).send("Payment failed");
// });

// export default router;

import express from "express";
import { initiatePayment } from "../controller/payment.controller.js";

const router = express.Router();

// Initiate payment - POST
router.post("/initiate-payment", initiatePayment);

// eSewa redirects here on payment success - GET
// router.get("/success", (req, res) => {
//   try {
//     const { data } = req.query;
//     if (!data) {
//       return res.status(400).send("Missing data parameter");
//     }

//     // Decode Base64 string
//     const decoded = Buffer.from(data, "base64").toString("utf-8");

//     // Parse JSON
//     const paymentData = JSON.parse(decoded);

//     console.log("Payment success data:", paymentData);

//     // Here you can verify the signature and payment status
//     if (paymentData.status === "COMPLETE") {
//       // Payment verified, proceed accordingly
//       return res.status(200).send("✅ Payment successful");
//     } else {
//       return res.status(400).send("❌ Payment not completed");
//     }
//   } catch (error) {
//     console.error("Error parsing success data:", error);
//     res.status(500).send("Error processing payment success data");
//   }
// });

router.get("/success", (req, res) => {
  try {
    const { data } = req.query;
    if (!data) {
      return res.status(400).send("Missing data parameter");
    }

    const decoded = Buffer.from(data, "base64").toString("utf-8");
    const paymentData = JSON.parse(decoded);

    if (paymentData.status === "COMPLETE") {
      return res.send(`
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                background-color: #e6f9e6;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
              }
              .success-container {
                background: #4CAF50;
                color: white;
                padding: 30px 50px;
                border-radius: 12px;
                box-shadow: 0 4px 15px rgba(0, 128, 0, 0.3);
                text-align: center;
                max-width: 400px;
              }
              .success-container h1 {
                margin-bottom: 15px;
              }
              .success-container p {
                font-size: 1.2em;
              }
              .success-container .details {
                margin-top: 20px;
                background: #3e8e41;
                padding: 10px;
                border-radius: 8px;
                font-size: 0.9em;
              }
            </style>
          </head>
          <body>
            <div class="success-container">
              <h1>Payment Successful ✅</h1>
              <p>Thank you for your payment.</p>
              <div class="details">
                <strong>Transaction ID:</strong> ${paymentData.transaction_uuid}<br/>
                <strong>Amount Paid:</strong> NPR ${paymentData.total_amount}
              </div>
            </div>
          </body>
        </html>
      `);
    } else {
      return res.status(400).send("Payment not completed");
    }
  } catch (error) {
    console.error("Error parsing success data:", error);
    res.status(500).send("Error processing payment success data");
  }
});

// eSewa redirects here on payment failure - GET
router.get("/failure", (req, res) => {
  console.log("Failure Query:", req.query);
  res.status(400).send("❌ Payment failed");
  // Or redirect example:
  // res.redirect("http://localhost:5173/payment-failure");
});

export default router;
