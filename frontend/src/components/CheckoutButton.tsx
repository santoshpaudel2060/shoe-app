import React from "react";

const CheckoutButton: React.FC = () => {
  const handleEsewaCheckout = () => {
    const totalAmount = (50 + 5).toFixed(2);

    const params: Record<string, string> = {
      amt: totalAmount,
      psc: "0",
      pdc: "0",
      txAmt: "0",
      tAmt: totalAmount,
      pid: "123456789",
      scd: "EPAYTEST",
      su: "http://localhost:5173/success",
      fu: "http://localhost:5173/failure",
    };

    const form = document.createElement("form");
    form.method = "POST";
    form.action = "http://uat.esewa.com.np/epay/main";

    for (const key in params) {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = params[key];
      form.appendChild(input);
    }

    document.body.appendChild(form);
    form.submit();
  };

  return (
    <button
      onClick={handleEsewaCheckout}
      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
    >
      Checkout with eSewa
    </button>
  );
};

export default CheckoutButton;
