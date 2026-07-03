import { Router } from "express";

const router = Router();

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are all required." });
  }

  // For now, just log the submission. See README.md → "Wiring up real email"
  // to send yourself an actual email using nodemailer. Example, once installed:
  //
  //   import nodemailer from "nodemailer";
  //   const transporter = nodemailer.createTransport({
  //     service: "gmail",
  //     auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_APP_PASSWORD },
  //   });
  //   await transporter.sendMail({
  //     from: email,
  //     to: process.env.EMAIL_USER,
  //     subject: `Portfolio message from ${name}`,
  //     text: message,
  //   });

  console.log("New contact form submission:");
  console.log({ name, email, message, receivedAt: new Date().toISOString() });

  res.status(200).json({ success: true, message: "Message received — thank you!" });
});

export default router;
