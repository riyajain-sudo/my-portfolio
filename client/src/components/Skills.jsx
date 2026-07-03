import Reveal from "./Reveal.jsx";
import { skills } from "../data.js";
import "./Skills.css";

const tints = ["var(--lavender)", "var(--mint)", "var(--peach)", "var(--sky)", "var(--rose)"];

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <Reveal>
          <span className="section-eyebrow">Skills</span>
          <h2 className="section-title">What I build with</h2>
        </Reveal>

        <div className="skills__groups">
          {skills.map((group, gi) => (
            <Reveal delay={gi * 0.06} key={group.group}>
              <div className="skills__group">
                <h3 className="skills__group-title">{group.group}</h3>
                <div className="skills__chips">
                  {group.items.map((item, i) => (
                    <span
                      className="skills__chip"
                      key={item}
                      style={{ "--tint": tints[(gi + i) % tints.length] }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
