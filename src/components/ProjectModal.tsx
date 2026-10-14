import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  ArrowLeft, 
  Cpu, 
  ShieldCheck, 
  AlertCircle, 
  Workflow
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import type { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onNavigateNext?: () => void;
  onNavigatePrev?: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onNavigateNext,
  onNavigatePrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNavigateNext) onNavigateNext();
      if (e.key === 'ArrowLeft' && onNavigatePrev) onNavigatePrev();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose, onNavigateNext, onNavigatePrev]);

  if (!project) return null;

  // Render project-specific visual architecture diagram
  const renderArchitectureFlow = () => {
    switch (project.architectureDiagramType) {
      case 'rag-pipeline':
        return (
          <div className="p-4 sm:p-5 rounded-xl bg-[#090a0f] border border-white/10 font-mono text-xs text-neutral-300 space-y-3">
            <div className="flex items-center justify-between text-[11px] text-[#ccff00] border-b border-white/5 pb-2">
              <span className="font-bold flex items-center gap-1.5">
                <Workflow className="w-3.5 h-3.5" />
                Azure RAG & LangGraph Architecture Flow
              </span>
              <span className="text-neutral-500">Offline Ingestion + Realtime Synthesis</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 pt-1 text-center">
              <div className="p-2.5 rounded bg-white/5 border border-white/5">
                <span className="text-[10px] text-neutral-500 block">01 Ingestion</span>
                <span className="text-xs text-white font-medium">Syllabi & Audio Docs</span>
                <span className="text-[9px] text-[#ccff00] block mt-1">Semantic Chunking</span>
              </div>
              <div className="p-2.5 rounded bg-white/5 border border-white/5">
                <span className="text-[10px] text-neutral-500 block">02 Indexing</span>
                <span className="text-xs text-white font-medium">Azure AI Search</span>
                <span className="text-[9px] text-emerald-400 block mt-1">Hybrid (Vector+BM25)</span>
              </div>
              <div className="p-2.5 rounded bg-white/5 border border-white/5">
                <span className="text-[10px] text-neutral-500 block">03 Orchestration</span>
                <span className="text-xs text-white font-medium">LangGraph & FastAPI</span>
                <span className="text-[9px] text-cyan-400 block mt-1">State Verification</span>
              </div>
              <div className="p-2.5 rounded bg-[#ccff00]/10 border border-[#ccff00]/30 text-white">
                <span className="text-[10px] text-[#ccff00] block font-bold">04 Synthesis</span>
                <span className="text-xs font-semibold text-white">Azure OpenAI GPT-4</span>
                <span className="text-[9px] text-[#ccff00] block mt-1">Strict Grounded Citations</span>
              </div>
            </div>
          </div>
        );

      case 'media-pipeline':
        return (
          <div className="p-4 sm:p-5 rounded-xl bg-[#090a0f] border border-white/10 font-mono text-xs text-neutral-300 space-y-3">
            <div className="flex items-center justify-between text-[11px] text-[#ccff00] border-b border-white/5 pb-2">
              <span className="font-bold flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" />
                Serverless Audio Processing Workflow
              </span>
              <span className="text-neutral-500">Event-Driven AWS Architecture</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 pt-1 text-center">
              <div className="p-2.5 rounded bg-white/5 border border-white/5">
                <span className="text-[10px] text-neutral-500 block">Client</span>
                <span className="text-xs text-white font-medium">React Waveform UI</span>
                <span className="text-[9px] text-neutral-400 block mt-1">Pre-signed S3 URL</span>
              </div>
              <div className="p-2.5 rounded bg-white/5 border border-white/5">
                <span className="text-[10px] text-neutral-500 block">Direct Ingestion</span>
                <span className="text-xs text-white font-medium">Amazon S3 Bucket</span>
                <span className="text-[9px] text-emerald-400 block mt-1">ObjectCreated Event</span>
              </div>
              <div className="p-2.5 rounded bg-white/5 border border-white/5">
                <span className="text-[10px] text-neutral-500 block">Compute Layer</span>
                <span className="text-xs text-white font-medium">AWS Lambda + FFmpeg</span>
                <span className="text-[9px] text-cyan-400 block mt-1">Async Segmentation</span>
              </div>
              <div className="p-2.5 rounded bg-[#ccff00]/10 border border-[#ccff00]/30 text-white">
                <span className="text-[10px] text-[#ccff00] block font-bold">Delivery</span>
                <span className="text-xs font-semibold text-white">Zip Bundle Export</span>
                <span className="text-[9px] text-[#ccff00] block mt-1">Signed S3 Download</span>
              </div>
            </div>
          </div>
        );

      case 'cross-platform':
      case 'booking-engine':
      case 'iot-bridge':
      case 'vending-hardware':
      case 'document-rag':
      case 'component-system':
      default:
        return (
          <div className="p-4 sm:p-5 rounded-xl bg-[#090a0f] border border-white/10 font-mono text-xs text-neutral-300 space-y-3">
            <div className="flex items-center justify-between text-[11px] text-[#ccff00] border-b border-white/5 pb-2">
              <span className="font-bold flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                Core System Architecture Blueprint
              </span>
              <span className="text-neutral-500">{project.category}</span>
            </div>
            <div className="p-3 rounded bg-white/[0.02] border border-white/5 leading-relaxed text-neutral-300">
              {project.architectureOverview}
            </div>
          </div>
        );
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog Content */}
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-[#0e1017] border border-white/15 shadow-2xl z-10 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#12141c]/90">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-[#ccff00]/15 text-[#ccff00] border border-[#ccff00]/30">
              {project.category}
            </span>
            <span className="text-xs font-mono text-neutral-400 hidden sm:inline">
              Case Study & Technical Architecture
            </span>
          </div>

          <div className="flex items-center gap-2">
            {onNavigatePrev && (
              <button
                onClick={onNavigatePrev}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors"
                title="Previous Project (Left Arrow)"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
            )}
            {onNavigateNext && (
              <button
                onClick={onNavigateNext}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors"
                title="Next Project (Right Arrow)"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-red-500/20 text-neutral-400 hover:text-red-400 transition-colors ml-1"
              title="Close modal (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto text-left">
          {/* Project Title & Tagline */}
          <div className="space-y-3">
            <h3 id="case-study-title" className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Metrics / Key Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.metricsOrTags.map((metric) => (
              <div key={metric.label} className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-[10px] font-mono text-neutral-400 block mb-1">
                  {metric.label}
                </span>
                <span className="text-xs font-semibold text-white">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>

          {/* Architecture Diagram Section */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#ccff00] font-semibold flex items-center gap-2">
              <span>Technical Architecture & Workflow</span>
            </h4>
            {renderArchitectureFlow()}
          </div>

          {/* Implemented vs Planned Capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Implemented Features */}
            <div className="space-y-3 p-5 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>Implemented & Verified Features</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                {project.implementedFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Planned Features or Core Focus */}
            <div className="space-y-3 p-5 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-300 font-semibold uppercase tracking-wider">
                <Clock className="w-4 h-4 text-[#ccff00]" />
                <span>
                  {project.plannedFeatures && project.plannedFeatures.length > 0
                    ? 'Planned Roadmap Capabilities'
                    : 'System Reliability Focus'}
                </span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-neutral-400">
                {project.plannedFeatures && project.plannedFeatures.length > 0 ? (
                  project.plannedFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#ccff00] font-bold">○</span>
                      <span>{feat}</span>
                    </li>
                  ))
                ) : (
                  <>
                    <li className="flex items-start gap-2">
                      <span className="text-[#ccff00] font-bold">○</span>
                      <span>Continuous integration and automated regressions suite.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#ccff00] font-bold">○</span>
                      <span>Telemetry aggregation and error budget monitoring.</span>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>

          {/* Technical Role & Contributions */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-neutral-400 font-semibold">
              My Role & Contributions
            </h4>
            <div className="space-y-2">
              {project.roleAndContributions.map((role, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300">
                  <span className="text-[#ccff00] font-mono mt-0.5">▸</span>
                  <span>{role}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Engineering Decisions */}
          {project.engineeringDecisions.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-mono text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                Key Engineering Decisions & Rationale
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.engineeringDecisions.map((dec, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#12141c] border border-white/5 space-y-1.5">
                    <h5 className="font-semibold text-xs sm:text-sm text-white flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00]" />
                      {dec.title}
                    </h5>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {dec.rationale}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Challenges & Solutions */}
          {project.challengesAndSolutions.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-mono text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                Technical Challenges & Solutions
              </h4>
              <div className="space-y-3">
                {project.challengesAndSolutions.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                    <p className="text-xs font-semibold text-red-300 flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>Challenge: {item.challenge}</span>
                    </p>
                    <p className="text-xs text-neutral-300 leading-relaxed pl-5">
                      <strong className="text-emerald-400">Solution:</strong> {item.solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Full Technology Stack */}
          <div className="space-y-2 pt-2 border-t border-white/10">
            <h4 className="font-mono text-xs text-neutral-400 uppercase tracking-wider">
              Technology Stack Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links & Repository / Enterprise Notice */}
          <div className="p-4 rounded-xl bg-[#12141c] border border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-neutral-400 font-mono">
              {project.links.isInternal ? (
                <span className="flex items-center gap-1.5 text-neutral-300">
                  <ShieldCheck className="w-4 h-4 text-[#ccff00]" />
                  {project.links.internalNotice || 'Proprietary enterprise product.'}
                </span>
              ) : (
                <span>Public package / open references available.</span>
              )}
            </div>

            <div className="flex items-center gap-3">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-white transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#ccff00] text-black text-xs font-mono font-semibold hover:bg-[#b8e600] transition-colors"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
