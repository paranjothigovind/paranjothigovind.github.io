import { Link } from "react-router-dom";

const pad = (n) => String(n + 1).padStart(2, "0");

function Pipeline({ steps }) {
  return (
    <ol className="pipeline" aria-label="Architecture">
      {steps.map((step, i) => (
        <li key={i}>
          <span className="pipeline__n" aria-hidden="true">
            {i + 1}
          </span>
          <span className="pipeline__t">{step}</span>
        </li>
      ))}
    </ol>
  );
}

// A horizontal diagram: each stage hangs from one connected line. Used for feature cases.
export function Flow({ items, label }) {
  return (
    <ol className="flow" aria-label={label} style={{ "--n": items.length }}>
      {items.map((it, i) => (
        <li key={i}>
          {it.layer && <span className="label">{it.layer}</span>}
          {it.name ? <span className="flow__name">{it.name}</span> : <span className="flow__text">{it.text}</span>}
        </li>
      ))}
    </ol>
  );
}

// Shown on the case row: the first two real screenshots, one wide and one narrow.
function Shots({ shots }) {
  const [wide, narrow] = shots;
  return (
    <div className="case__shots">
      <figure className="shot shot--wide">
        <img src={wide.src} alt={wide.alt} width={wide.width} height={wide.height} loading="lazy" />
      </figure>
      {narrow && (
        <figure className="shot shot--narrow">
          <img src={narrow.src} alt={narrow.alt} width={narrow.width} height={narrow.height} loading="lazy" />
        </figure>
      )}
    </div>
  );
}

// variant: "lead" and "feature" are full case rows, "pair" is a half-width case, "row" is an index line.
export default function ProjectCard({ project, index, variant = "row" }) {
  const to = `/projects/${project.slug}`;

  if (variant === "row") {
    return (
      <Link to={to} className="more__row">
        <h3>{project.title}</h3>
        <p>{project.tagline}</p>
        <span className="label">{project.category}</span>
      </Link>
    );
  }

  const steps = project.architecture || [];
  const shots = project.screenshots || [];
  const hasLayers = Boolean(project.layers && project.layers.length > 0);
  const wideFlow = variant === "feature" && (hasLayers || steps.length > 0);

  return (
    <Link to={to} className={`case case--${variant}`}>
      <div className="case__head">
        <span className="figure" aria-hidden="true">
          {pad(index)}
        </span>
        <h3>{project.title}</h3>
        <p className="lead">{project.tagline}</p>
        {!hasLayers && (
          <div className="stack-list">
            {project.tech.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        )}
      </div>

      {(!wideFlow || project.problem || project.role) && (
      <div className="case__body">
        {(project.problem || project.role) && (
          <div className="case__facts">
            {project.problem && (
              <div className="case__fact">
                <span className="label">Problem</span>
                <p>{project.problem}</p>
              </div>
            )}
            {project.role && (
              <div className="case__fact">
                <span className="label">My contribution</span>
                <p>{project.role}</p>
              </div>
            )}
          </div>
        )}
        {steps.length > 0 && !wideFlow && (
          <div className="case__fact">
            <span className="label">Architecture</span>
            <Pipeline steps={steps} />
          </div>
        )}
        {!wideFlow && <span className="case__open">View case study</span>}
      </div>
      )}

      {wideFlow && (
        <div className="case__flow">
          <span className="label">{hasLayers ? "Stack, by layer" : "Architecture"}</span>
          {hasLayers ? (
            <Flow items={project.layers} label="Stack by layer" />
          ) : (
            <Flow items={steps.map((text) => ({ text }))} label="Architecture" />
          )}
          <span className="case__open">View case study</span>
        </div>
      )}

      {shots.length > 0 && <Shots shots={shots} />}
    </Link>
  );
}
