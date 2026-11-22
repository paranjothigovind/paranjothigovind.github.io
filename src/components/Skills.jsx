import { skillGroups } from "@/lib/portfolioData";

export default function Skills() {
  return (
    <section id="expertise" className="section section--band">
      <div className="container">
        <div className="section__head">
          <h2>Grouped by domain, weighted by where I'm strongest.</h2>
        </div>
        <div className="ledger">
          {skillGroups.map((g) => (
            <div key={g.domain} className="ledger__row">
              <h3>{g.domain}</h3>
              <div className="ledger__primary">
                {g.primary.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
              <div className="ledger__secondary">
                {g.secondary.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
