import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";

interface ColorOption {
  name: string;
  hex: string;
}

interface Product {
  _id: string;
  title: string;
  productCategory: string;
  image: string;
  productBeforeDiscount?: number;
  productAfterDiscount: number;
  createdAt: string;
  description: string;
  features?: string[];
  colors?: ColorOption[];
  sizes?: string[];
}

interface ProductResponse {
  product: Product | null;
  message?: string;
}

const fetchProductById = async (id: string): Promise<ProductResponse> => {
  const res = await fetch(`http://localhost:4000/api/product/${id}`);
  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.message || "Failed to fetch product");
  }
  return res.json();
};

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useQuery<ProductResponse, Error>({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id!),
  });

  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<ColorOption | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [addedToCart, setAddedToCart] = useState<boolean>(false);

  const { addItem } = useCart();

  if (isLoading)
    return <p className="text-center mt-10">Loading product details...</p>;
  if (error)
    return (
      <p className="text-center mt-10 text-red-600">Error: {error.message}</p>
    );

  const product = data?.product;
  if (!product) return <p className="text-center mt-10">No product found.</p>;

  const features = product.features || [
    "Lightweight and durable",
    "Breathable fabric",
    "Rubber sole for traction",
    "Available in multiple colors",
  ];

  const colors: ColorOption[] = product.colors || [
    { name: "red", hex: "#ef4444" },
    { name: "blue", hex: "#3b82f6" },
    { name: "green", hex: "#22c55e" },
  ];

  const sizes: string[] = product.sizes || ["S", "M", "L", "XL"];

  const discountPercent = product.productBeforeDiscount
    ? Math.round(
        ((product.productBeforeDiscount - product.productAfterDiscount) /
          product.productBeforeDiscount) *
          100
      )
    : 0;

  const handleAddToCart = () => {
    if (!selectedSize) {
      // alert("Please select a size.");
      toast.warn("Please select a size !", {
        position: "top-center",
        autoClose: 1000,
      });
      return;
    }

    addItem({
      id: product._id,
      name: product.title,
      price: product.productAfterDiscount,
      image: `http://localhost:4000/uploads/${product.image}`,
      category: product.productCategory,
      size: selectedSize,
    });

    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto my-12 px-4 flex flex-col md:flex-row gap-10">
        {/* Product Image */}
        <div className="flex-1 rounded-lg shadow-lg overflow-hidden bg-white">
          <img
            src={`http://localhost:4000/uploads/${product.image}`}
            alt={product.title}
            className="w-full max-w-md rounded-md object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 flex flex-col">
          <h1 className="text-4xl font-extrabold mb-1">{product.title}</h1>
          <p className="uppercase text-gray-500 tracking-wide mb-6">
            {product.productCategory}
          </p>
          {/* Price */}
          <div className="mb-4 flex items-center gap-4">
            {product.productBeforeDiscount && (
              <span className="line-through text-gray-400 font-semibold text-xl">
                ₹{product.productBeforeDiscount.toFixed(2)}
              </span>
            )}
            <span className="text-3xl font-bold text-green-600">
              ₹{product.productAfterDiscount.toFixed(2)}
            </span>
            {discountPercent > 0 && (
              <span className="bg-red-100 text-red-600 text-sm font-semibold px-2 py-1 rounded">
                -{discountPercent}%
              </span>
            )}
          </div>
          <p className="text-sm text-gray-400 mb-8">
            Added on: {new Date(product.createdAt).toLocaleDateString()}
          </p>
          {/* Colors */}
          <div className="mb-8">
            <h3 className="font-semibold mb-3">Choose Color</h3>
            <div className="flex gap-4">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color)}
                  aria-label={`Select color ${color.name}`}
                  className={`w-10 h-10 rounded-full border-2 transition ${
                    selectedColor?.name === color.name
                      ? "border-black shadow-md"
                      : "border-transparent"
                  }`}
                  style={{ backgroundColor: color.hex }}
                />
              ))}
            </div>
          </div>
          {/* Sizes */}
          <div className="mb-8">
            <h3 className="font-semibold mb-3">Select Size</h3>
            <div className="flex gap-4">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-5 py-2 rounded-lg border-2 font-semibold transition ${
                    selectedSize === size
                      ? "border-black bg-gray-200"
                      : "border-gray-300 hover:border-gray-500"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className={`px-6 py-3 font-semibold rounded-lg text-white ${
              addedToCart ? "bg-green-500" : "bg-black hover:bg-gray-800"
            }`}
          >
            {addedToCart ? "Added to Cart" : "Add to Cart"}
          </button>
          {/* Description */}
          <div className="mt-10 bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">
              Product Description
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>

            {features.length > 0 && (
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-3">Key Features:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetail;
