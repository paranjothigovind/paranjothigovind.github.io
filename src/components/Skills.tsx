import React, { useState } from 'react';
import { 
  Layout, 
  Sparkles, 
  Server, 
  Cloud, 
  Database, 
  Terminal
} from 'lucide-react';
import { skillsData } from '../data/skills';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ai-engineering');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-4 h-4" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4" />;
      case 'Server':
        return <Server className="w-4 h-4" />;
      case 'Cloud':
        return <Cloud className="w-4 h-4" />;
      case 'Database':
        return <Database className="w-4 h-4" />;
      default:
        return <Terminal className="w-4 h-4" />;
    }
  };

  const activeCategory = skillsData.find((c) => c.id === selectedCategory) || skillsData[0];

  return (
    <section id="expertise" className="py-20 lg:py-28 relative scroll-mt-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12 text-left">
          <div className="flex items-center gap-2 text-xs font-mono text-[#ccff00] uppercase tracking-wider">
            <span className="w-6 h-px bg-[#ccff00]" />
            <span>03 // Technical Expertise</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Architectural Domains & Stack Depth
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl">
            Prioritizing core engineering competencies across frontend systems, vector-based AI retrieval, cloud backends, and distributed data layers—grounded in production experience rather than arbitrary percentage bars.
          </p>
        </div>

        {/* Domain Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {skillsData.map((category) => {
            const isSelected = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? 'bg-[#151824] border-[#ccff00]/60 shadow-[0_0_20px_-8px_rgba(204,255,0,0.3)]'
                    : 'bg-[#0f1118] border-white/5 hover:border-white/20 hover:bg-[#12141e]'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#ccff00] to-transparent" />
                )}
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2.5 transition-colors ${
                    isSelected
                      ? 'bg-[#ccff00]/15 text-[#ccff00]'
                      : 'bg-white/5 text-neutral-400 group-hover:text-white'
                  }`}
                >
                  {getCategoryIcon(category.iconName)}
                </div>
                <h4 className="font-semibold text-xs sm:text-sm text-white mb-1">
                  {category.title}
                </h4>
                <p className="text-[10px] font-mono text-neutral-400">
                  {category.skills.length} core technologies
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Category Deep Dive Panel */}
        <div className="rounded-2xl bg-[#0f1118] border border-white/10 p-6 sm:p-8 text-left shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono text-[#ccff00] uppercase tracking-wider font-semibold">
                  Domain Overview
                </span>
                <span className="text-neutral-600 font-mono text-xs">•</span>
                <span className="text-xs font-mono text-neutral-400">
                  {activeCategory.skills.filter((s) => s.level === 'core').length} Core Focus / {activeCategory.skills.filter((s) => s.level === 'proficient').length} Proficient
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white">
                {activeCategory.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 mt-1">
                {activeCategory.shortDesc}
              </p>
            </div>

            {/* Legend */}
            <div className="flex items-center gap-4 text-xs font-mono shrink-0">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ccff00]" />
                <span className="text-neutral-200">Core Focus</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-500" />
                <span className="text-neutral-400">Proficient</span>
              </div>
            </div>
          </div>

          {/* Detailed Skill Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
            {activeCategory.skills.map((skill) => {
              const isCore = skill.level === 'core';
              return (
                <div
                  key={skill.name}
                  className={`p-4 rounded-xl border transition-all ${
                    isCore
                      ? 'bg-white/[0.02] border-white/10 hover:border-[#ccff00]/40'
                      : 'bg-white/[0.01] border-white/5 hover:border-white/15'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          isCore ? 'bg-[#ccff00] shadow-[0_0_8px_#ccff00]' : 'bg-neutral-500'
                        }`}
                      />
                      <h4 className="font-semibold text-sm text-white">{skill.name}</h4>
                    </div>

                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                        isCore
                          ? 'bg-[#ccff00]/10 text-[#ccff00] border border-[#ccff00]/20 font-medium'
                          : 'bg-white/5 text-neutral-400 border border-white/5'
                      }`}
                    >
                      {isCore ? 'Core Proficiency' : 'Proficient'}
                    </span>
                  </div>

                  {skill.context && (
                    <p className="text-xs text-neutral-400 font-mono leading-relaxed pl-4">
                      {skill.context}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
