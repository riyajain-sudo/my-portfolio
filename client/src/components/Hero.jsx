import { motion } from "framer-motion";
import CurvedHelix from "./CurvedHelix.jsx";
import { profile } from "../data.js";
import riyaPhoto from "../../assets/riya.jpg";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__blob hero__blob--1" />
      <div className="hero__blob hero__blob--2" />
      <div className="container hero__inner">
        <motion.div
          className="hero__copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-eyebrow">Portfolio</span>
          <h1 className="hero__title">
            Hi, I'm {profile.name.split(" ")[0]} —<br />
            <span className="hero__title-accent">code meets biology.</span>
          </h1>
          <p className="hero__tagline">{profile.tagline}</p>
          <div className="hero__actions">
            <a href="#projects" className="btn btn-primary">See my work</a>
            <a href="#contact" className="btn btn-ghost">Get in touch</a>
          </div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__portrait">
            <CurvedHelix className="hero__portrait-helix hero__portrait-helix--left" colorOffset={0} />
            <CurvedHelix
              className="hero__portrait-helix hero__portrait-helix--right"
              mirror
            />
            <div className="hero__portrait-frame">
              <img src={riyaPhoto} alt={profile.name} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
