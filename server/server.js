import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRouter from "./routes/contact.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = (process.env.CLIENT_URL || "http://localhost:5173")
  .split(",").map((origin) => origin.trim()).filter(Boolean);
app.use(cors({ origin: (origin, callback) => {
  if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
  return callback(null, false);
} }));
app.use(express.json({ limit: "16kb" }));
app.use((error, _req, res, next) => {
  if (error?.type === "entity.too.large") return res.status(413).json({ success: false, message: "Request body is too large." });
  if (error instanceof SyntaxError && error.status === 400 && "body" in error) {
    return res.status(400).json({ success: false, message: "Request body must be valid JSON." });
  }
  return next(error);
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/contact", contactRouter);

app.listen(PORT, () => {
  console.log(`Portfolio API running on http://localhost:${PORT}`);
});
