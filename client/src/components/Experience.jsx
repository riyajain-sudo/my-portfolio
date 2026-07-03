import Reveal from "./Reveal.jsx";
import { experience } from "../data.js";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <Reveal>
          <span className="section-eyebrow">Experience</span>
          <h2 className="section-title">Where I've worked</h2>
        </Reveal>

        <div className="experience__list">
          {experience.map((job, i) => (
            <Reveal delay={i * 0.08} key={job.org}>
              <div className="experience__item">
                <div className="experience__marker" />
                <div className="experience__content">
                  <div className="experience__head">
                    <h3>{job.role}</h3>
                    <span className="experience__period">{job.period}</span>
                  </div>
                  <p className="experience__org">{job.org}</p>
                  <ul className="experience__points">
                    {job.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
