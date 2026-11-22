import { useState } from "react";
import { Mail, Linkedin, Github, FileDown, Send } from "lucide-react";
import { profile } from "@/lib/portfolioData";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${name || "someone"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}${email ? `\n${email}` : ""}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const links = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
    { label: "LinkedIn", value: "in/paranjothigovind", href: profile.links.linkedin, icon: Linkedin },
    { label: "GitHub", value: "github.com/paranjothigovind", href: profile.links.github, icon: Github },
  ];

  return (
    <section id="contact" className="section section--band contact">
      <div className="container">
        <h2>Have an interesting problem? Let's build something meaningful.</h2>
        <div className="contact__actions">
          <a href={`mailto:${profile.email}`} className="btn btn--primary">
            <Mail size={16} aria-hidden="true" />
            Email me
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="btn">
            <Linkedin size={16} aria-hidden="true" />
            LinkedIn
          </a>
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="btn">
            <Github size={16} aria-hidden="true" />
            GitHub
          </a>
          {profile.links.resume && (
            <a href={profile.links.resume} target="_blank" rel="noreferrer" className="btn">
              <FileDown size={16} aria-hidden="true" />
              Resume
            </a>
          )}
        </div>

        <div className="contact__grid">
          <div>
            <div className="contact__rows">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="contact__row"
                >
                  <span className="label">
                    <l.icon size={16} aria-hidden="true" />
                    {l.label}
                  </span>
                  <span className="contact__value">{l.value}</span>
                </a>
              ))}
            </div>
            <p className="contact__note">
              Based in {profile.location}. The form sends via your email client — no server, no fake sends.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="well form">
            <div className="form__pair">
              <div className="field">
                <label htmlFor="c-name" className="label">
                  Name
                </label>
                <input id="c-name" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div className="field">
                <label htmlFor="c-email" className="label">
                  Email
                </label>
                <input id="c-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
            </div>
            <div className="field">
              <label htmlFor="c-msg" className="label">
                Message
              </label>
              <textarea id="c-msg" rows={5} value={message} onChange={(e) => setMessage(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn--primary">
              Send Message
              <Send size={14} aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
