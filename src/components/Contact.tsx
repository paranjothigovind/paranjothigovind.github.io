import React, { useState } from 'react';
import {
  Mail,
  Copy,
  Check,
  FileText,
  Send,
  ArrowUpRight,
  Sparkles,
  MapPin,
  AlertCircle
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import confetti from 'canvas-confetti';
import { personalConfig } from '../data/config';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [subject, setSubject] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalConfig.socialLinks.email);
    setCopiedEmail(true);
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#ccff00', '#ffffff', '#10b981'],
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleLaunchEmailClient = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedSubject = encodeURIComponent(
      subject.trim() || `Inquiry from ${name.trim() || 'Portfolio Visitor'}`
    );
    const bodyContent = `Hi Paranjothi,\n\nName: ${name.trim() || 'N/A'}\n\nMessage:\n${message.trim()}\n\n---\nSent via portfolio contact interaction`;
    const encodedBody = encodeURIComponent(bodyContent);

    // Direct mailto trigger
    const mailtoUrl = `mailto:${personalConfig.socialLinks.email}?subject=${encodedSubject}&body=${encodedBody}`;
    window.location.href = mailtoUrl;

    setStatusMessage(
      'Your default email application has been launched with the drafted message. You can also copy your message below.'
    );

    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#ccff00', '#22c55e', '#a855f7'],
    });
  };

  const handleCopyDraft = () => {
    const draftText = `Subject: ${subject || 'Engineering Inquiry'}\n\nHi Paranjothi,\n\n${message}\n\nFrom: ${name || 'Prospective Collaborator'}`;
    navigator.clipboard.writeText(draftText);
    setStatusMessage('Message draft copied to clipboard!');
    setTimeout(() => setStatusMessage(null), 3000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative scroll-mt-20 border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ccff00]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="space-y-3 mb-14 text-left">
          <div className="flex items-center gap-2 text-xs font-mono text-[#ccff00] uppercase tracking-wider">
            <span className="w-6 h-px bg-[#ccff00]" />
            <span>06 // Contact & Advisory</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-3xl">
            Have an interesting problem? Let's build something meaningful.
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-xl">
            Available for Senior Full Stack Engineer - AIership discussions, applied AI / RAG architecture consultations, and select product advisory.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Quick Contact Cards & Socials */}
          <div className="lg:col-span-5 space-y-6 text-left">
            {/* Direct Email Card with 1-Click Copy */}
            <div className="p-6 rounded-2xl bg-[#0f1118] border border-white/10 shadow-xl space-y-4 card-glow-hover">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-400">Direct Email Link</span>
                <span className="text-[10px] font-mono text-[#ccff00] bg-[#ccff00]/10 px-2 py-0.5 rounded">
                  Configurable
                </span>
              </div>

              <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-[#ccff00] shrink-0" />
                  <span className="text-xs sm:text-sm font-mono text-white truncate">
                    {personalConfig.socialLinks.email}
                  </span>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#ccff00] text-black text-xs font-mono font-semibold hover:bg-[#b8e600] active:scale-95 transition-all shrink-0 cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-neutral-400 leading-relaxed">
                Clicking copy saves the exact address to your clipboard, or use the interactive composer on the right.
              </p>
            </div>

            {/* Social & Documentation Links */}
            <div className="p-6 rounded-2xl bg-[#0f1118] border border-white/10 shadow-xl space-y-4">
              <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                Professional Profiles
              </h4>

              <div className="space-y-2.5">
                <a
                  href={personalConfig.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-[#ccff00]/40 flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="w-4 h-4 text-neutral-400 group-hover:text-[#ccff00] transition-colors" />
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-white">LinkedIn Profile</p>
                      <p className="text-[11px] font-mono text-neutral-400">linkedin.com/in/paranjothi-govind</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-[#ccff00] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href={personalConfig.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-[#ccff00]/40 flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon className="w-4 h-4 text-neutral-400 group-hover:text-[#ccff00] transition-colors" />
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-white">GitHub Repository</p>
                      <p className="text-[11px] font-mono text-neutral-400">github.com/paranjothi-govind</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-[#ccff00] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* Resume Download / View */}
                <a
                  href={personalConfig.socialLinks.resumeUrl}
                  onClick={(e) => {
                    if (personalConfig.socialLinks.resumeUrl === '#') {
                      e.preventDefault();
                      alert('Resume link configured. You can update the resume URL in src/data/config.ts');
                    }
                  }}
                  className="p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-[#ccff00]/40 flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-[#ccff00]" />
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-white">Curriculum Vitae / Resume</p>
                      <p className="text-[11px] font-mono text-neutral-400">Editable path in config</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-[#ccff00] bg-[#ccff00]/10 px-2 py-0.5 rounded">
                    Download
                  </span>
                </a>
              </div>
            </div>

            {/* Availability & Location Callout */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#ccff00]" />
                Chennai, Tamil Nadu, India
              </span>
              <span>IST (UTC+5:30)</span>
            </div>
          </div>

          {/* Right Column: Working Contact Form with Mailto Fallback */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0f1118] border border-white/10 p-6 sm:p-8 text-left shadow-2xl relative overflow-hidden">
              <div className="pb-5 border-b border-white/10 mb-6">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-1">
                  Compose An Inquiry
                </h3>
                <p className="text-xs text-neutral-400 font-mono">
                  Generates a pre-formatted draft directly to your email client with zero telemetry or tracking.
                </p>
              </div>

              <form onSubmit={handleLaunchEmailClient} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-neutral-300 mb-1.5">
                    Your Name / Organization
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Elena Rostova / Product Lead"
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-xs sm:text-sm placeholder-neutral-500 focus:outline-none focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-300 mb-1.5">
                    Subject / Discussion Topic
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Senior Full Stack Engineer - AIership / Applied AI Architecture Advisory"
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-xs sm:text-sm placeholder-neutral-500 focus:outline-none focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-300 mb-1.5">
                    Project Overview or Inquiry Details
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share context regarding your timeline, architecture requirements, or problem space..."
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-xs sm:text-sm placeholder-neutral-500 focus:outline-none focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00] transition-colors resize-y min-h-[100px]"
                  />
                </div>

                {statusMessage && (
                  <div className="p-3 rounded-lg bg-[#ccff00]/10 border border-[#ccff00]/30 text-[#ccff00] text-xs font-mono flex items-start gap-2">
                    <Sparkles className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#ccff00] text-black font-semibold text-xs tracking-tight hover:bg-[#b8e600] active:scale-95 transition-all shadow-[0_0_20px_-5px_rgba(204,255,0,0.3)] cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send via Email Client</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyDraft}
                    className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-200 text-xs font-mono border border-white/10 transition-colors cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Draft Text</span>
                  </button>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-neutral-400">
                  <AlertCircle className="w-3.5 h-3.5 text-neutral-400" />
                  <span>
                    No email spoofing or simulated backends. This connects directly to your verified email client with honest, transparent delivery.
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
