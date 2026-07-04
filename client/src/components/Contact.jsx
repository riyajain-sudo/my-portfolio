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
      const res = await fetch(`${API_URL}api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
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
                Whether it's a bioinformatics idea, a web project, or just to say hi —
                my inbox is open.
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
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What's on your mind?"
                />
              </label>
              <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
              {status === "sent" && <p className="contact__status contact__status--ok">Message sent — thank you!</p>}
              {status === "error" && (
                <p className="contact__status contact__status--error">
                  Couldn't reach the server. Make sure the backend is running.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
