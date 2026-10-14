import React, { useState } from 'react';
import { 
  Cpu, 
  Boxes, 
  Gauge, 
  FileCode, 
  ShieldCheck, 
  GitBranch, 
  Brain,
  ChevronRight
} from 'lucide-react';
import { engineeringPillars } from '../data/approach';

export const Approach: React.FC = () => {
  const [activePillarId, setActivePillarId] = useState<string>(engineeringPillars[0].id);

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'Boxes':
        return <Boxes className="w-5 h-5" />;
      case 'Gauge':
        return <Gauge className="w-5 h-5" />;
      case 'FileCode':
        return <FileCode className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'GitBranch':
        return <GitBranch className="w-5 h-5" />;
      case 'Brain':
        return <Brain className="w-5 h-5" />;
      default:
        return <Cpu className="w-5 h-5" />;
    }
  };

  const activePillar =
    engineeringPillars.find((p) => p.id === activePillarId) || engineeringPillars[0];

  return (
    <section id="approach" className="py-20 lg:py-28 relative scroll-mt-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-14 text-left">
          <div className="flex items-center gap-2 text-xs font-mono text-[#ccff00] uppercase tracking-wider">
            <span className="w-6 h-px bg-[#ccff00]" />
            <span>04 // Engineering Approach</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            How I Architect & Deliver Software
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl">
            A deliberate engineering methodology focused on clarity of system boundaries, reliable execution, and measurable user speed.
          </p>
        </div>

        {/* Interactive Master-Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Numbered Pillars List */}
          <div className="lg:col-span-5 space-y-2.5">
            {engineeringPillars.map((pillar) => {
              const isActive = activePillarId === pillar.id;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillarId(pillar.id)}
                  className={`w-full p-4 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between group ${
                    isActive
                      ? 'bg-[#151824] border-[#ccff00]/60 shadow-[0_0_20px_-8px_rgba(204,255,0,0.25)]'
                      : 'bg-[#0f1118]/70 border-white/5 hover:border-white/20 hover:bg-[#12141e]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`font-mono text-xs font-bold transition-colors ${
                        isActive ? 'text-[#ccff00]' : 'text-neutral-400 group-hover:text-neutral-300'
                      }`}
                    >
                      {pillar.number}
                    </span>
                    <span
                      className={`font-medium text-xs sm:text-sm transition-colors ${
                        isActive ? 'text-white font-semibold' : 'text-neutral-300 group-hover:text-white'
                      }`}
                    >
                      {pillar.title}
                    </span>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isActive ? 'text-[#ccff00] translate-x-1' : 'text-neutral-600'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Architectural Detail Card */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0f1118] border border-white/10 p-6 sm:p-8 text-left shadow-2xl relative overflow-hidden card-glow-hover">
              {/* Subtle accent background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#ccff00]/5 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#ccff00]/15 border border-[#ccff00]/30 text-[#ccff00] flex items-center justify-center">
                    {getPillarIcon(activePillar.iconName)}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#ccff00] uppercase tracking-wider font-semibold">
                      Pillar {activePillar.number}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                      {activePillar.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Summary Callout */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 mb-6">
                <p className="text-xs sm:text-sm text-neutral-200 font-medium leading-relaxed">
                  {activePillar.summary}
                </p>
              </div>

              {/* Detailed Breakdown */}
              <div className="space-y-4 mb-8">
                <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                  Architectural Rationale
                </h4>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  {activePillar.detailedExplanation}
                </p>
              </div>

              {/* Production Pattern Stamp */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-neutral-400">
                  Applied Engineering Pattern:
                </span>
                <span className="text-xs font-mono text-[#ccff00] bg-[#ccff00]/10 px-2.5 py-1 rounded-md border border-[#ccff00]/20">
                  {activePillar.technicalPattern}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
