import Reveal from "./Reveal.jsx";
import { projects } from "../data.js";
import "./Projects.css";

const tints = ["var(--lavender)", "var(--mint)", "var(--peach)", "var(--sky)", "var(--rose)"];

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <Reveal>
          <span className="section-eyebrow">Projects</span>
          <h2 className="section-title">Things I've built</h2>
        </Reveal>

        <div className="projects__grid">
          {projects.map((p, i) => (
            <Reveal delay={(i % 3) * 0.08} key={p.title}>
              <article className="project-card" style={{ "--tint": tints[i % tints.length] }}>
                <div className="project-card__top">
                  <h3>{p.title}</h3>
                  <span className="project-card__year">{p.year}</span>
                </div>
                <p>{p.description}</p>
                <div className="project-card__tags">
                  {p.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
