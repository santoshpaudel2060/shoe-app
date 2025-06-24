// utils/sendMail.js
import nodemailer from "nodemailer";

const sendMail = async ({ to, subject, text, html }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail", // or another provider
    auth: {
      user: process.env.ADMIN_EMAIL,
      pass: process.env.ADMIN_EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Your Store" <${process.env.ADMIN_EMAIL}>`,
    to,
    subject,
    text,
    html,
  };

  await transporter.sendMail(mailOptions);
};

export default sendMail;
