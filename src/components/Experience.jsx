import { experience } from "@/lib/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section__head">
          <h2>A timeline of the work.</h2>
        </div>
        <div className="record">
          {experience.map((e, i) => (
            <div key={i} className="record__entry">
              <div className="record__when">
                <span className="figure">{e.period}</span>
                {e.location && <span className="label">{e.location}</span>}
              </div>
              <div className="record__body">
                <h3>
                  {e.role} <span>— {e.company}</span>
                </h3>
                <p className="muted">{e.summary}</p>
                <ul className="record__points">
                  {e.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
