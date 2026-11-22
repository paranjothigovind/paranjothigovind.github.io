import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { profile } from "@/lib/portfolioData";

const sections = [
  { label: "Work", path: "/#work" },
  { label: "About", path: "/#about" },
  { label: "Expertise", path: "/#expertise" },
  { label: "Approach", path: "/#approach" },
  { label: "Experience", path: "/#experience" },
  { label: "Contact", path: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const go = (path) => {
    setOpen(false);
    const [route, hash] = path.split("#");
    if (hash) {
      if (location.pathname !== route) {
        navigate(path);
      } else {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(route || "/");
    }
  };

  return (
    <header className="nav">
      <nav className="container nav__bar" aria-label="Primary">
        <Link to="/" className="brand">
          PG<span>/DEV</span>
        </Link>

        <div className="nav__links">
          {sections.map((s) => (
            <button key={s.label} onClick={() => go(s.path)} className="nav__link">
              {s.label}
            </button>
          ))}
          <a href={`mailto:${profile.email}`} className="btn btn--primary">
            Let's Talk
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="nav__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="nav__sheet">
          <div className="container nav__sheet-inner">
            {sections.map((s) => (
              <button key={s.label} onClick={() => go(s.path)} className="nav__link">
                {s.label}
              </button>
            ))}
            <a href={`mailto:${profile.email}`} className="btn btn--primary">
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
