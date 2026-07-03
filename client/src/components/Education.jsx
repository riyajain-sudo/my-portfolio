import Reveal from "./Reveal.jsx";
import { education } from "../data.js";
import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <Reveal>
          <span className="section-eyebrow">Education</span>
          <h2 className="section-title">Academic background</h2>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="education-card">
            <div className="education-card__main">
              <h3>{education.degree}</h3>
              <p className="education-card__school">
                {education.school} — {education.location}
              </p>
              <p className="education-card__period">{education.period}</p>
            </div>
            <div className="education-card__side">
              <div className="education-card__gpa">
                <span>{education.gpa}</span>
                <small>GPA</small>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="education-courses">
            <h4>Relevant coursework</h4>
            <div className="education-courses__list">
              {education.courses.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
