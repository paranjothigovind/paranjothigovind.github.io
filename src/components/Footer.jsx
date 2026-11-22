import { Link } from "react-router-dom";
import { profile } from "@/lib/portfolioData";

export default function Footer() {
  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__col">
            <Link to="/" className="brand">
              {initials}
              <span>/DEV</span>
            </Link>
            <p className="muted">{profile.role}, {profile.company}</p>
          </div>
          <div className="footer__col">
            <span className="label">Pages</span>
            <Link to="/#work">Work</Link>
            <Link to="/#about">About</Link>
            <Link to="/#experience">Experience</Link>
          </div>
          <div className="footer__col">
            <span className="label">Elsewhere</span>
            <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
          <div className="footer__col">
            <span className="label">Contact</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Back to top</button>
          </div>
        </div>
        <p className="footer__legal">
          © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind & care.
        </p>
      </div>
    </footer>
  );
}
