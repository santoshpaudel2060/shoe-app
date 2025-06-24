// import { useEffect, useRef } from "react";

// const EsewaCheckout: React.FC = () => {
//   const formRef = useRef<HTMLFormElement>(null);

//   useEffect(() => {
//     formRef.current?.submit();
//   }, []);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <p className="text-xl font-medium text-gray-700">
//         Redirecting to eSewa...
//       </p>

//       <form
//         ref={formRef}
//         action="https://rc-epay.esewa.com.np/api/epay/main"
//         method="POST"
//         style={{ display: "none" }}
//       >
//         <input value="100" name="tAmt" type="hidden" />
//         <input value="90" name="amt" type="hidden" />
//         <input value="5" name="txAmt" type="hidden" />
//         <input value="2" name="psc" type="hidden" />
//         <input value="3" name="pdc" type="hidden" />
//         <input value="EPAYTEST" name="scd" type="hidden" />
//         <input value="123456" name="pid" type="hidden" />
//         <input
//           value="http://localhost:5173/payment-success"
//           type="hidden"
//           name="su"
//         />
//         <input
//           value="http://localhost:5173/payment-failed"
//           type="hidden"
//           name="fu"
//         />
//       </form>
//     </div>
//   );
// };

// export default EsewaCheckout;

// src/pages/EsewaCheckout.tsx
import React, { useEffect, useRef } from "react";

const EsewaCheckout: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formRef.current) {
      formRef.current.submit();
    }
  }, []);

  return (
    <form
      ref={formRef}
      action="https://rc-epay.esewa.com.np/api/epay/main"
      method="POST"
      style={{ display: "none" }}
    >
      <input type="hidden" name="amount" value="100" />
      <input type="hidden" name="tax_amount" value="0" />
      <input type="hidden" name="total_amount" value="100" />
      <input type="hidden" name="transaction_uuid" value="TXN123456789" />
      <input type="hidden" name="product_code" value="YOUR_PRODUCT_CODE" />
      <input
        type="hidden"
        name="success_url"
        value="http://localhost:5173/success"
      />
      <input
        type="hidden"
        name="failure_url"
        value="http://localhost:5173/failure"
      />
    </form>
  );
};

export default EsewaCheckout;
