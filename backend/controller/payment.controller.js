import { generateEsewaSignature } from "../utils/generateEsewaSignature.js";

export const initiatePayment = async (req, res) => {
  try {
    const {
      amount,
      tax_amount,
      total_amount,
      transaction_uuid,
      product_service_charge = 0,
      product_delivery_charge = 0,
    } = req.body;

    const fieldsToSign = {
      total_amount,
      transaction_uuid,
      product_code: process.env.ESEWA_MERCHANT_CODE,
    };

    const { signature, signedFields } = generateEsewaSignature(
      fieldsToSign,
      process.env.ESEWA_SECRET_KEY
    );

    const formData = {
      amount,
      tax_amount,
      total_amount,
      transaction_uuid,
      product_code: process.env.ESEWA_MERCHANT_CODE,
      product_service_charge,
      product_delivery_charge,
      success_url: process.env.ESEWA_SUCCESS_URL,
      failure_url: process.env.ESEWA_FAILURE_URL,
      signed_field_names: signedFields,
      signature,
    };

    res.json({ formData });
  } catch (error) {
    res.status(500).json({ message: "Error initiating eSewa payment", error });
  }
};
