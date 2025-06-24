// import express from "express";
// import multer from "multer";
// import path from "path";
// import {
//   createProduct,
//   getProduct,
//   updateProduct,
//   deleteProduct,
//   getProductById,
// } from "../controller/product.controller.js";

// const router = express.Router();

// // Multer setup
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage });

// // Routes
// router.post("/", upload.single("image"), createProduct);
// router.get("/all", getProduct);
// router.put("/update/:id", upload.single("image"), updateProduct);
// router.delete("/delete/:id", deleteProduct);
// router.get("/:id", getProductById);
// export default router;

// import express from "express";
// import multer from "multer";
// import path from "path";
// import {
//   createProduct,
//   getProduct,
//   updateProduct,
//   deleteProduct,
//   getProductById,
// } from "../controller/product.controller.js";

// const router = express.Router();

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage });

// router.post("/", upload.single("image"), createProduct);
// router.get("/all", getProduct);
// router.put("/update/:id", upload.single("image"), updateProduct);
// router.delete("/delete/:id", deleteProduct);
// router.get("/:id", getProductById);
// router.post("/reduce-stock", async (req, res) => {
//   const { productId, quantity } = req.body;

//   if (!productId || !quantity) {
//     return res
//       .status(400)
//       .json({ success: false, message: "Missing productId or quantity" });
//   }

//   if (quantity <= 0) {
//     return res
//       .status(400)
//       .json({ success: false, message: "Quantity must be greater than zero" });
//   }

//   try {
//     const product = await Product.findById(productId);
//     if (!product) {
//       return res
//         .status(404)
//         .json({ success: false, message: "Product not found" });
//     }

//     if (product.stock < quantity) {
//       return res
//         .status(400)
//         .json({ success: false, message: "Insufficient stock" });
//     }

//     product.stock -= quantity;
//     await product.save();

//     return res
//       .status(200)
//       .json({ success: true, message: "Stock updated", stock: product.stock });
//   } catch (error) {
//     console.error("Error reducing stock:", error);
//     return res
//       .status(500)
//       .json({ success: false, message: "Internal server error" });
//   }
// });

// export default router;

import express from "express";
import multer from "multer";
import path from "path";
// import Product from "../model/product.model.js"; // Assuming you have a Product model defined
import {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  getProductById,
  reduceStock,
} from "../controller/product.controller.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Product Routes
router.post("/", upload.single("image"), createProduct);
router.get("/all", getProduct);
router.put("/update/:id", upload.single("image"), updateProduct);
router.delete("/delete/:id", deleteProduct);
router.get("/:id", getProductById);

// ✅ Route to reduce stock
router.post("/reduce-stock", reduceStock);

export default router;
