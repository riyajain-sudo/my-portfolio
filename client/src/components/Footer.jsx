import { profile } from "../data.js";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span className="footer__mark">Built with React, Node.js & a little helix magic</span>
      </div>
    </footer>
  );
}
