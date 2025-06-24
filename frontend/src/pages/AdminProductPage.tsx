// import React from "react";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import { useMutation } from "@tanstack/react-query";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// type ProductFormData = {
//   image: FileList;
//   title: string;
//   productBeforeDiscount: number;
//   productAfterDiscount: number;
//   category: "men" | "women";
//   description: string;
// };

// const addProduct = async (formData: FormData) => {
//   const response = await axios.post(
//     "http://localhost:4000/api/product",
//     formData,
//     {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     }
//   );
//   return response.data;
// };

// const AdminProductPage: React.FC = () => {
//   const navigate = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm<ProductFormData>();

//   const mutation = useMutation({
//     mutationFn: addProduct,
//     onSuccess: () => {
//       reset();
//       alert("Product added successfully!");
//       navigate("/");
//     },
//     onError: (error: any) => {
//       console.error("Error adding product:", error);
//       alert("Failed to add product. Please check inputs.");
//     },
//   });

//   const onSubmit = (data: ProductFormData) => {
//     if (!data.image || data.image.length === 0) {
//       alert("Please upload an image.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("image", data.image[0]); // Send only first image
//     formData.append("title", data.title);
//     formData.append(
//       "productBeforeDiscount",
//       data.productBeforeDiscount.toString()
//     );
//     formData.append(
//       "productAfterDiscount",
//       data.productAfterDiscount.toString()
//     );
//     formData.append("category", data.category);
//     formData.append("description", data.description);

//     mutation.mutate(formData);
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="max-w-xl mx-auto p-6">
//         <h1 className="text-2xl font-bold mb-4">Add Product</h1>
//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           className="space-y-4 bg-white p-6 rounded shadow"
//         >
//           <div>
//             <label className="block text-sm font-medium">Image</label>
//             <input
//               type="file"
//               accept="image/*"
//               {...register("image", { required: "Image is required" })}
//               className="w-full border px-3 py-2 rounded"
//             />
//             {errors.image && (
//               <p className="text-red-600 text-sm">{errors.image.message}</p>
//             )}
//           </div>

//           <div>
//             <label className="block text-sm font-medium">Title</label>
//             <input
//               type="text"
//               {...register("title", { required: "Title is required" })}
//               className="w-full border px-3 py-2 rounded"
//             />
//             {errors.title && (
//               <p className="text-red-600 text-sm">{errors.title.message}</p>
//             )}
//           </div>

//           <div>
//             <label className="block text-sm font-medium">
//               Price Before Discount
//             </label>
//             <input
//               type="number"
//               {...register("productBeforeDiscount", {
//                 required: "Price before discount is required",
//                 min: { value: 1, message: "Price must be at least 1" },
//               })}
//               className="w-full border px-3 py-2 rounded"
//             />
//             {errors.productBeforeDiscount && (
//               <p className="text-red-600 text-sm">
//                 {errors.productBeforeDiscount.message}
//               </p>
//             )}
//           </div>

//           <div>
//             <label className="block text-sm font-medium">
//               Price After Discount
//             </label>
//             <input
//               type="number"
//               {...register("productAfterDiscount", {
//                 required: "Price after discount is required",
//                 min: { value: 1, message: "Price must be at least 1" },
//               })}
//               className="w-full border px-3 py-2 rounded"
//             />
//             {errors.productAfterDiscount && (
//               <p className="text-red-600 text-sm">
//                 {errors.productAfterDiscount.message}
//               </p>
//             )}
//           </div>

//           <div>
//             <label className="block text-sm font-medium">Category</label>
//             <select
//               defaultValue=""
//               {...register("category", {
//                 required: "Category is required",
//               })}
//               className="w-full border px-3 py-2 rounded"
//             >
//               <option value="" disabled>
//                 -- Select Category --
//               </option>
//               <option value="men">Men</option>
//               <option value="women">Women</option>
//             </select>
//             {errors.category && (
//               <p className="text-red-600 text-sm">{errors.category.message}</p>
//             )}
//           </div>

//           <div>
//             <label className="block text-sm font-medium">Description</label>
//             <input
//               type="text"
//               {...register("description", {
//                 required: "Description is required",
//                 min: { value: 1, message: "Description must be at least 1" },
//               })}
//               className="w-full border px-3 py-2 rounded"
//             />
//             {errors.description && (
//               <p className="text-red-600 text-sm">
//                 {errors.description.message}
//               </p>
//             )}
//           </div>

//           <button
//             type="submit"
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
//             disabled={mutation.isLoading}
//           >
//             {mutation.isLoading ? "Adding..." : "Add Product"}
//           </button>
//         </form>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default AdminProductPage;

import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type ProductFormData = {
  image: FileList;
  title: string;
  productBeforeDiscount: number;
  productAfterDiscount: number;
  category: "men" | "women";
  description: string;
  stock: number; // new field for stock quantity
};

const addProduct = async (formData: FormData) => {
  const response = await axios.post(
    "http://localhost:4000/api/product",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};

const AdminProductPage: React.FC = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductFormData>();

  const mutation = useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      reset();
      alert("Product added successfully!");
      navigate("/"); // or wherever you want to redirect
    },
    onError: (error: any) => {
      console.error("Error adding product:", error);
      alert("Failed to add product. Please check inputs.");
    },
  });

  const onSubmit = (data: ProductFormData) => {
    if (!data.image || data.image.length === 0) {
      alert("Please upload an image.");
      return;
    }

    const formData = new FormData();
    formData.append("image", data.image[0]);
    formData.append("title", data.title);
    formData.append(
      "productBeforeDiscount",
      data.productBeforeDiscount.toString()
    );
    formData.append(
      "productAfterDiscount",
      data.productAfterDiscount.toString()
    );
    formData.append("category", data.category);
    formData.append("description", data.description);
    formData.append("stock", data.stock.toString()); // append stock here

    mutation.mutate(formData);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Add Product</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 bg-white p-6 rounded shadow"
        >
          <div>
            <label className="block text-sm font-medium">Image</label>
            <input
              type="file"
              accept="image/*"
              {...register("image", { required: "Image is required" })}
              className="w-full border px-3 py-2 rounded"
            />
            {errors.image && (
              <p className="text-red-600 text-sm">{errors.image.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Title</label>
            <input
              type="text"
              {...register("title", { required: "Title is required" })}
              className="w-full border px-3 py-2 rounded"
            />
            {errors.title && (
              <p className="text-red-600 text-sm">{errors.title.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">
              Price Before Discount
            </label>
            <input
              type="number"
              {...register("productBeforeDiscount", {
                required: "Price before discount is required",
                min: { value: 1, message: "Price must be at least 1" },
              })}
              className="w-full border px-3 py-2 rounded"
            />
            {errors.productBeforeDiscount && (
              <p className="text-red-600 text-sm">
                {errors.productBeforeDiscount.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">
              Price After Discount
            </label>
            <input
              type="number"
              {...register("productAfterDiscount", {
                required: "Price after discount is required",
                min: { value: 1, message: "Price must be at least 1" },
              })}
              className="w-full border px-3 py-2 rounded"
            />
            {errors.productAfterDiscount && (
              <p className="text-red-600 text-sm">
                {errors.productAfterDiscount.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Category</label>
            <select
              defaultValue=""
              {...register("category", {
                required: "Category is required",
              })}
              className="w-full border px-3 py-2 rounded"
            >
              <option value="" disabled>
                -- Select Category --
              </option>
              <option value="men">Men</option>
              <option value="women">Women</option>
            </select>
            {errors.category && (
              <p className="text-red-600 text-sm">{errors.category.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Description</label>
            <input
              type="text"
              {...register("description", {
                required: "Description is required",
                minLength: {
                  value: 1,
                  message: "Description must be at least 1",
                },
              })}
              className="w-full border px-3 py-2 rounded"
            />
            {errors.description && (
              <p className="text-red-600 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Stock input */}
          <div>
            <label className="block text-sm font-medium">Stock Quantity</label>
            <input
              type="number"
              {...register("stock", {
                required: "Stock quantity is required",
                min: { value: 0, message: "Stock cannot be negative" },
              })}
              className="w-full border px-3 py-2 rounded"
            />
            {errors.stock && (
              <p className="text-red-600 text-sm">{errors.stock.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
            disabled={mutation.isLoading}
          >
            {mutation.isLoading ? "Adding..." : "Add Product"}
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default AdminProductPage;
