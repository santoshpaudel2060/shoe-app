// import React, { useState, ChangeEvent, FormEvent } from "react";
// import axios from "axios";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// // Define product type
// interface Product {
//   _id: string;
//   title: string;
//   productBeforeDiscount: number;
//   productAfterDiscount: number;
//   category: string;
//   image: string;
// }

// const AdminProducts: React.FC = () => {
//   const queryClient = useQueryClient();
//   const [editProductId, setEditProductId] = useState<string | null>(null);
//   const [deleteProductId, setDeleteProductId] = useState<string | null>(null);
//   const [formData, setFormData] = useState<Omit<Product, "_id" | "image">>({
//     title: "",
//     productBeforeDiscount: 0,
//     productAfterDiscount: 0,
//     category: "men",
//   });

//   // Fetch products
//   const getProducts = async (): Promise<Product[]> => {
//     const res = await axios.get("http://localhost:4000/api/product/all");
//     return res.data.data;
//   };

//   const {
//     data: products,
//     isLoading,
//     isError,
//   } = useQuery<Product[]>({
//     queryKey: ["products"],
//     queryFn: getProducts,
//   });

//   // Delete mutation
//   const deleteMutation = useMutation({
//     mutationFn: async (id: string) => {
//       await axios.delete(`http://localhost:4000/api/product/delete/${id}`);
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries(["products"]);
//     },
//   });

//   // Update mutation
//   const updateMutation = useMutation({
//     mutationFn: async ({
//       id,
//       updatedData,
//     }: {
//       id: string;
//       updatedData: typeof formData;
//     }) => {
//       const form = new FormData();
//       Object.entries(updatedData).forEach(([key, value]) => {
//         form.append(key, String(value));
//       });

//       await axios.put(`http://localhost:4000/api/product/update/${id}`, form);
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries(["products"]);
//       setEditProductId(null);
//     },
//   });

//   const handleEditClick = (product: Product) => {
//     setEditProductId(product._id);
//     setFormData({
//       title: product.title,
//       productBeforeDiscount: product.productBeforeDiscount,
//       productAfterDiscount: product.productAfterDiscount,
//       category: product.category,
//     });
//   };

//   const handleUpdateSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (editProductId) {
//       updateMutation.mutate({ id: editProductId, updatedData: formData });
//     }
//   };

//   const handleChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: name.includes("Discount") ? Number(value) : value,
//     }));
//   };

//   if (isLoading) return <p>Loading...</p>;
//   if (isError) return <p>Error loading products</p>;

//   return (
//     <>
//       <Navbar />
//       <div className="p-6">
//         <h1 className="text-xl font-bold mb-4 text-center">Admin Products</h1>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {products?.map((product) => (
//             <div key={product._id} className="border p-4 rounded shadow">
//               {/* <img
//                 src={`http://localhost:4000/uploads/${product.image}`}
//                 alt={product.title}
//                 className="w-full h-40 object-cover mb-2"
//               /> */}
//               <img
//                 src={`http://localhost:4000/uploads/${product.image}`}
//                 alt={product.title}
//                 className="w-full h-60 object-contain mb-2 bg-white rounded"
//               />
//               <h2 className="font-bold">{product.title}</h2>
//               <p>Before: Rs. {product.productBeforeDiscount}</p>
//               <p>After: Rs. {product.productAfterDiscount}</p>
//               <p>Category: {product.category}</p>

//               <div className="flex gap-2 mt-4">
//                 <button
//                   onClick={() => setDeleteProductId(product._id)}
//                   className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                 >
//                   Delete
//                 </button>
//                 <button
//                   onClick={() => handleEditClick(product)}
//                   className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
//                 >
//                   Update
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Update Modal */}
//         {editProductId && (
//           <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
//             <div className="bg-white p-6 rounded-lg w-[90%] max-w-md shadow-lg">
//               <h2 className="text-lg font-semibold mb-4">Update Product</h2>
//               <form onSubmit={handleUpdateSubmit} className="space-y-3">
//                 <h1>Name:</h1>
//                 <input
//                   name="title"
//                   value={formData.title}
//                   onChange={handleChange}
//                   placeholder="Title"
//                   className="w-full p-2 border rounded"
//                 />
//                 <h1>productBeforeDiscount:</h1>
//                 <input
//                   type="number"
//                   name="productBeforeDiscount"
//                   value={formData.productBeforeDiscount}
//                   onChange={handleChange}
//                   placeholder="Before Discount"
//                   className="w-full p-2 border rounded"
//                 />
//                 <h1>productAfterDiscount:</h1>
//                 <input
//                   type="number"
//                   name="productAfterDiscount"
//                   value={formData.productAfterDiscount}
//                   onChange={handleChange}
//                   placeholder="After Discount"
//                   className="w-full p-2 border rounded"
//                 />
//                 <h1>Category:</h1>
//                 <select
//                   name="category"
//                   value={formData.category}
//                   onChange={handleChange}
//                   className="w-full p-2 border rounded"
//                 >
//                   <option value="men">Men</option>
//                   <option value="women">Women</option>
//                 </select>

//                 <div className="flex justify-end gap-2 pt-2">
//                   <button
//                     type="button"
//                     onClick={() => setEditProductId(null)}
//                     className="bg-gray-300 px-4 py-2 rounded"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     className="bg-green-600 text-white px-4 py-2 rounded"
//                   >
//                     Update
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}

//         {/* Delete Confirmation Modal */}
//         {deleteProductId && (
//           <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
//             <div className="bg-white p-6 rounded-lg w-[90%] max-w-sm shadow-lg">
//               <h2 className="text-lg font-semibold mb-4">Confirm Deletion</h2>
//               <p>Are you sure you want to delete this product?</p>
//               <div className="flex justify-end gap-4 pt-4">
//                 <button
//                   className="px-4 py-2 bg-gray-300 rounded"
//                   onClick={() => setDeleteProductId(null)}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   className="px-4 py-2 bg-red-600 text-white rounded"
//                   onClick={() => {
//                     if (deleteProductId) {
//                       deleteMutation.mutate(deleteProductId);
//                       setDeleteProductId(null);
//                     }
//                   }}
//                 >
//                   Yes, Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default AdminProducts;

// import React, { useState, ChangeEvent, FormEvent } from "react";
// import axios from "axios";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// // Product type
// interface Product {
//   _id: string;
//   title: string;
//   productBeforeDiscount: number;
//   productAfterDiscount: number;
//   category: string;
//   image: string;
// }

// const AdminProducts: React.FC = () => {
//   const queryClient = useQueryClient();
//   const [editProductId, setEditProductId] = useState<string | null>(null);
//   const [deleteProductId, setDeleteProductId] = useState<string | null>(null);
//   const [formData, setFormData] = useState<{
//     title: string;
//     productBeforeDiscount: number;
//     productAfterDiscount: number;
//     category: string;
//     image?: File;
//   }>({
//     title: "",
//     productBeforeDiscount: 0,
//     productAfterDiscount: 0,
//     category: "men",
//     image: undefined,
//   });

//   // Fetch products
//   const getProducts = async (): Promise<Product[]> => {
//     const res = await axios.get("http://localhost:4000/api/product/all");
//     return res.data.data;
//   };

//   const {
//     data: products,
//     isLoading,
//     isError,
//   } = useQuery<Product[]>({
//     queryKey: ["products"],
//     queryFn: getProducts,
//   });

//   // Delete product
//   const deleteMutation = useMutation({
//     mutationFn: async (id: string) => {
//       await axios.delete(`http://localhost:4000/api/product/delete/${id}`);
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries(["products"]);
//     },
//   });

//   // Update product
//   const updateMutation = useMutation({
//     mutationFn: async ({
//       id,
//       updatedData,
//     }: {
//       id: string;
//       updatedData: typeof formData;
//     }) => {
//       const form = new FormData();
//       form.append("title", updatedData.title);
//       form.append(
//         "productBeforeDiscount",
//         String(updatedData.productBeforeDiscount)
//       );
//       form.append(
//         "productAfterDiscount",
//         String(updatedData.productAfterDiscount)
//       );
//       form.append("category", updatedData.category);
//       if (updatedData.image) {
//         form.append("image", updatedData.image);
//       }

//       await axios.put(`http://localhost:4000/api/product/update/${id}`, form);
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries(["products"]);
//       setEditProductId(null);
//     },
//   });

//   // Handle input changes
//   const handleChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value, files } = e.target as HTMLInputElement;

//     if (name === "image" && files && files[0]) {
//       setFormData((prev) => ({
//         ...prev,
//         image: files[0],
//       }));
//     } else {
//       setFormData((prev) => ({
//         ...prev,
//         [name]: name.includes("Discount") ? Number(value) : value,
//       }));
//     }
//   };

//   // Open edit modal
//   const handleEditClick = (product: Product) => {
//     setEditProductId(product._id);
//     setFormData({
//       title: product.title,
//       productBeforeDiscount: product.productBeforeDiscount,
//       productAfterDiscount: product.productAfterDiscount,
//       category: product.category,
//       image: undefined,
//     });
//   };

//   const handleUpdateSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (editProductId) {
//       updateMutation.mutate({ id: editProductId, updatedData: formData });
//     }
//   };

//   if (isLoading) return <p>Loading...</p>;
//   if (isError) return <p>Error loading products</p>;

//   return (
//     <>
//       <Navbar />
//       <div className="p-6">
//         <h1 className="text-xl font-bold mb-4 text-center">
//           Admin Products (List View)
//         </h1>

//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white border border-gray-200 text-sm">
//             <thead>
//               <tr className="bg-gray-100 text-left">
//                 <th className="p-3 border-b">Image</th>
//                 <th className="p-3 border-b">Title</th>
//                 <th className="p-3 border-b">Before Discount</th>
//                 <th className="p-3 border-b">After Discount</th>
//                 <th className="p-3 border-b">Category</th>
//                 <th className="p-3 border-b text-center">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {products?.map((product) => (
//                 <tr key={product._id} className="border-b hover:bg-gray-50">
//                   <td className="p-3">
//                     <img
//                       src={`http://localhost:4000/uploads/${product.image}`}
//                       alt={product.title}
//                       className="h-16 w-16 object-contain bg-white rounded"
//                     />
//                   </td>
//                   <td className="p-3">{product.title}</td>
//                   <td className="p-3">Rs. {product.productBeforeDiscount}</td>
//                   <td className="p-3">Rs. {product.productAfterDiscount}</td>
//                   <td className="p-3">{product.category}</td>
//                   <td className="p-3 text-center space-x-2">
//                     <button
//                       onClick={() => handleEditClick(product)}
//                       className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
//                     >
//                       Update
//                     </button>
//                     <button
//                       onClick={() => setDeleteProductId(product._id)}
//                       className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Update Modal */}
//         {editProductId && (
//           <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
//             <div className="bg-white p-6 rounded-lg w-[90%] max-w-md shadow-lg">
//               <h2 className="text-lg font-semibold mb-4">Update Product</h2>
//               <form onSubmit={handleUpdateSubmit} className="space-y-3">
//                 <label>Title:</label>
//                 <input
//                   name="title"
//                   value={formData.title}
//                   onChange={handleChange}
//                   className="w-full p-2 border rounded"
//                 />
//                 <label>Product Before Discount:</label>
//                 <input
//                   type="number"
//                   name="productBeforeDiscount"
//                   value={formData.productBeforeDiscount}
//                   onChange={handleChange}
//                   className="w-full p-2 border rounded"
//                 />
//                 <label>Product After Discount:</label>
//                 <input
//                   type="number"
//                   name="productAfterDiscount"
//                   value={formData.productAfterDiscount}
//                   onChange={handleChange}
//                   className="w-full p-2 border rounded"
//                 />
//                 <label>Category:</label>
//                 <select
//                   name="category"
//                   value={formData.category}
//                   onChange={handleChange}
//                   className="w-full p-2 border rounded"
//                 >
//                   <option value="men">Men</option>
//                   <option value="women">Women</option>
//                 </select>

//                 <label>Update Image (optional):</label>
//                 <input
//                   type="file"
//                   name="image"
//                   accept="image/*"
//                   onChange={handleChange}
//                   className="w-full p-2 border rounded"
//                 />

//                 <div className="flex justify-end gap-2 pt-2">
//                   <button
//                     type="button"
//                     onClick={() => setEditProductId(null)}
//                     className="bg-gray-300 px-4 py-2 rounded"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     className="bg-green-600 text-white px-4 py-2 rounded"
//                   >
//                     Update
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}

//         {/* Delete Modal */}
//         {deleteProductId && (
//           <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
//             <div className="bg-white p-6 rounded-lg w-[90%] max-w-sm shadow-lg">
//               <h2 className="text-lg font-semibold mb-4">Confirm Deletion</h2>
//               <p>Are you sure you want to delete this product?</p>
//               <div className="flex justify-end gap-4 pt-4">
//                 <button
//                   className="px-4 py-2 bg-gray-300 rounded"
//                   onClick={() => setDeleteProductId(null)}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   className="px-4 py-2 bg-red-600 text-white rounded"
//                   onClick={() => {
//                     if (deleteProductId) {
//                       deleteMutation.mutate(deleteProductId);
//                       setDeleteProductId(null);
//                     }
//                   }}
//                 >
//                   Yes, Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default AdminProducts;

import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Product type with stock added
interface Product {
  _id: string;
  title: string;
  productBeforeDiscount: number;
  productAfterDiscount: number;
  category: string;
  image: string;
  stock: number; // <-- Added stock here
}

const AdminProducts: React.FC = () => {
  const queryClient = useQueryClient();
  const [editProductId, setEditProductId] = useState<string | null>(null);
  const [deleteProductId, setDeleteProductId] = useState<string | null>(null);
  const [formData, setFormData] = useState<{
    title: string;
    productBeforeDiscount: number;
    productAfterDiscount: number;
    category: string;
    image?: File;
    stock: number; // add stock here
  }>({
    title: "",
    productBeforeDiscount: 0,
    productAfterDiscount: 0,
    category: "men",
    image: undefined,
    stock: 0,
  });

  // Fetch products
  const getProducts = async (): Promise<Product[]> => {
    const res = await axios.get("http://localhost:4000/api/product/all");
    return res.data.data;
  };

  const {
    data: products,
    isLoading,
    isError,
  } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  // Delete product
  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      await axios.delete(`http://localhost:4000/api/product/delete/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    },
  });

  // Update product
  const updateMutation = useMutation({
    mutationFn: async (params: {
      id: string;
      updatedData: typeof formData;
    }) => {
      const form = new FormData();
      form.append("title", params.updatedData.title);
      form.append(
        "productBeforeDiscount",
        String(params.updatedData.productBeforeDiscount)
      );
      form.append(
        "productAfterDiscount",
        String(params.updatedData.productAfterDiscount)
      );
      form.append("category", params.updatedData.category);
      form.append("stock", String(params.updatedData.stock)); // send stock to backend
      if (params.updatedData.image) {
        form.append("image", params.updatedData.image);
      }

      await axios.put(
        `http://localhost:4000/api/product/update/${params.id}`,
        form
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
      setEditProductId(null);
    },
  });

  // Handle input changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;

    if (name === "image" && files && files[0]) {
      setFormData((prev) => ({
        ...prev,
        image: files[0],
      }));
    } else if (
      name === "productBeforeDiscount" ||
      name === "productAfterDiscount" ||
      name === "stock"
    ) {
      setFormData((prev) => ({
        ...prev,
        [name]: Number(value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Open edit modal
  const handleEditClick = (product: Product) => {
    setEditProductId(product._id);
    setFormData({
      title: product.title,
      productBeforeDiscount: product.productBeforeDiscount,
      productAfterDiscount: product.productAfterDiscount,
      category: product.category,
      image: undefined,
      stock: product.stock, // fill stock value here
    });
  };

  const handleUpdateSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editProductId) {
      updateMutation.mutate({ id: editProductId, updatedData: formData });
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading products</p>;

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h1 className="text-xl font-bold mb-4 text-center">
          Admin Products (List View)
        </h1>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 text-sm">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3 border-b">Image</th>
                <th className="p-3 border-b">Title</th>
                <th className="p-3 border-b">Before Discount</th>
                <th className="p-3 border-b">After Discount</th>
                <th className="p-3 border-b">Category</th>
                <th className="p-3 border-b">Stock</th> {/* Display stock */}
                <th className="p-3 border-b text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product) => (
                <tr key={product._id} className="border-b hover:bg-gray-50">
                  <td className="p-3">
                    <img
                      src={`http://localhost:4000/uploads/${product.image}`}
                      alt={product.title}
                      className="h-16 w-16 object-contain bg-white rounded"
                    />
                  </td>
                  <td className="p-3">{product.title}</td>
                  <td className="p-3">Rs. {product.productBeforeDiscount}</td>
                  <td className="p-3">Rs. {product.productAfterDiscount}</td>
                  <td className="p-3">{product.category}</td>
                  <td className="p-3">{product.stock}</td> {/* Show stock */}
                  <td className="p-3 text-center space-x-2">
                    <button
                      onClick={() => handleEditClick(product)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => setDeleteProductId(product._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Update Modal */}
        {editProductId && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-[90%] max-w-md shadow-lg">
              <h2 className="text-lg font-semibold mb-4">Update Product</h2>
              <form onSubmit={handleUpdateSubmit} className="space-y-3">
                <label>Title:</label>
                <input
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
                <label>Product Before Discount:</label>
                <input
                  type="number"
                  name="productBeforeDiscount"
                  value={formData.productBeforeDiscount}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
                <label>Product After Discount:</label>
                <input
                  type="number"
                  name="productAfterDiscount"
                  value={formData.productAfterDiscount}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
                <label>Category:</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                >
                  <option value="men">Men</option>
                  <option value="women">Women</option>
                </select>

                <label>Stock:</label>
                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  min={0}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />

                <label>Update Image (optional):</label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setEditProductId(null)}
                    className="bg-gray-300 px-4 py-2 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-4 py-2 rounded"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Delete Modal */}
        {deleteProductId && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-[90%] max-w-sm shadow-lg">
              <h2 className="text-lg font-semibold mb-4">Confirm Deletion</h2>
              <p>Are you sure you want to delete this product?</p>
              <div className="flex justify-end gap-4 pt-4">
                <button
                  className="px-4 py-2 bg-gray-300 rounded"
                  onClick={() => setDeleteProductId(null)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-red-600 text-white rounded"
                  onClick={() => {
                    if (deleteProductId) {
                      deleteMutation.mutate(deleteProductId);
                      setDeleteProductId(null);
                    }
                  }}
                >
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default AdminProducts;
