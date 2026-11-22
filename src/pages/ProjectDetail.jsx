
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Github, ExternalLink, BookOpen, CheckCircle2, Circle } from "lucide-react";
import { projects } from "@/lib/portfolioData";
import Navbar from "@/components/Navbar";
import { Flow } from "@/components/ProjectCard";
import Footer from "@/components/Footer";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="container notfound">
          <p className="label">404</p>
          <h1>Project not found.</h1>
          <Link to="/" className="btn">
            Back home
          </Link>
        </main>
      </div>
    );
  }

  const linkItems = [
    { key: "github", label: "GitHub", icon: Github, href: project.links.github },
    { key: "demo", label: "Live Demo", icon: ExternalLink, href: project.links.demo },
    { key: "docs", label: "Docs", icon: BookOpen, href: project.links.docs },
  ].filter((l) => l.href);

  const list = (items) => (
    <ul className="pipeline">
      {items.map((item, i) => (
        <li key={i}>
          <span className="pipeline__n" aria-hidden="true">
            {i + 1}
          </span>
          <span className="pipeline__t">{item}</span>
        </li>
      ))}
    </ul>
  );

  const hasStatus = project.status.implemented.length > 0 || project.status.planned.length > 0;

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <article className="container page">
          <Link to="/" className="page__back link">
            All work
          </Link>

          <span className="label" style={{ display: "block", marginBottom: "var(--space-md)" }}>
            {project.category}
          </span>
          <h1>{project.title}</h1>
          <p className="lead page__tagline">{project.tagline}</p>

          <div className="chips" style={{ marginTop: "var(--space-lg)" }}>
            {project.tech.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>

          {linkItems.length > 0 && (
            <div className="page__links">
              {linkItems.map((l) => (
                <a key={l.key} href={l.href} target="_blank" rel="noreferrer" className="btn">
                  <l.icon size={14} aria-hidden="true" />
                  {l.label}
                </a>
              ))}
            </div>
          )}

          {project.screenshots && project.screenshots.length > 0 && (
            <div className="gallery">
              {project.screenshots.map((sh, i) => (
                <figure key={sh.src} className={`shot ${i === 0 ? "shot--wide" : "shot--narrow"}`}>
                  <img src={sh.src} alt={sh.alt} width={sh.width} height={sh.height} loading={i === 0 ? "eager" : "lazy"} />
                  <figcaption className="label">{sh.caption}</figcaption>
                </figure>
              ))}
            </div>
          )}

          <div className="page__grid">
            <div className="page__body">
              {project.overview && (
                <Section title="Overview">
                  <p>{project.overview}</p>
                </Section>
              )}
              {project.problem && (
                <Section title="Problem & Context">
                  <p>{project.problem}</p>
                </Section>
              )}
              {project.role && (
                <Section title="My Role">
                  <p>{project.role}</p>
                </Section>
              )}
              {project.architecture.length > 0 && (
                <Section title="Technical Architecture">{list(project.architecture)}</Section>
              )}
              {project.layers && project.layers.length > 0 && (
                <Section title="Stack, by layer">
                  <Flow items={project.layers} label="Stack by layer" />
                </Section>
              )}
              {(project.workflows || []).map((w) => (
                <Section key={w.title} title={w.title}>
                  {list(w.steps)}
                </Section>
              ))}
              {project.decisions.length > 0 && (
                <Section title="Key Engineering Decisions">{list(project.decisions)}</Section>
              )}
              {project.challenges.length > 0 && (
                <Section title="Challenges & Solutions">{list(project.challenges)}</Section>
              )}
            </div>

            <aside className="page__aside">
              {hasStatus && (
                <div className="well">
                  <h3>Status</h3>
                  {project.status.implemented.length > 0 && (
                    <div style={{ marginBottom: "var(--space-md)" }}>
                      <p className="state" style={{ display: "flex", alignItems: "center", gap: "var(--space-xs)" }}>
                        <CheckCircle2 size={15} aria-hidden="true" /> Implemented
                      </p>
                      <ul>
                        {project.status.implemented.map((s, i) => (
                          <li key={i}>{s}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {project.status.planned.length > 0 && (
                    <div>
                      <p className="state" style={{ display: "flex", alignItems: "center", gap: "var(--space-xs)" }}>
                        <Circle size={15} aria-hidden="true" /> Planned
                      </p>
                      <ul>
                        {project.status.planned.map((s, i) => (
                          <li key={i}>{s}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
              <div className="well">
                <h3>Stack</h3>
                <div className="chips">
                  {project.stack.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
                {project.supporting && project.supporting.length > 0 && (
                  <>
                    <h3 style={{ marginTop: "var(--space-lg)" }}>Also in the system</h3>
                    <div className="chips">
                      {project.supporting.map((s) => (
                        <span key={s} className="chip">
                          {s}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </aside>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="page__section">
      <h2>{title}</h2>
      <div style={{ display: "grid", gap: "var(--space-sm)" }}>{children}</div>
    </section>
  );
}
