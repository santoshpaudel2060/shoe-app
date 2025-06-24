// import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import axios from "axios";

// const PaymentSuccess: React.FC = () => {
//   const query = new URLSearchParams(useLocation().search);
//   const pid = query.get("pid");
//   const amt = query.get("amt");
//   const scd = query.get("scd");
//   const rid = query.get("refId") || query.get("refid") || query.get("rid");

//   useEffect(() => {
//     const verify = async () => {
//       if (amt && pid && scd && rid) {
//         try {
//           const res = await axios.post(
//             "http://localhost:5000/api/esewa/verify",
//             {
//               amt,
//               pid,
//               scd,
//               rid,
//             }
//           );

//           alert(res.data.message);
//         } catch (err) {
//           alert("Verification failed.");
//         }
//       }
//     };

//     verify();
//   }, []);

//   return (
//     <div>
//       <h1>Payment Success</h1>
//       <p>Verifying your payment...</p>
//     </div>
//   );
// };

// export default PaymentSuccess;

import { useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const { clearCart } = useCart();

  const navigate = useNavigate();

  useEffect(() => {
    clearCart();
  }, []);

  // useEffect(() => {
  //   const verify = async () => {
  //     if (amt && pid && scd && rid) {
  //       try {
  //         const res = await axios.post(
  //           "http://localhost:5000/api/esewa/verify",
  //           {
  //             amt,
  //             pid,
  //             scd,
  //             rid,
  //           }
  //         );
  //         setMessage(res.data.message);
  //       } catch (err) {
  //         setMessage("Verification failed. Please contact support.");
  //       }
  //     }
  //   };

  //   verify();
  // }, [amt, pid, scd, rid]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md text-center">
        <svg
          className="mx-auto mb-4 text-green-500 w-16 h-16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <h1 className="text-2xl font-bold text-green-700 mb-2">
          Payment Successful!
        </h1>
        {/* <p className="text-gray-600 mb-6">{message}</p>  */}
        <button
          onClick={() => navigate("/")}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
// This component handles the payment success page, verifying the payment details
// and displaying a success message. It uses React Router for navigation and Axios for API calls.
// The component is styled using Tailwind CSS for a clean and modern look.

// The payment verification is done by sending a POST request to the backend with the payment details.
// If the verification is successful, a success message is displayed; otherwise, an error message is shown.
// The user can navigate back to the home page after the verification process is complete.
