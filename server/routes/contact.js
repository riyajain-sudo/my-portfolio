import { Router } from "express";

const router = Router();

export function submitContact(req, res) {
  const body = req.body;
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return res.status(400).json({ success: false, message: "A JSON object is required." });
  }
  const limits = { name: 80, email: 254, message: 4000 };
  const errors = {};
  for (const [field, limit] of Object.entries(limits)) {
    if (typeof body[field] !== "string") errors[field] = "Must be text.";
    else if (body[field].length > limit) errors[field] = "Field is too long.";
  }
  if (Object.keys(errors).length) return res.status(400).json({ success: false, errors });

  const name = body.name.trim();
  const email = body.email.trim();
  const message = body.message.trim();
  if (!name || !email || !message || !/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ success: false, message: "Please provide a name, valid email, and message." });
  }

  // This endpoint intentionally has no email or persistence integration.
  return res.status(503).json({
    success: false,
    code: "DEMO_ONLY",
    message: "Demo only: this message was not sent or stored.",
  });
}

router.post("/", submitContact);

export default router;
