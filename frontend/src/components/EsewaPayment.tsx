import React from "react";

const EsewaPayment: React.FC = () => {
  const handlePayment = () => {
    const amount = "1000";
    const productId = "PID1234";
    const merchantCode = process.env.REACT_APP_MERCHANT_CODE || "EPAYTEST";
    const successUrl =
      process.env.REACT_APP_SUCCESS_URL ||
      "http://localhost:5173/payment-success";
    const failureUrl =
      process.env.REACT_APP_FAILURE_URL ||
      "http://localhost:5173/payment-failure";

    const form = document.createElement("form");
    form.action = "https://uat.esewa.com.np/epay/main";
    form.method = "POST";

    const params: Record<string, string> = {
      amt: amount,
      psc: "0",
      pdc: "0",
      txAmt: "0",
      tAmt: amount,
      pid: productId,
      scd: merchantCode,
      su: successUrl,
      fu: failureUrl,
    };

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
    <div>
      <h2>Make Payment with eSewa</h2>
      <button onClick={handlePayment}>Pay Rs. 1000</button>
    </div>
  );
};

export default EsewaPayment;
