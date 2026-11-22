import { disciplines } from "@/lib/portfolioData";

// A layer stack: the four disciplines drawn as stacked slabs, each with the technologies
// already listed under Expertise. The top slab is the product surface and takes the one accent fill.
function Slab({ lead }) {
  return (
    <svg className="slab" viewBox="0 0 72 40" aria-hidden="true" focusable="false">
      <polygon className="slab__side" points="4,20 36,36 68,20 68,26 36,42 4,26" />
      <polygon className={lead ? "slab__top slab__top--lead" : "slab__top"} points="36,4 68,20 36,36 4,20" />
    </svg>
  );
}

export default function HeroVisual() {
  return (
    <ol className="stack" aria-label="Engineering layers">
      {disciplines.map((d, i) => (
        <li key={d.name} className="stack__layer">
          <Slab lead={i === 0} />
          <div>
            <h3>{d.name}</h3>
            <p className="stack__tech">{d.tech.join(", ")}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
