import React from 'react';
import {
  MapPin,
  Building,
  ShieldCheck
} from 'lucide-react';
import { experienceData } from '../data/experience';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 lg:py-28 relative scroll-mt-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-14 text-left">
          <div className="flex items-center gap-2 text-xs font-mono text-[#ccff00] uppercase tracking-wider">
            <span className="w-6 h-px bg-[#ccff00]" />
            <span>05 // Career & Leadership</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl">
            Senior Full Stack Engineer - AIership track record across product architecture, engineering mentorship, high-stakes system integration, and production delivery.
          </p>
        </div>

        {/* Experience Timeline Stream */}
        <div className="space-y-8 max-w-4xl text-left">
          {experienceData.map((item) => (
            <div
              key={item.id}
              className="relative p-6 sm:p-8 rounded-2xl bg-[#0f1118] border border-white/10 shadow-xl overflow-hidden card-glow-hover"
            >
              {/* Subtle accent highlight on current role */}
              {item.current && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ccff00] via-emerald-400 to-transparent" />
              )}

              {/* Role & Company Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                      {item.role}
                    </h3>
                    {item.current && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#ccff00]/15 text-[#ccff00] border border-[#ccff00]/30 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] animate-pulse" />
                        Current Role
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400">
                    <span className="text-white font-medium flex items-center gap-1">
                      <Building className="w-3.5 h-3.5 text-[#ccff00]" />
                      {item.company}
                    </span>
                    <span className="text-neutral-600">•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <div className="text-xs font-mono text-neutral-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 shrink-0 self-start">
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Overview Description */}
              <div className="py-5">
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Responsibilities & Achievements */}
              <div className="space-y-3 pb-6">
                <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                  Key Senior Full Stack Engineer - AIership Responsibilities:
                </h4>
                <div className="space-y-2">
                  {item.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                      <span className="text-[#ccff00] font-mono mt-0.5 font-bold">▸</span>
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Leveraged */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-mono text-neutral-400 mr-2">
                  Stack & Tooling:
                </span>
                {item.keyTechnologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 border border-white/5 text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Configurable placeholder notice for future career timeline expansion */}
          <div className="p-4 rounded-xl bg-white/[0.02] border border-dashed border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#ccff00]" />
              Career timeline is centrally driven via <code className="text-neutral-300 bg-white/5 px-1 py-0.5 rounded">src/data/experience.ts</code> for seamless editing.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
