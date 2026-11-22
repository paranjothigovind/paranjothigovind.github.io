import { approach } from "@/lib/portfolioData";

export default function Approach() {
  return (
    <section id="approach" className="section">
      <div className="container">
        <div className="section__head">
          <h2>How I work.</h2>
        </div>
        <ol className="approach">
          {approach.map((a, i) => (
            <li key={a.title}>
              <span className="figure" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{a.title}</h3>
                <p>{a.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
