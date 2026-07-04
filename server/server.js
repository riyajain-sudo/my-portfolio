import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dns from "dns";
import contactRouter from "./routes/contact.js";


// Some hosts (e.g. Render) don't route outbound IPv6 properly, which causes
// ENETUNREACH errors connecting to services like Gmail's SMTP server that
// resolve to both IPv4 and IPv6 addresses. Preferring IPv4 avoids that.
dns.setDefaultResultOrder("ipv4first");


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/contact", contactRouter);

app.listen(PORT, () => {
  console.log(`Portfolio API running on http://localhost:${PORT}`);
});
