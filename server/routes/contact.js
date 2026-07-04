import { Router } from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load environment variables here too, so this module doesn't depend on
// import order in server.js (imports are evaluated before top-level code
// in server.js runs, so relying on server.js's dotenv.config() left
// EMAIL_USER / EMAIL_APP_PASSWORD undefined at transporter-creation time).
dotenv.config();

const router = Router();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error("SMTP Verify Error:", error);
  } else {
    console.log("SMTP Server is ready to send emails");
  }
});

// Minimal HTML-escaping so form input can't break the email's markup.
function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[c]));
}

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        error: "All fields are required.",
      });
    }

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message)}</p>
      `,
    });

    res.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Failed to send email.",
    });
  }
});

export default router;
