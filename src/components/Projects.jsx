import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/portfolioData";

const FEATURED = ["third-eye-meditation-ai", "insureflow", "ai-document-portal"];
const PAIR = ["goatar", "roadferry"];

const pick = (slugs) => slugs.map((s) => projects.find((p) => p.slug === s)).filter(Boolean);

export default function Projects() {
  const featured = pick(FEATURED);
  const pair = pick(PAIR);
  const shown = new Set([...FEATURED, ...PAIR]);
  const rest = projects.filter((p) => !shown.has(p.slug));

  return (
    <section id="work" className="section">
      <div className="container">
        <div className="work__top">
          <h2>Products, systems, and AI work — built end to end.</h2>
          <p>Each project opens to a full case study: context, architecture, decisions, and stack.</p>
        </div>

        {featured.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} variant={i === 0 ? "lead" : "feature"} />
        ))}

        {pair.length > 0 && (
          <>
            <h3 className="pair__title">
              Product engineering
            </h3>
            <div className="pair">
              {pair.map((p, i) => (
                <ProjectCard key={p.slug} project={p} index={featured.length + i} variant="pair" />
              ))}
            </div>
          </>
        )}

        {rest.length > 0 && (
          <div className="more">
            <h3 className="more__title">More work</h3>
            {rest.map((p) => (
              <ProjectCard key={p.slug} project={p} index={0} variant="row" />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
