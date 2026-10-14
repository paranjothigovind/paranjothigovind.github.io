import React, { useState, useEffect } from 'react';
import { ArrowUp, Clock } from 'lucide-react';
import { personalConfig } from '../data/config';

export const Footer: React.FC = () => {
  const [chennaiTime, setChennaiTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format to Indian Standard Time (Chennai, UTC+5:30)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setChennaiTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/10 bg-[#07080b] relative z-10 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Brand & Monogram */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#12141c] border border-[#ccff00]/40 flex items-center justify-center font-mono font-bold text-xs text-[#ccff00]">
              PG
            </div>
            <div>
              <p className="font-semibold text-sm text-white">{personalConfig.name}</p>
              <p className="text-xs text-neutral-400 font-mono">
                Technical Lead Engineer • {personalConfig.company}
              </p>
            </div>
          </div>

          {/* Live Chennai Local Clock */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/5 text-xs font-mono text-neutral-300">
            <Clock className="w-3.5 h-3.5 text-[#ccff00]" />
            <span>Chennai, India:</span>
            <span className="text-[#ccff00] font-semibold">{chennaiTime || 'Loading IST...'}</span>
            <span className="text-neutral-400 text-[10px]">(IST UTC+5:30)</span>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-neutral-300 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#ccff00]" />
          </button>
        </div>

        {/* Bottom Colophon */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <p>© {new Date().getFullYear()} Paranjothi Govind. All rights reserved.</p>

          <p className="flex items-center gap-1.5 text-neutral-400">
            <span>Built with React 19, TypeScript & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
