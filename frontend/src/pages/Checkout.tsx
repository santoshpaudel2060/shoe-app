// // // import React, { useState } from "react";
// // // import Navbar from "../components/Navbar";
// // // import Footer from "../components/Footer";

// // // const Checkout = () => {
// // //   const [amount, setAmount] = useState(100); // Dummy amount, replace with actual amount if needed
// // //   const [loading, setLoading] = useState(false);
// // //   const [paymentStatus, setPaymentStatus] = useState("");

// // //   const handlePayment = (event) => {
// // //     event.preventDefault();
// // //     setLoading(true);

// // //     setTimeout(() => {
// // //       setLoading(false);
// // //       setPaymentStatus("Payment successful!");
// // //     }, 2000);
// // //   };

// // //   return (
// // //     <>
// // //       <Navbar />
// // //       <div className="payment-form">
// // //         <h2 className="text-2xl font-bold mb-4">Payment Form</h2>

// // //         <form onSubmit={handlePayment} className="space-y-4">
// // //           <div>
// // //             <label
// // //               htmlFor="amount"
// // //               className="block text-sm font-medium text-gray-700"
// // //             >
// // //               Amount
// // //             </label>
// // //             <input
// // //               id="amount"
// // //               type="text"
// // //               value={`$${amount.toFixed(2)}`}
// // //               readOnly
// // //               className="w-full p-2 border border-gray-300 rounded-md"
// // //             />
// // //           </div>

// // //           <div>
// // //             <label
// // //               htmlFor="name"
// // //               className="block text-sm font-medium text-gray-700"
// // //             >
// // //               Name
// // //             </label>
// // //             <input
// // //               id="name"
// // //               type="text"
// // //               required
// // //               placeholder="Enter your name"
// // //               className="w-full p-2 border border-gray-300 rounded-md"
// // //             />
// // //           </div>

// // //           <div>
// // //             <label
// // //               htmlFor="email"
// // //               className="block text-sm font-medium text-gray-700"
// // //             >
// // //               Email Address
// // //             </label>
// // //             <input
// // //               id="email"
// // //               type="email"
// // //               required
// // //               placeholder="Enter your email"
// // //               className="w-full p-2 border border-gray-300 rounded-md"
// // //             />
// // //           </div>

// // //           <div>
// // //             <label
// // //               htmlFor="cardNumber"
// // //               className="block text-sm font-medium text-gray-700"
// // //             >
// // //               Card Number
// // //             </label>
// // //             <input
// // //               id="cardNumber"
// // //               type="text"
// // //               required
// // //               placeholder="Enter your card number"
// // //               className="w-full p-2 border border-gray-300 rounded-md"
// // //             />
// // //           </div>

// // //           <div>
// // //             <label
// // //               htmlFor="expiryDate"
// // //               className="block text-sm font-medium text-gray-700"
// // //             >
// // //               Expiry Date
// // //             </label>
// // //             <input
// // //               id="expiryDate"
// // //               type="text"
// // //               required
// // //               placeholder="MM/YY"
// // //               className="w-full p-2 border border-gray-300 rounded-md"
// // //             />
// // //           </div>

// // //           <div>
// // //             <label
// // //               htmlFor="cvv"
// // //               className="block text-sm font-medium text-gray-700"
// // //             >
// // //               CVV
// // //             </label>
// // //             <input
// // //               id="cvv"
// // //               type="text"
// // //               required
// // //               placeholder="Enter CVV"
// // //               className="w-full p-2 border border-gray-300 rounded-md"
// // //             />
// // //           </div>

// // //           <button
// // //             type="submit"
// // //             disabled={loading}
// // //             className="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
// // //           >
// // //             {loading ? "Processing..." : "Pay Now"}
// // //           </button>
// // //         </form>

// // //         {paymentStatus && (
// // //           <div className="mt-4 text-green-500 font-semibold">
// // //             {paymentStatus}
// // //           </div>
// // //         )}
// // //       </div>
// // //       <Footer />
// // //     </>
// // //   );
// // // };

// // // export default Checkout;
// // import { useCart } from "../context/CartContext";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";
// // import Navbar from "../components/Navbar";
// // import Footer from "../components/Footer";
// // import { useState } from "react";
// // const Checkout = () => {
// //   const { cartItems, clearCart } = useCart(); // get cart items & clearCart function
// //   const navigate = useNavigate();

// //   const [loading, setLoading] = useState(false);
// //   const [paymentStatus, setPaymentStatus] = useState("");

// //   // For form fields, you can add state or use refs (simplified here)
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");

// //   const amount = cartItems.reduce(
// //     (total, item) => total + item.price * item.quantity,
// //     0
// //   );

// //   const handlePayment = async (event) => {
// //     event.preventDefault();
// //     setLoading(true);
// //     setPaymentStatus("");

// //     try {
// //       // Simulate payment processing delay
// //       await new Promise((resolve) => setTimeout(resolve, 2000));

// //       // Prepare order payload
// //       const orderPayload = {
// //         userId: "user001", // replace with real logged in user id if available
// //         products: cartItems.map((item) => ({
// //           title: item.title,
// //           quantity: item.quantity,
// //           price: item.price,
// //         })),
// //         totalAmount: amount,
// //         paymentMethod: "Card", // example payment method
// //       };

// //       // Call backend order API
// //       const response = await axios.post(
// //         "http://localhost:4000/api/orders",
// //         orderPayload
// //       );

// //       const createdOrder = response.data.order;

// //       // Clear cart after successful order
// //       clearCart();

// //       // Set success status
// //       setPaymentStatus("Payment successful!");

// //       // Navigate to PaymentSuccess page passing order info
// //       navigate("/payment-success", {
// //         state: {
// //           orderId: createdOrder._id,
// //           orderName: createdOrder.products[0]?.title || "Your order",
// //         },
// //       });
// //     } catch (error) {
// //       setPaymentStatus("Payment failed. Please try again.");
// //       console.error(error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <>
// //       <Navbar />
// //       <div className="payment-form max-w-md mx-auto p-4">
// //         <h2 className="text-2xl font-bold mb-4">Payment Form</h2>

// //         <form onSubmit={handlePayment} className="space-y-4">
// //           <div>
// //             <label
// //               htmlFor="amount"
// //               className="block text-sm font-medium text-gray-700"
// //             >
// //               Amount
// //             </label>
// //             <input
// //               id="amount"
// //               type="text"
// //               value={`$${amount.toFixed(2)}`}
// //               readOnly
// //               className="w-full p-2 border border-gray-300 rounded-md"
// //             />
// //           </div>

// //           <div>
// //             <label
// //               htmlFor="name"
// //               className="block text-sm font-medium text-gray-700"
// //             >
// //               Name
// //             </label>
// //             <input
// //               id="name"
// //               type="text"
// //               required
// //               placeholder="Enter your name"
// //               className="w-full p-2 border border-gray-300 rounded-md"
// //               value={name}
// //               onChange={(e) => setName(e.target.value)}
// //             />
// //           </div>

// //           <div>
// //             <label
// //               htmlFor="email"
// //               className="block text-sm font-medium text-gray-700"
// //             >
// //               Email Address
// //             </label>
// //             <input
// //               id="email"
// //               type="email"
// //               required
// //               placeholder="Enter your email"
// //               className="w-full p-2 border border-gray-300 rounded-md"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //             />
// //           </div>

// //           {/* Keep other card inputs here (cardNumber, expiryDate, cvv) as before */}

// //           <button
// //             type="submit"
// //             disabled={loading || cartItems.length === 0}
// //             className="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700 disabled:opacity-50"
// //           >
// //             {loading ? "Processing..." : "Pay Now"}
// //           </button>
// //         </form>

// //         {paymentStatus && (
// //           <div className="mt-4 text-green-500 font-semibold">
// //             {paymentStatus}
// //           </div>
// //         )}
// //       </div>
// //       <Footer />
// //     </>
// //   );
// // };

// // export default Checkout;

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

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   // Function to push order to backend
//   const pushOrderToBackend = async () => {
//     if (!user) {
//       alert("Please login first");
//       return false;
//     }
//     if (cartItems.length === 0) {
//       alert("Cart is empty");
//       return false;
//     }

//     setLoading(true);

//     try {
//       const res = await fetch("http://localhost:4000/api/orders", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           // Add authorization if needed
//         },
//         body: JSON.stringify({
//           userId: data.userId,, // adjust to your user id field
//           items: cartItems.map(({ id, size, quantity, price }) => ({
//             productId: id,
//             size,
//             quantity,
//             price,
//           })),
//           total: getCartTotal() + 5,
//         }),
//       });

//       if (!res.ok) {
//         const err = await res.json();
//         throw new Error(err.message || "Failed to save order");
//       }

//       alert("Order details saved. Proceeding to payment...");
//       return true;
//     } catch (error) {
//       alert("Error saving order: " + error.message);
//       return false;
//     } finally {
//       setLoading(false);
//     }
//   };

//   // This function handles checkout button click: push order then (if success) continue
//   const handleCheckoutClick = async () => {
//     const success = await pushOrderToBackend();
//     if (success) {
//       // If you want to clear cart after backend success, uncomment:
//       // clearCart();
//       // You can also navigate or do other actions here
//       // Or just let user use EsewaForm UI below for payment
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
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           Product
//                         </th>
//                         <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           Quantity
//                         </th>
//                         <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           Price
//                         </th>
//                         <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           Total
//                         </th>
//                         <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
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
//                             ${item.price.toFixed(2)}
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                             ${(item.price * item.quantity).toFixed(2)}
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
//                     Order Summary
//                   </h2>

//                   <div className="space-y-3">
//                     <div className="flex justify-between">
//                       <p className="text-gray-500">Subtotal</p>
//                       <p className="text-gray-900">
//                         ${getCartTotal().toFixed(2)}
//                       </p>
//                     </div>
//                     <div className="flex justify-between">
//                       <p className="text-gray-500">Shipping</p>
//                       <p className="text-gray-900"> $5</p>
//                     </div>
//                     <div className="border-t pt-3 flex justify-between font-medium">
//                       <p>Total</p>
//                       <p>${(getCartTotal() + 5).toFixed(2)}</p>
//                     </div>
//                   </div>

//                   <button
//                     onClick={handleCheckoutClick}
//                     disabled={loading || cartItems.length === 0}
//                     className="w-full mt-6 bg-green-600 text-white py-2 px-4 rounded-md font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
//                   >
//                     {loading ? "Processing..." : "Pay with Esewa"}
//                   </button>

//                   {!loading && (
//                     <div className="mt-4">
//                       <EsewaForm />
//                     </div>
//                   )}
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
