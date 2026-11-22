import { about, profile } from "@/lib/portfolioData";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section__head">
          <h2>Engineering as a systems discipline.</h2>
        </div>
        <blockquote className="about__statement">{about.philosophy}</blockquote>
        <div className="about__cols">
          <p>{profile.intro}</p>
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
