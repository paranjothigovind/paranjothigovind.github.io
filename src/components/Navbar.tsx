import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  Menu, 
  X
} from 'lucide-react';
import { personalConfig } from '../data/config';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#projects' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Approach', href: '#approach' },
    { label: 'Experience', href: '#experience' },
    { label: 'About', href: '#about' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0a0b0e]/85 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl shadow-black/50'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#"
            className="group flex items-center gap-3.5 text-left focus:outline-none focus:ring-2 focus:ring-[#ccff00]/50 rounded-lg p-1"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#12141c] border border-white/10 group-hover:border-[#ccff00]/60 transition-colors">
              <span className="font-mono font-bold text-sm tracking-wider text-[#ccff00]">
                PG
              </span>
              <div className="absolute -inset-0.5 rounded-xl bg-[#ccff00]/10 opacity-0 group-hover:opacity-100 transition-opacity blur-sm pointer-events-none" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm tracking-tight text-white group-hover:text-[#ccff00] transition-colors">
                  {personalConfig.name}
                </span>
                <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono tracking-wide bg-white/5 border border-white/10 text-neutral-300">
                  Tech Lead
                </span>
              </div>
              <p className="text-[11px] text-neutral-400 font-mono tracking-normal hidden sm:block">
                Nyx Wolves • Chennai
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#12141c]/70 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="px-3.5 py-1.5 text-xs font-medium text-neutral-300 hover:text-white hover:bg-white/5 rounded-full transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Status Indicator */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#12141c] border border-white/10 text-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-radar absolute inline-flex h-full w-full rounded-full bg-[#ccff00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ccff00]"></span>
              </span>
              <span className="text-[11px] text-neutral-300 font-mono">Available for advisory</span>
            </div>

            <button
              onClick={onOpenContact}
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#ccff00] text-black font-semibold text-xs tracking-tight hover:bg-[#b8e600] active:scale-95 transition-all shadow-[0_0_20px_-5px_rgba(204,255,0,0.4)] cursor-pointer"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#12141c] border border-white/10 text-neutral-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#ccff00]/50"
            aria-label="Toggle mobile navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-50 lg:hidden bg-black/80 backdrop-blur-xl flex flex-col justify-between p-6 animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#12141c] border border-[#ccff00]/40 flex items-center justify-center font-mono font-bold text-xs text-[#ccff00]">
                PG
              </div>
              <div>
                <p className="font-semibold text-sm text-white">{personalConfig.name}</p>
                <p className="text-xs text-neutral-400 font-mono">Technical Lead Engineer</p>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-[#12141c] border border-white/10 text-neutral-300 hover:text-white"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2 my-auto py-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="text-left py-3 px-4 rounded-xl text-lg font-medium text-neutral-200 hover:text-white hover:bg-white/5 active:bg-white/10 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-[#ccff00]">→</span>
              </button>
            ))}
          </div>

          {/* Footer of Mobile Drawer */}
          <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
            <div className="flex items-center gap-2 py-2 text-xs font-mono text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-[#ccff00] inline-block animate-pulse" />
              <span>{personalConfig.statusText}</span>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 rounded-xl bg-[#ccff00] text-black font-semibold text-sm flex items-center justify-center gap-2"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
