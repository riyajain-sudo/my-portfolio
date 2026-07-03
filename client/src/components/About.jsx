import Reveal from "./Reveal.jsx";
import { profile } from "../data.js";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <Reveal>
          <span className="section-eyebrow">About</span>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="about__bio">{profile.bio}</p>
        </Reveal>

        <div className="about__grid">
          {[
            { label: "Focus", value: "Bioinformatics × Web Dev × Gen AI", color: "var(--lavender)" },
            { label: "Currently", value: "B.Tech Biotechnology, 4th year", color: "var(--mint)" },
            { label: "Based in", value: "Gwalior, India", color: "var(--peach)" },
          ].map((item, i) => (
            <Reveal delay={0.1 + i * 0.08} key={item.label}>
              <div className="about__card" style={{ "--tint": item.color }}>
                <span className="about__card-label">{item.label}</span>
                <span className="about__card-value">{item.value}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
