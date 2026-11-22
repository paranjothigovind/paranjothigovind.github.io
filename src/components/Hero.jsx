import { profile } from "@/lib/portfolioData";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__text">
          <h1>Interface, infrastructure and AI, engineered.</h1>
          <p className="lead">Technical lead at {profile.company}, building products end to end.</p>
          <div className="hero__actions">
            <button onClick={() => scrollTo("contact")} className="btn btn--primary">
              Let's Talk
            </button>
            {profile.links.resume && (
              <a href={profile.links.resume} target="_blank" rel="noreferrer" className="btn">
                Resume
              </a>
            )}
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}
