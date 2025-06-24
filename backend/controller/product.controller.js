import { Product } from "../models/product.models.js";

// In createProduct
const createProduct = async (req, res) => {
  console.log("req.body:", req.body);
  console.log("req.file:", req.file);
  const {
    title,
    productBeforeDiscount,
    productAfterDiscount,
    category,
    description,
    stock,
  } = req.body;

  const image = req.file ? req.file.filename : null;

  if (
    !title ||
    !productBeforeDiscount ||
    !productAfterDiscount ||
    !category ||
    !description ||
    !stock // check stock exists
  ) {
    return res.status(400).json({ message: "Please fill all fields" });
  }

  // Validate discount logic
  if (Number(productAfterDiscount) > Number(productBeforeDiscount)) {
    return res.status(400).json({
      success: false,
      message: "Discounted price cannot be greater than original price",
    });
  }

  // Validate category
  const validCategories = ["men", "women"];
  if (!validCategories.includes(category.toLowerCase())) {
    return res.status(400).json({
      success: false,
      message: "Invalid category. Must be 'men' or 'women'",
    });
  }

  // Validate stock is a number and non-negative
  if (isNaN(stock) || Number(stock) < 0) {
    return res.status(400).json({
      success: false,
      message: "Stock must be a non-negative number",
    });
  }

  try {
    const newProduct = new Product({
      image,
      title,
      productAfterDiscount: Number(productAfterDiscount),
      productBeforeDiscount: Number(productBeforeDiscount),
      category: category.toLowerCase(),
      description,
      stock: Number(stock),
    });

    await newProduct.save();

    res.status(201).json({
      success: true,
      message: "Product Created Successfully",
      product: newProduct,
    });
  } catch (error) {
    console.error("Error in product upload:", error);
    res.status(500).json({ error: "Server error while creating product" });
  }
};

// Get products (optionally filtered by category)
const getProduct = async (req, res) => {
  const { category } = req.query;

  try {
    let filter = {};
    if (category) {
      filter.category = category.toLowerCase();
    }

    const products = await Product.find(filter);

    return res.status(200).json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (error) {
    console.error("Error in fetching products:", error);
    return res
      .status(500)
      .json({ message: "Server error while fetching products" });
  }
};

// const updateProduct = async (req, res) => {
//   const { id } = req.params;
//   const {
//     title,
//     productBeforeDiscount,
//     productAfterDiscount,
//     category,
//     description,
//   } = req.body;
//   const image = req.file ? req.file.filename : undefined;

//   try {
//     const existingProduct = await Product.findById(id);
//     if (!existingProduct) {
//       return res
//         .status(404)
//         .json({ success: false, message: "Product not found" });
//     }

//     // Validate discount logic
//     if (productAfterDiscount > productBeforeDiscount) {
//       return res.status(400).json({
//         success: false,
//         message: "Discounted price cannot be greater than original price",
//       });
//     }

//     // Update fields
//     if (title) existingProduct.title = title;
//     if (productBeforeDiscount)
//       existingProduct.productBeforeDiscount = productBeforeDiscount;
//     if (productAfterDiscount)
//       existingProduct.productAfterDiscount = productAfterDiscount;
//     if (category) existingProduct.category = category.toLowerCase();
//     if (image) existingProduct.image = image;
//     if (description) existingProduct.description = description;

//     await existingProduct.save();

//     res.status(200).json({
//       success: true,
//       message: "Product updated successfully",
//       product: existingProduct,
//     });
//   } catch (error) {
//     console.error("Error updating product:", error);
//     res
//       .status(500)
//       .json({ success: false, message: "Server error during update" });
//   }
// };

// const updateProduct = async (req, res) => {
//   const { id } = req.params;
//   const {
//     title,
//     productBeforeDiscount,
//     productAfterDiscount,
//     category,
//     description,
//     stock,
//   } = req.body;
//   const image = req.file ? req.file.filename : undefined;

//   try {
//     const existingProduct = await Product.findById(id);
//     if (!existingProduct) {
//       return res
//         .status(404)
//         .json({ success: false, message: "Product not found" });
//     }

//     // Validate discount logic
//     if (
//       productAfterDiscount !== undefined &&
//       productBeforeDiscount !== undefined &&
//       Number(productAfterDiscount) > Number(productBeforeDiscount)
//     ) {
//       return res.status(400).json({
//         success: false,
//         message: "Discounted price cannot be greater than original price",
//       });
//     }

//     if (title) existingProduct.title = title;
//     if (productBeforeDiscount !== undefined)
//       existingProduct.productBeforeDiscount = Number(productBeforeDiscount);
//     if (productAfterDiscount !== undefined)
//       existingProduct.productAfterDiscount = Number(productAfterDiscount);
//     if (category) existingProduct.category = category.toLowerCase();
//     if (image) existingProduct.image = image;
//     if (description) existingProduct.description = description;

//     if (stock !== undefined) {
//       if (isNaN(stock) || Number(stock) < 0) {
//         return res.status(400).json({
//           success: false,
//           message: "Stock must be a non-negative number",
//         });
//       }
//       existingProduct.stock = Number(stock);
//     }

//     await existingProduct.save();

//     res.status(200).json({
//       success: true,
//       message: "Product updated successfully",
//       product: existingProduct,
//     });
//   } catch (error) {
//     console.error("Error updating product:", error);
//     res
//       .status(500)
//       .json({ success: false, message: "Server error during update" });
//   }
// };

const updateProduct = async (req, res) => {
  const { id } = req.params;

  // Log to debug
  console.log("req.body:", req.body);
  console.log("req.file:", req.file);

  // Since FormData sends everything as string, convert manually
  const {
    title,
    productBeforeDiscount,
    productAfterDiscount,
    category,
    description,
    stock,
  } = req.body;

  const image = req.file ? req.file.filename : undefined;

  try {
    const existingProduct = await Product.findById(id);
    if (!existingProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    // Convert and validate numbers
    const beforePrice = Number(productBeforeDiscount);
    const afterPrice = Number(productAfterDiscount);
    const stockCount = Number(stock);

    if (!isNaN(beforePrice))
      existingProduct.productBeforeDiscount = beforePrice;
    if (!isNaN(afterPrice)) existingProduct.productAfterDiscount = afterPrice;
    if (!isNaN(stockCount)) {
      if (stockCount < 0) {
        return res.status(400).json({
          success: false,
          message: "Stock must be a non-negative number",
        });
      }
      existingProduct.stock = stockCount;
    }

    if (title) existingProduct.title = title;
    if (category) existingProduct.category = category.toLowerCase();
    if (description) existingProduct.description = description;
    if (image) existingProduct.image = image;

    if (beforePrice && afterPrice && afterPrice > beforePrice) {
      return res.status(400).json({
        success: false,
        message: "Discounted price cannot be greater than original price",
      });
    }

    await existingProduct.save();

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product: existingProduct,
    });
  } catch (error) {
    console.error("Error updating product:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting product:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error during delete" });
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    res.status(200).json({ success: true, product });
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error while fetching product" });
  }
};

const reduceStock = async (req, res) => {
  const { productId, quantity } = req.body;
  if (!productId || !quantity) {
    return res
      .status(400)
      .json({ success: false, message: "Missing productId or quantity" });
  }

  if (quantity <= 0) {
    return res
      .status(400)
      .json({ success: false, message: "Quantity must be greater than zero" });
  }

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    if (product.stock < quantity) {
      return res
        .status(400)
        .json({ success: false, message: "Insufficient stock" });
    }

    product.stock -= quantity;
    await product.save();

    return res
      .status(200)
      .json({ success: true, message: "Stock updated", stock: product.stock });
  } catch (error) {
    console.error("Error reducing stock:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

export {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  getProductById,
  reduceStock,
};
