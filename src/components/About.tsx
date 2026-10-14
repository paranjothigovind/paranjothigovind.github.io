import React from 'react';
import { 
  Layers, 
  Smartphone, 
  Cloud, 
  Sparkles, 
  Gauge, 
  Quote,
  Building,
  MapPin
} from 'lucide-react';
import { personalConfig } from '../data/config';

export const About: React.FC = () => {
  const engineeringPillars = [
    {
      icon: Layers,
      title: 'Maintainable, Reusable Systems',
      description: 'Designing component systems and UI primitives that scale across enterprise products without visual or code drift.',
    },
    {
      icon: Smartphone,
      title: 'Fluid Cross-Platform Experiences',
      description: 'Engineering responsive React web applications and React Native mobile clients with 60fps gesture response and offline reconciliation.',
    },
    {
      icon: Cloud,
      title: 'Reliable APIs & Cloud Bridges',
      description: 'Connecting user interfaces to resilient backends via FastAPI, Node.js, and AWS/Azure serverless architectures with predictable schemas.',
    },
    {
      icon: Sparkles,
      title: 'Applied AI & RAG Architectures',
      description: 'Constructing document intelligence pipelines, vector retrieval indices, and grounded LLM workflows that deliver factual, verifiable answers.',
    },
    {
      icon: Gauge,
      title: 'Performance & Developer Experience',
      description: 'Prioritizing bundle hygiene, strict TypeScript safety, clean abstraction layers, and fast developer build feedback loops.',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative scroll-mt-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-14 text-left">
          <div className="flex items-center gap-2 text-xs font-mono text-[#ccff00] uppercase tracking-wider">
            <span className="w-6 h-px bg-[#ccff00]" />
            <span>01 // About & Philosophy</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Engineering for durability, clarity, and impact.
          </h2>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Authentic Bio & Philosophy Statement */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="space-y-5 text-neutral-300 text-base sm:text-lg leading-relaxed">
              <p>
                {personalConfig.aboutIntro}
              </p>
              <p className="text-neutral-400 text-base">
                As Technical Lead at Nyx Wolves, I treat technical architecture as the backbone of great product experiences. Rather than writing isolated interface widgets or fragile glue code, I focus on the entire data pipeline: from strictly-typed frontend state machines to cloud microservices and vector indices.
              </p>
            </div>

            {/* Engineering Philosophy Card */}
            <div className="relative p-6 sm:p-7 rounded-2xl bg-[#12141c]/90 border border-white/10 overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ccff00]/5 rounded-full blur-2xl pointer-events-none" />
              <Quote className="w-8 h-8 text-[#ccff00]/40 mb-3" />
              <h4 className="text-xs font-mono text-[#ccff00] uppercase tracking-wider mb-2 font-semibold">
                Engineering Philosophy
              </h4>
              <p className="text-sm sm:text-base text-neutral-200 leading-relaxed italic">
                "{personalConfig.engineeringPhilosophy}"
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>Paranjothi Govind</span>
                <span>Technical Lead</span>
              </div>
            </div>

            {/* Factsheet / Verification Details */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-400 mb-1">
                  <Building className="w-3.5 h-3.5 text-[#ccff00]" />
                  <span>Current Role</span>
                </div>
                <p className="font-semibold text-sm text-white">Technical Lead</p>
                <p className="text-xs text-neutral-400">Nyx Wolves</p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-400 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-[#ccff00]" />
                  <span>Base Location</span>
                </div>
                <p className="font-semibold text-sm text-white">Chennai, India</p>
                <p className="text-xs text-neutral-400">Tamil Nadu (UTC+5:30)</p>
              </div>
            </div>
          </div>

          {/* Right Column: Approach to Engineering Cards */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-mono text-xs text-neutral-400 uppercase tracking-wider mb-4 text-left">
              Core Engineering Commitments
            </h3>

            <div className="space-y-3.5">
              {engineeringPillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-5 rounded-xl bg-[#12141c]/60 border border-white/5 hover:border-[#ccff00]/30 transition-all text-left group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-[#ccff00] group-hover:bg-[#ccff00]/10 transition-colors shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm sm:text-base text-white group-hover:text-[#ccff00] transition-colors mb-1">
                          {pillar.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
