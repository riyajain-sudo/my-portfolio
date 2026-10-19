import { useState } from "react";
import Reveal from "./Reveal.jsx";
import { profile } from "../data.js";
import "./Contact.css";

const API_URL =
  (import.meta.env.VITE_API_URL || "http://localhost:5000").replace(/\/$/, "");

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Request failed. Your draft is still here.");
      if (data.delivered !== true || data.stored !== true) {
        throw new Error("The server did not confirm delivery or storage. Your draft is still here.");
      }
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus(err.message.includes("Demo only") ? "demo" : "error");
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal>
          <span className="section-eyebrow">Contact</span>
          <h2 className="section-title">Let's talk</h2>
        </Reveal>

        <div className="contact__grid">
          <Reveal delay={0.05}>
            <div className="contact__info">
              <p>
                The contact form below is a non-delivery demo. Use the email link to contact me directly.
              </p>
              <div className="contact__links">
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
                <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form className="contact__form" onSubmit={handleSubmit}>
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  required
                  maxLength={80}
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  required
                  maxLength={254}
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                />
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  required
                  maxLength={4000}
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What's on your mind?"
                />
              </label>
              <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
              {status === "sent" && <p className="contact__status contact__status--ok" role="status">Message delivered — thank you!</p>}
              {status === "demo" && <p className="contact__status contact__status--error" role="status">Demo only: this message was not sent or stored. Your draft remains in the form.</p>}
              {status === "error" && (
                <p className="contact__status contact__status--error" role="status">
                  Couldn't confirm delivery. Your draft remains in the form.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
