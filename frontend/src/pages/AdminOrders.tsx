// // import React from "react";
// // import axios from "axios";
// // import { useQuery } from "@tanstack/react-query";
// // import Navbar from "../components/Navbar";
// // import Footer from "../components/Footer";

// // interface Order {
// //   _id: string;
// //   userId: string;
// //   products: { title: string; quantity: number; price: number }[];
// //   totalAmount: number;
// //   paymentMethod: string;
// //   status: string;
// //   createdAt: string;
// // }

// // const fetchOrders = async (): Promise<Order[]> => {
// //   const res = await axios.get("http://localhost:4000/api/orders");
// //   return res.data;
// // };

// // const AdminOrders: React.FC = () => {
// //   const {
// //     data: orders,
// //     isLoading,
// //     isError,
// //   } = useQuery<Order[]>({
// //     queryKey: ["orders"],
// //     queryFn: fetchOrders,
// //   });

// //   if (isLoading) return <p>Loading orders...</p>;
// //   if (isError) return <p>Failed to fetch orders</p>;

// //   return (
// //     <>
// //       <Navbar />
// //       <div className="p-6">
// //         <h1 className="text-xl font-bold mb-4 text-center">Customer Orders</h1>

// //         <div className="overflow-x-auto">
// //           <table className="min-w-full bg-white border border-gray-200 text-sm">
// //             <thead className="bg-gray-100 text-left">
// //               <tr>
// //                 <th className="p-3 border-b">Order ID</th>
// //                 <th className="p-3 border-b">User ID</th>
// //                 <th className="p-3 border-b">Products</th>
// //                 <th className="p-3 border-b">Total</th>
// //                 <th className="p-3 border-b">Payment</th>
// //                 <th className="p-3 border-b">Status</th>
// //                 <th className="p-3 border-b">Date</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {orders?.map((order) => (
// //                 <tr key={order._id} className="border-b hover:bg-gray-50">
// //                   <td className="p-3">{order._id}</td>
// //                   <td className="p-3">{order.userId}</td>
// //                   <td className="p-3">
// //                     <ul className="list-disc ml-4">
// //                       {order.products.map((product, idx) => (
// //                         <li key={idx}>
// //                           {product.title} x{product.quantity} (Rs.{" "}
// //                           {product.price})
// //                         </li>
// //                       ))}
// //                     </ul>
// //                   </td>
// //                   <td className="p-3">Rs. {order.totalAmount}</td>
// //                   <td className="p-3">{order.paymentMethod}</td>
// //                   <td className="p-3">{order.status}</td>
// //                   <td className="p-3">
// //                     {new Date(order.createdAt).toLocaleDateString()}
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       </div>
// //       <Footer />
// //     </>
// //   );
// // };

// // export default AdminOrders;

// import React from "react";
// import axios from "axios";
// import { useQuery } from "@tanstack/react-query";
// import Navbar from "../components/Navbar";

// interface Product {
//   title: string;
//   quantity: number;
//   price: number;
// }

// interface Order {
//   _id: string;
//   userId: string;
//   products: Product[];
//   totalAmount: number;
//   paymentMethod: string;
//   status: string;
//   createdAt: string;
// }

// const fetchOrders = async (): Promise<Order[]> => {
//   const res = await axios.get("http://localhost:4000/api/orders/get");
//   return res.data; // Adjust if your backend wraps data differently
// };

// const AdminOrders: React.FC = () => {
//   const {
//     data: orders,
//     isLoading,
//     isError,
//   } = useQuery<Order[]>({
//     queryKey: ["orders"],
//     queryFn: fetchOrders,
//   });

//   if (isLoading) return <p>Loading orders...</p>;
//   if (isError) return <p>Error loading orders</p>;

//   return (
//     <>
//       <Navbar />
//       <div className="p-6 max-w-5xl mx-auto">
//         <h1 className="text-3xl font-bold mb-6 text-center">User Orders</h1>

//         <table className="min-w-full border border-gray-300 rounded-lg">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="border p-2">Order ID</th>
//               <th className="border p-2">User ID</th>
//               <th className="border p-2">Products</th>
//               <th className="border p-2">Total Amount (Rs.)</th>
//               <th className="border p-2">Payment Method</th>
//               <th className="border p-2">Status</th>
//               <th className="border p-2">Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders?.map((order) => (
//               <tr key={order._id} className="border-t hover:bg-gray-50">
//                 <td className="border p-2 text-sm break-words">{order._id}</td>
//                 <td className="border p-2">{order.userId}</td>
//                 <td className="border p-2">
//                   <ul className="list-disc ml-5">
//                     {order.products.map((prod, idx) => (
//                       <li key={idx}>
//                         {prod.title} x{prod.quantity} (Rs. {prod.price})
//                       </li>
//                     ))}
//                   </ul>
//                 </td>
//                 <td className="border p-2 font-semibold">
//                   {order.totalAmount}
//                 </td>
//                 <td className="border p-2">{order.paymentMethod}</td>
//                 <td className="border p-2">{order.status}</td>
//                 <td className="border p-2">
//                   {new Date(order.createdAt).toLocaleString()}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default AdminOrders;

// import React from "react";
// import axios from "axios";
// import { useQuery } from "@tanstack/react-query";
// import Navbar from "../components/Navbar";

// interface Product {
//   title: string;
//   quantity: number;
//   price: number;
// }

// interface Order {
//   _id: string;
//   userId: string;
//   name: string;
//   location: string; // <--- added
//   products: Product[];
//   totalAmount: number;
//   paymentMethod: string;
//   status: string;
//   createdAt: string;
// }

// const fetchOrders = async (): Promise<Order[]> => {
//   const res = await axios.get("http://localhost:4000/api/orders");
//   return res.data.orders ?? res.data; // Adjust according to your backend response shape
// };

// const AdminOrders: React.FC = () => {
//   const {
//     data: orders,
//     isLoading,
//     isError,
//   } = useQuery<Order[]>({
//     queryKey: ["orders"],
//     queryFn: fetchOrders,
//   });

//   if (isLoading) return <p>Loading orders...</p>;
//   if (isError) return <p>Error loading orders</p>;

//   return (
//     <>
//       <Navbar />
//       <div className="p-6 max-w-5xl mx-auto">
//         <h1 className="text-3xl font-bold mb-6 text-center">User Orders</h1>

//         <table className="min-w-full border border-gray-300 rounded-lg">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="border p-2">Order ID</th>
//               <th className="border p-2">User ID</th>
//               <th className="border p-2">Name</th> {/* Added */}
//               <th className="border p-2">Location</th> {/* Added */}
//               <th className="border p-2">Products</th>
//               <th className="border p-2">Total Amount (Rs.)</th>
//               <th className="border p-2">Payment Method</th>
//               <th className="border p-2">Status</th>
//               <th className="border p-2">Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders?.map((order) => (
//               <tr key={order._id} className="border-t hover:bg-gray-50">
//                 <td className="border p-2 text-sm break-words">{order._id}</td>
//                 <td className="border p-2">{order.userId}</td>
//                 <td className="border p-2">{order.name}</td> {/* Added */}
//                 <td className="border p-2">{order.location}</td> {/* Added */}
//                 <td className="border p-2">
//                   <ul className="list-disc ml-5">
//                     {order.products.map((prod, idx) => (
//                       <li key={idx}>
//                         {prod.title} x{prod.quantity} (Rs. {prod.price})
//                       </li>
//                     ))}
//                   </ul>
//                 </td>
//                 <td className="border p-2 font-semibold">
//                   {order.totalAmount}
//                 </td>
//                 <td className="border p-2">{order.paymentMethod}</td>
//                 <td className="border p-2">{order.status}</td>
//                 <td className="border p-2">
//                   {new Date(order.createdAt).toLocaleString()}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default AdminOrders;

import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Navbar from "../components/Navbar";

interface Product {
  name: string;
  quantity: number;
  price: number;
}

interface Order {
  _id: string;
  userId: string;
  deliveryName: string;
  deliveryLocation: string;
  items: Product[];
  totalAmount: number;
  paymentMethod: string;
  status: string;
  createdAt: string;
}

const fetchOrders = async (): Promise<Order[]> => {
  const res = await axios.get("http://localhost:4000/api/orders/all");
  return res.data.orders;
};

const AdminOrders: React.FC = () => {
  const {
    data: orders,
    isLoading,
    isError,
  } = useQuery<Order[]>({
    queryKey: ["orders"],
    queryFn: fetchOrders,
  });

  if (isLoading) return <p className="text-center py-10">Loading orders...</p>;
  if (isError)
    return (
      <p className="text-center text-red-500 py-10">Error loading orders</p>
    );

  return (
    <>
      <Navbar />
      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Admin Orders</h1>

        {orders.length === 0 ? (
          <p className="text-center text-gray-500">No orders found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 rounded-lg">
              <thead className="bg-gray-100 text-sm font-semibold text-gray-700">
                <tr>
                  <th className="border p-2">Order ID</th>
                  <th className="border p-2">User ID</th>
                  <th className="border p-2">Name</th>
                  <th className="border p-2">Location</th>
                  <th className="border p-2">Items</th>
                  <th className="border p-2">Amount (Rs.)</th>
                  <th className="border p-2">Payment</th>
                  <th className="border p-2">Status</th>
                  <th className="border p-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr
                    key={order._id}
                    className="border-t hover:bg-gray-50 text-sm"
                  >
                    <td className="border p-2 break-words max-w-[100px]">
                      {order._id}
                    </td>
                    <td className="border p-2">{order.userId}</td>
                    <td className="border p-2">{order.deliveryName}</td>
                    <td className="border p-2">{order.deliveryLocation}</td>
                    <td className="border p-2">
                      <ul className="list-disc ml-4">
                        {order.items.map((prod, idx) => (
                          <li key={idx}>
                            {prod.name} x{prod.quantity} (Rs. {prod.price})
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="border p-2 font-semibold">
                      {order.totalAmount}
                    </td>
                    <td className="border p-2">{order.paymentMethod}</td>
                    <td className="border p-2">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          order.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : order.status === "Cancelled"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="border p-2">
                      {new Date(order.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default AdminOrders;
