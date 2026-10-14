import React from 'react';
import { 
  ArrowRight, 
  ArrowUpRight, 
  MapPin, 
  CheckCircle2, 
  Code2, 
  Sparkles, 
  Layers, 
  Server
} from 'lucide-react';
import { personalConfig } from '../data/config';
import { ArchitectureViewer } from './ArchitectureViewer';

interface HeroProps {
  onExploreWork: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onOpenContact }) => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      
      {/* Atmospheric Top Radiant Glow */}
      <div className="absolute top-1/6 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#ccff00]/10 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#12141c]/90 border border-white/10 mb-8 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-radar absolute inline-flex h-full w-full rounded-full bg-[#ccff00] opacity-80" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ccff00]" />
          </span>
          <span className="text-xs font-mono text-neutral-300">
            {personalConfig.statusText}
          </span>
          <span className="text-neutral-600 font-mono text-xs">|</span>
          <div className="flex items-center gap-1 text-xs font-mono text-neutral-400">
            <MapPin className="w-3 h-3 text-[#ccff00]" />
            <span>{personalConfig.location}</span>
          </div>
        </div>

        {/* Hero Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading & Positioning */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#ccff00] uppercase tracking-wider">
                <span className="w-6 h-px bg-[#ccff00]" />
                <span>{personalConfig.role} @ {personalConfig.company}</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-bold text-white tracking-tight leading-[1.08]">
                I build digital products,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-neutral-400">
                  scalable interfaces,
                </span>{' '}
                and{' '}
                <span className="relative inline-block text-white">
                  <span className="relative z-10 underline decoration-[#ccff00]/60 decoration-wavy underline-offset-8">
                    AI-powered
                  </span>
                </span>{' '}
                experiences.
              </h1>
            </div>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl font-normal">
              {personalConfig.heroSubheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreWork}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#ccff00] text-black font-semibold text-sm tracking-tight hover:bg-[#b8e600] active:scale-95 transition-all shadow-[0_0_25px_-5px_rgba(204,255,0,0.4)] cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenContact}
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#12141c] hover:bg-[#181c28] text-white font-medium text-sm tracking-tight border border-white/10 hover:border-[#ccff00]/40 transition-all cursor-pointer"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-[#ccff00] transition-colors" />
              </button>
            </div>

            {/* Compact Domain Strip */}
            <div className="pt-6 border-t border-white/10">
              <p className="text-xs font-mono text-neutral-400 mb-3 tracking-wide">
                CORE TECHNICAL DOMAINS:
              </p>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { icon: Layers, label: 'Frontend Architecture', detail: 'React 19 / Next.js / TypeScript' },
                  { icon: Code2, label: 'Cross-Platform Mobile', detail: 'React Native / NativeWind' },
                  { icon: Sparkles, label: 'Applied AI & RAG', detail: 'Azure OpenAI / LangChain / LangGraph' },
                  { icon: Server, label: 'Cloud Infrastructure', detail: 'AWS Lambda / S3 / FastAPI / Postgres' },
                ].map((domain) => {
                  const Icon = domain.icon;
                  return (
                    <div
                      key={domain.label}
                      className="group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#12141c]/60 border border-white/5 hover:border-[#ccff00]/30 transition-colors"
                      title={domain.detail}
                    >
                      <Icon className="w-3.5 h-3.5 text-[#ccff00]" />
                      <span className="text-xs font-medium text-neutral-200">
                        {domain.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Visual Profile */}
          <div className="lg:col-span-5 flex flex-col items-center">
            {/* Visual Engineering Monogram / Profile Composition */}
            <div className="w-full max-w-md relative p-1 rounded-2xl bg-gradient-to-b from-white/10 via-white/5 to-transparent border border-white/10 shadow-2xl">
              <div className="rounded-xl bg-[#0c0e14] p-6 space-y-6">
                {/* Identity Card Header */}
                <div className="flex items-start justify-between border-b border-white/10 pb-5">
                  <div className="flex items-center gap-3.5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#171b26] to-[#0a0b0e] border border-[#ccff00]/40 flex items-center justify-center shadow-inner relative overflow-hidden group">
                      <span className="font-mono font-extrabold text-xl text-[#ccff00]">
                        PG
                      </span>
                      <div className="absolute inset-0 bg-[#ccff00]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-white">{personalConfig.name}</h3>
                      <p className="text-xs font-mono text-[#ccff00]">{personalConfig.role}</p>
                      <p className="text-xs text-neutral-400 font-mono mt-0.5">
                        {personalConfig.company} • Chennai, India
                      </p>
                    </div>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ccff00] animate-pulse mt-1" />
                </div>

                {/* Focus Areas Snapshot */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                    <span>ENGINEERING DISCIPLINE</span>
                    <span className="text-neutral-200">END-TO-END</span>
                  </div>

                  <div className="space-y-2">
                    {[
                      { area: 'Frontend & Cross-Platform UI Systems', level: 'Production Lead', color: 'bg-[#ccff00]' },
                      { area: 'RAG & Document Intelligence', level: 'Azure OpenAI / Vector Search', color: 'bg-emerald-400' },
                      { area: 'Cloud Native & Serverless Services', level: 'AWS / FastAPI / Node', color: 'bg-cyan-400' },
                    ].map((item) => (
                      <div key={item.area} className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between">
                        <span className="text-xs text-neutral-300 font-medium">{item.area}</span>
                        <span className="text-[10px] font-mono text-neutral-400 px-2 py-0.5 rounded bg-white/5">
                          {item.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Note */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified Production Stack
                  </span>
                  <span>Chennai UTC+5:30</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section divider to Architecture Interactive Showcase */}
        <div id="architecture" className="mt-16 sm:mt-20 scroll-mt-24">
          <ArchitectureViewer />
        </div>
      </div>
    </section>
  );
};
