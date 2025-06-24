// // import { useEffect, useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import Navbar from "../components/Navbar";
// // import Footer from "../components/Footer";
// // import { useCart } from "../context/CartContext";
// // import { FaTrash, FaArrowLeft } from "react-icons/fa";
// // import EsewaForm from "./EsewaForm";

// // const Cart = () => {
// //   const { cartItems, removeItem, updateQuantity, getCartTotal, clearCart } =
// //     useCart();
// //   const [loading, setLoading] = useState(false);
// //   const [user, setUser] = useState(null);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const storedUser = localStorage.getItem("user");
// //     if (storedUser) {
// //       setUser(JSON.parse(storedUser));
// //     }
// //   }, []);

// //   const handleCheckout = () => {
// //     if (!user) {
// //       return alert("please login first");
// //     } else {
// //       setLoading(true);

// //       // For demo purposes we'll just redirect to the checkout page after a delay
// //       setTimeout(() => {
// //         setLoading(false);
// //       }, 1000);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       <Navbar />
// //       <main className="py-12">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="flex items-center justify-between mb-8">
// //             <h1 className="text-2xl font-bold text-gray-900">Shopping Cart</h1>
// //             <Link
// //               to="/"
// //               className="text-blue-600 hover:text-blue-800 flex items-center"
// //             >
// //               <FaArrowLeft className="mr-2" />
// //               Continue Shopping
// //             </Link>
// //           </div>

// //           {cartItems.length === 0 ? (
// //             <div className="bg-white rounded-lg shadow-md p-8 text-center">
// //               <h2 className="text-xl font-medium text-gray-900 mb-4">
// //                 Your cart is empty
// //               </h2>
// //               <p className="text-gray-500 mb-6">
// //                 Looks like you haven't added any items to your cart yet.
// //               </p>
// //               <Link
// //                 to="/"
// //                 className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700"
// //               >
// //                 Start Shopping
// //               </Link>
// //             </div>
// //           ) : (
// //             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// //               <div className="lg:col-span-2">
// //                 <div className="bg-white rounded-lg shadow-md overflow-hidden">
// //                   <table className="min-w-full divide-y divide-gray-200">
// //                     <thead className="bg-gray-50">
// //                       <tr>
// //                         <th
// //                           scope="col"
// //                           className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
// //                         >
// //                           Product
// //                         </th>
// //                         <th
// //                           scope="col"
// //                           className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
// //                         >
// //                           Quantity
// //                         </th>
// //                         <th
// //                           scope="col"
// //                           className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
// //                         >
// //                           Price
// //                         </th>
// //                         <th
// //                           scope="col"
// //                           className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
// //                         >
// //                           Total
// //                         </th>
// //                         <th
// //                           scope="col"
// //                           className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
// //                         >
// //                           <span className="sr-only">Actions</span>
// //                         </th>
// //                       </tr>
// //                     </thead>
// //                     <tbody className="bg-white divide-y divide-gray-200">
// //                       {cartItems.map((item) => (
// //                         <tr key={`${item.id}${item.size ?? ""}`}>
// //                           <td className="px-6 py-4 whitespace-nowrap">
// //                             <div className="flex items-center">
// //                               <div className="flex-shrink-0 h-16 w-16">
// //                                 <img
// //                                   src={item.image}
// //                                   alt={item.name}
// //                                   className="h-16 w-16 object-cover rounded"
// //                                 />
// //                               </div>
// //                               <div className="ml-4">
// //                                 <div className="text-sm font-medium text-gray-900">
// //                                   {item.name}
// //                                 </div>
// //                                 {item.size && (
// //                                   <div className="text-sm text-gray-500">
// //                                     Size: {item.size}
// //                                   </div>
// //                                 )}
// //                               </div>
// //                             </div>
// //                           </td>
// //                           <td className="px-6 py-4 whitespace-nowrap">
// //                             <div className="flex justify-center items-center">
// //                               <button
// //                                 onClick={() =>
// //                                   updateQuantity(
// //                                     item.id,
// //                                     item.quantity - 1,
// //                                     item.size
// //                                   )
// //                                 }
// //                                 className="bg-gray-100 text-gray-600 hover:bg-gray-200 p-1 rounded-l"
// //                               >
// //                                 -
// //                               </button>
// //                               <input
// //                                 type="number"
// //                                 min="1"
// //                                 value={item.quantity}
// //                                 onChange={(e) =>
// //                                   updateQuantity(
// //                                     item.id,
// //                                     parseInt(e.target.value) || 1,
// //                                     item.size
// //                                   )
// //                                 }
// //                                 className="w-12 text-center border-0 bg-gray-50"
// //                               />
// //                               <button
// //                                 onClick={() =>
// //                                   updateQuantity(
// //                                     item.id,
// //                                     item.quantity + 1,
// //                                     item.size
// //                                   )
// //                                 }
// //                                 className="bg-gray-100 text-gray-600 hover:bg-gray-200 p-1 rounded-r"
// //                               >
// //                                 +
// //                               </button>
// //                             </div>
// //                           </td>
// //                           <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500">
// //                             Rs.{item.price.toFixed(2)}
// //                           </td>
// //                           <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
// //                             Rs.{(item.price * item.quantity).toFixed(2)}
// //                           </td>
// //                           <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
// //                             <button
// //                               onClick={() => removeItem(item.id, item.size)}
// //                               className="text-red-600 hover:text-red-800"
// //                             >
// //                               <FaTrash />
// //                             </button>
// //                           </td>
// //                         </tr>
// //                       ))}
// //                     </tbody>
// //                   </table>

// //                   <div className="px-6 py-4 bg-gray-50">
// //                     <div className="flex justify-between">
// //                       <button
// //                         onClick={() => clearCart()}
// //                         className="text-red-600 hover:text-red-800 text-sm font-medium"
// //                       >
// //                         Clear Cart
// //                       </button>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="lg:col-span-1">
// //                 <div className="bg-white rounded-lg shadow-md p-6">
// //                   <h2 className="text-lg font-medium text-gray-900 mb-4">
// //                     Order Summary
// //                   </h2>

// //                   <div className="space-y-3">
// //                     <div className="flex justify-between">
// //                       <p className="text-gray-500">Subtotal</p>
// //                       <p className="text-gray-900">
// //                         ${getCartTotal().toFixed(2)}
// //                       </p>
// //                     </div>
// //                     <div className="flex justify-between">
// //                       <p className="text-gray-500">Shipping</p>
// //                       <p className="text-gray-900"> Rs. {50}</p>
// //                     </div>
// //                     {/* <div className="flex justify-between">
// //                       <p className="text-gray-500">Tax</p>
// //                       <p className="text-gray-900">
// //                         ${(getCartTotal() * 0.1).toFixed(2)}
// //                       </p>
// //                     </div> */}
// //                     <div className="border-t pt-3 flex justify-between font-medium">
// //                       <p>Total</p>
// //                       {/* <p>${(getCartTotal() * 1.1).toFixed(2)}</p>
// //                        */}
// //                       <p>Rs. {(getCartTotal() + 5).toFixed(2)}</p>
// //                     </div>
// //                   </div>

// //                   <div className="w-full mt-6 bg-green-500 text-white py-2 px-4 rounded-md font-medium  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 flex items-center justify-center">
// //                     <EsewaForm />
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </main>
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default Cart;

// import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { useCart } from "../context/CartContext";
// import { FaTrash, FaArrowLeft } from "react-icons/fa";
// import EsewaForm from "./EsewaForm";

// const Cart = () => {
//   const { cartItems, removeItem, updateQuantity, getCartTotal, clearCart } =
//     useCart();
//   const [loading, setLoading] = useState(false);
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   // Local state for delivery info inputs
//   const [deliveryName, setDeliveryName] = useState("");
//   const [deliveryLocation, setDeliveryLocation] = useState("");
//   const [postalCode, setPostalCode] = useState("");
//   const [phone, setPhone] = useState("");

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   const handleCheckout = () => {
//     if (!user) {
//       return alert("please login first");
//     } else {
//       setLoading(true);

//       // For demo, just reset loading after 1 second
//       setTimeout(() => {
//         setLoading(false);
//       }, 1000);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />
//       <main className="py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between mb-8">
//             <h1 className="text-2xl font-bold text-gray-900">Shopping Cart</h1>
//             <Link
//               to="/"
//               className="text-blue-600 hover:text-blue-800 flex items-center"
//             >
//               <FaArrowLeft className="mr-2" />
//               Continue Shopping
//             </Link>
//           </div>

//           {cartItems.length === 0 ? (
//             <div className="bg-white rounded-lg shadow-md p-8 text-center">
//               <h2 className="text-xl font-medium text-gray-900 mb-4">
//                 Your cart is empty
//               </h2>
//               <p className="text-gray-500 mb-6">
//                 Looks like you haven't added any items to your cart yet.
//               </p>
//               <Link
//                 to="/"
//                 className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700"
//               >
//                 Start Shopping
//               </Link>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//               <div className="lg:col-span-2">
//                 <div className="bg-white rounded-lg shadow-md overflow-hidden">
//                   <table className="min-w-full divide-y divide-gray-200">
//                     <thead className="bg-gray-50">
//                       <tr>
//                         <th
//                           scope="col"
//                           className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                         >
//                           Product
//                         </th>
//                         <th
//                           scope="col"
//                           className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
//                         >
//                           Quantity
//                         </th>
//                         <th
//                           scope="col"
//                           className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
//                         >
//                           Price
//                         </th>
//                         <th
//                           scope="col"
//                           className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
//                         >
//                           Total
//                         </th>
//                         <th
//                           scope="col"
//                           className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
//                         >
//                           <span className="sr-only">Actions</span>
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                       {cartItems.map((item) => (
//                         <tr key={`${item.id}${item.size ?? ""}`}>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <div className="flex items-center">
//                               <div className="flex-shrink-0 h-16 w-16">
//                                 <img
//                                   src={item.image}
//                                   alt={item.name}
//                                   className="h-16 w-16 object-cover rounded"
//                                 />
//                               </div>
//                               <div className="ml-4">
//                                 <div className="text-sm font-medium text-gray-900">
//                                   {item.name}
//                                 </div>
//                                 {item.size && (
//                                   <div className="text-sm text-gray-500">
//                                     Size: {item.size}
//                                   </div>
//                                 )}
//                               </div>
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <div className="flex justify-center items-center">
//                               <button
//                                 onClick={() =>
//                                   updateQuantity(
//                                     item.id,
//                                     item.quantity - 1,
//                                     item.size
//                                   )
//                                 }
//                                 className="bg-gray-100 text-gray-600 hover:bg-gray-200 p-1 rounded-l"
//                               >
//                                 -
//                               </button>
//                               <input
//                                 type="number"
//                                 min="1"
//                                 value={item.quantity}
//                                 onChange={(e) =>
//                                   updateQuantity(
//                                     item.id,
//                                     parseInt(e.target.value) || 1,
//                                     item.size
//                                   )
//                                 }
//                                 className="w-12 text-center border-0 bg-gray-50"
//                               />
//                               <button
//                                 onClick={() =>
//                                   updateQuantity(
//                                     item.id,
//                                     item.quantity + 1,
//                                     item.size
//                                   )
//                                 }
//                                 className="bg-gray-100 text-gray-600 hover:bg-gray-200 p-1 rounded-r"
//                               >
//                                 +
//                               </button>
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500">
//                             Rs.{item.price.toFixed(2)}
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                             Rs.{(item.price * item.quantity).toFixed(2)}
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                             <button
//                               onClick={() => removeItem(item.id, item.size)}
//                               className="text-red-600 hover:text-red-800"
//                             >
//                               <FaTrash />
//                             </button>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>

//                   <div className="px-6 py-4 bg-gray-50">
//                     <div className="flex justify-between">
//                       <button
//                         onClick={() => clearCart()}
//                         className="text-red-600 hover:text-red-800 text-sm font-medium"
//                       >
//                         Clear Cart
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="lg:col-span-1">
//                 <div className="bg-white rounded-lg shadow-md p-6">
//                   <h2 className="text-lg font-medium text-gray-900 mb-4">
//                     Delivery Information
//                   </h2>

//                   {/* Delivery Info Inputs */}
//                   <div className="mb-6 space-y-4">
//                     <div>
//                       <label
//                         className="block text-gray-700 mb-1"
//                         htmlFor="deliveryName"
//                       >
//                         Name for Delivery
//                       </label>
//                       <input
//                         type="text"
//                         id="deliveryName"
//                         value={deliveryName}
//                         onChange={(e) => setDeliveryName(e.target.value)}
//                         placeholder="Enter your name"
//                         className="w-full border rounded px-3 py-2"
//                       />
//                     </div>

//                     <div>
//                       <label
//                         className="block text-gray-700 mb-1"
//                         htmlFor="deliveryLocation"
//                       >
//                         Location / Address
//                       </label>
//                       <input
//                         type="text"
//                         id="deliveryLocation"
//                         value={deliveryLocation}
//                         onChange={(e) => setDeliveryLocation(e.target.value)}
//                         placeholder="Enter delivery location"
//                         className="w-full border rounded px-3 py-2"
//                       />
//                     </div>

//                     <div>
//                       <label
//                         className="block text-gray-700 mb-1"
//                         htmlFor="postalCode"
//                       >
//                         Postal Code
//                       </label>
//                       <input
//                         type="text"
//                         id="postalCode"
//                         value={postalCode}
//                         onChange={(e) => setPostalCode(e.target.value)}
//                         placeholder="Enter postal code"
//                         className="w-full border rounded px-3 py-2"
//                       />
//                     </div>

//                     <div>
//                       <label
//                         className="block text-gray-700 mb-1"
//                         htmlFor="phone"
//                       >
//                         Phone Number
//                       </label>
//                       <input
//                         type="tel"
//                         id="phone"
//                         value={phone}
//                         onChange={(e) => setPhone(e.target.value)}
//                         placeholder="Enter phone number"
//                         className="w-full border rounded px-3 py-2"
//                       />
//                     </div>
//                   </div>

//                   <h2 className="text-lg font-medium text-gray-900 mb-4">
//                     Order Summary
//                   </h2>

//                   <div className="space-y-3">
//                     <div className="flex justify-between">
//                       <p className="text-gray-500">Subtotal</p>
//                       <p className="text-gray-900">
//                         Rs. {getCartTotal().toFixed(2)}
//                       </p>
//                     </div>
//                     <div className="flex justify-between">
//                       <p className="text-gray-500">Shipping</p>
//                       <p className="text-gray-900"> Rs. 50</p>
//                     </div>
//                     <div className="border-t pt-3 flex justify-between font-medium">
//                       <p>Total</p>
//                       <p>Rs. {(getCartTotal() + 50).toFixed(2)}</p>
//                     </div>
//                   </div>

//                   <div className="w-full mt-6 bg-green-500 text-white py-2 px-4 rounded-md font-medium  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 flex items-center justify-center">
//                     <EsewaForm />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Cart;

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import { FaTrash, FaArrowLeft } from "react-icons/fa";
import EsewaForm from "./EsewaForm";
import { toast } from "react-toastify";

const Cart = () => {
  const { cartItems, removeItem, updateQuantity, getCartTotal, clearCart } =
    useCart();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Local state for delivery info inputs
  const [deliveryName, setDeliveryName] = useState("");
  const [deliveryLocation, setDeliveryLocation] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleCheckout = () => {
    if (!user) {
      return alert("please login first");
    } else {
      setLoading(true);

      // For demo, just reset loading after 1 second
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
    clearCart();
  };

  // const placeOrderAndUpdateStock = () => {
  //   // This function runs after order is successfully placed on backend
  //   // You can put toast or navigation logic here if needed
  //   toast.success("Order placed and stock updated!");

  //   navigate("/"); // example redirect to home
  // };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Shopping Cart</h1>
            <Link
              to="/"
              className="text-blue-600 hover:text-blue-800 flex items-center"
            >
              <FaArrowLeft className="mr-2" />
              Continue Shopping
            </Link>
          </div>

          {cartItems.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <h2 className="text-xl font-medium text-gray-900 mb-4">
                Your cart is empty
              </h2>
              <p className="text-gray-500 mb-6">
                Looks like you haven't added any items to your cart yet.
              </p>
              <Link
                to="/"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Product
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Quantity
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Total
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          <span className="sr-only">Actions</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {cartItems.map((item) => (
                        <tr key={`${item.id}${item.size ?? ""}`}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-16 w-16">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="h-16 w-16 object-cover rounded"
                                />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </div>
                                {item.size && (
                                  <div className="text-sm text-gray-500">
                                    Size: {item.size}
                                  </div>
                                )}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex justify-center items-center">
                              <button
                                onClick={() =>
                                  updateQuantity(
                                    item.id,
                                    item.quantity - 1,
                                    item.size
                                  )
                                }
                                className="bg-gray-100 text-gray-600 hover:bg-gray-200 p-1 rounded-l"
                              >
                                -
                              </button>
                              <input
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={(e) =>
                                  updateQuantity(
                                    item.id,
                                    parseInt(e.target.value) || 1,
                                    item.size
                                  )
                                }
                                className="w-12 text-center border-0 bg-gray-50"
                              />
                              <button
                                onClick={() =>
                                  updateQuantity(
                                    item.id,
                                    item.quantity + 1,
                                    item.size
                                  )
                                }
                                className="bg-gray-100 text-gray-600 hover:bg-gray-200 p-1 rounded-r"
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500">
                            Rs.{item.price.toFixed(2)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            Rs.{(item.price * item.quantity).toFixed(2)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button
                              onClick={() => removeItem(item.id, item.size)}
                              className="text-red-600 hover:text-red-800"
                            >
                              <FaTrash />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <div className="px-6 py-4 bg-gray-50">
                    <div className="flex justify-between">
                      <button
                        onClick={() => clearCart()}
                        className="text-red-600 hover:text-red-800 text-sm font-medium"
                      >
                        Clear Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">
                    Delivery Information
                  </h2>

                  {/* Delivery Info Inputs */}
                  <div className="mb-6 space-y-4">
                    <div>
                      <label
                        className="block text-gray-700 mb-1"
                        htmlFor="deliveryName"
                      >
                        Name for Delivery
                      </label>
                      <input
                        type="text"
                        id="deliveryName"
                        value={deliveryName}
                        onChange={(e) => setDeliveryName(e.target.value)}
                        placeholder="Enter your name"
                        className="w-full border rounded px-3 py-2"
                      />
                    </div>

                    <div>
                      <label
                        className="block text-gray-700 mb-1"
                        htmlFor="deliveryLocation"
                      >
                        Location / Address
                      </label>
                      <input
                        type="text"
                        id="deliveryLocation"
                        value={deliveryLocation}
                        onChange={(e) => setDeliveryLocation(e.target.value)}
                        placeholder="Enter delivery location"
                        className="w-full border rounded px-3 py-2"
                      />
                    </div>

                    <div>
                      <label
                        className="block text-gray-700 mb-1"
                        htmlFor="postalCode"
                      >
                        Postal Code
                      </label>
                      <input
                        type="text"
                        id="postalCode"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        placeholder="Enter postal code"
                        className="w-full border rounded px-3 py-2"
                      />
                    </div>

                    <div>
                      <label
                        className="block text-gray-700 mb-1"
                        htmlFor="phone"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter phone number"
                        className="w-full border rounded px-3 py-2"
                      />
                    </div>
                  </div>

                  <h2 className="text-lg font-medium text-gray-900 mb-4">
                    Order Summary
                  </h2>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <p className="text-gray-500">Subtotal</p>
                      <p className="text-gray-900">
                        Rs. {getCartTotal().toFixed(2)}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-gray-500">Shipping</p>
                      <p className="text-gray-900"> Rs. 50</p>
                    </div>
                    <div className="border-t pt-3 flex justify-between font-medium">
                      <p>Total</p>
                      <p>Rs. {(getCartTotal() + 50).toFixed(2)}</p>
                    </div>
                  </div>

                  {/* Pass all data to EsewaForm */}
                  <EsewaForm
                    // deliveryName={deliveryName}
                    // deliveryLocation={deliveryLocation}
                    // postalCode={postalCode}
                    // phone={phone}
                    // items={cartItems}
                    // totalAmount={getCartTotal() + 50}
                    // clearCart={clearCart}
                    // onPaymentSuccess={handleCheckout}
                    deliveryName={deliveryName}
                    deliveryLocation={deliveryLocation}
                    postalCode={postalCode}
                    phone={phone}
                    items={cartItems}
                    totalAmount={getCartTotal() + 50}
                    clearCart={clearCart}
                    onPaymentSuccess={() => {
                      console.log("Order placed and payment initiated.");
                      // Optional: Redirect or show message
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
