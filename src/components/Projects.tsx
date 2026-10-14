import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  CheckCircle2, 
  Clock
} from 'lucide-react';
import { projectsData } from '../data/projects';
import type { Project, TechCategoryGroup } from '../types/portfolio';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<TechCategoryGroup>('all');

  const filterTabs: { label: string; value: TechCategoryGroup; count: number }[] = [
    { label: 'All Projects', value: 'all', count: projectsData.length },
    { 
      label: 'Applied AI & RAG', 
      value: 'ai', 
      count: projectsData.filter((p) => p.categoryGroup === 'ai').length 
    },
    { 
      label: 'Mobile & IoT Systems', 
      value: 'mobile', 
      count: projectsData.filter((p) => p.categoryGroup === 'mobile' || p.categoryGroup === 'systems').length 
    },
    { 
      label: 'Full-Stack & Component Systems', 
      value: 'fullstack', 
      count: projectsData.filter((p) => p.categoryGroup === 'fullstack').length 
    },
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'mobile') {
      return project.categoryGroup === 'mobile' || project.categoryGroup === 'systems';
    }
    return project.categoryGroup === activeFilter;
  });

  return (
    <section id="projects" className="py-20 lg:py-28 relative scroll-mt-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#ccff00] uppercase tracking-wider">
              <span className="w-6 h-px bg-[#ccff00]" />
              <span>02 // Featured Engineering Work</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Selected Projects & Case Studies
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base max-w-xl">
              Production architectures spanning applied AI pipelines, cross-platform mobile ecosystems, cloud infrastructure, and enterprise component systems.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                  activeFilter === tab.value
                    ? 'bg-[#ccff00] text-black shadow-[0_0_15px_-3px_rgba(204,255,0,0.4)]'
                    : 'bg-[#12141c] text-neutral-400 hover:text-white border border-white/5 hover:border-white/15'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    activeFilter === tab.value
                      ? 'bg-black/20 text-black font-bold'
                      : 'bg-white/5 text-neutral-400'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project) => {
            const hasPlanned = project.plannedFeatures && project.plannedFeatures.length > 0;

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group relative flex flex-col justify-between rounded-2xl bg-[#0f1118]/80 hover:bg-[#131622] border border-white/10 hover:border-[#ccff00]/40 p-6 sm:p-7 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-black/70 cursor-pointer text-left card-glow-hover"
              >
                {/* Top Row: Category badge & Case Study link icon */}
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="px-2.5 py-1 rounded text-[11px] font-mono font-medium bg-[#171b26] text-[#ccff00] border border-white/10 group-hover:border-[#ccff00]/40 transition-colors">
                      {project.category}
                    </span>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-400 group-hover:text-[#ccff00] transition-colors">
                      <span>Deep Case Study</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-[#ccff00] transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-5">
                    {project.tagline}
                  </p>

                  {/* Highlight Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.highlightBadges.map((badge) => (
                      <span
                        key={badge}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] text-neutral-300 border border-white/5"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  {/* Implemented vs Planned capability pill for AI & complex apps */}
                  {hasPlanned && (
                    <div className="p-3 rounded-lg bg-[#0a0c12] border border-white/5 mb-5 flex items-center justify-between text-[11px] font-mono">
                      <span className="text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Core Ingestion & Search Implemented
                      </span>
                      <span className="text-neutral-400 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#ccff00]" /> Planned Agent Routing
                      </span>
                    </div>
                  )}
                </div>

                {/* Bottom Row: Key Technologies & CTA */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono text-neutral-400 group-hover:text-neutral-200 transition-colors"
                      >
                        {tech} {project.technologies.slice(0, 4).indexOf(tech) < 3 ? '•' : ''}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[10px] font-mono text-[#ccff00]">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-mono text-neutral-400 group-hover:text-white flex items-center gap-1">
                    Read Architecture →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
