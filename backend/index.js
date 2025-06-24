import express from "express";
import connectDb from "./libs/db.js";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";
import productRoutes from "./routes/product.routes.js";
// import esewaRoutes from "./routes/esewaRoutes.js";
import paymentRoutes from "./routes/payment.route.js";
// import commentRoutes from "./routes/comment.routes.js";
import orderRoutes from "./routes/order.routes.js";
import cors from "cors";
import path from "path";
dotenv.config();
const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
  })
);

app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
// app.use("/api/esewa", esewaRoutes);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/user", userRoutes); // ✅ this line here

app.use("/api/product", productRoutes);
app.use("/api/esewa", paymentRoutes);
app.use("/api/orders", orderRoutes);

connectDb(app);
