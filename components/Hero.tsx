
import React from 'react';

interface HeroProps {
  onOpenAI: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAI }) => {
  return (
    <section className="relative pt-40 pb-20 md:pt-56 md:pb-40 px-6 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-extrabold mb-10 animate-fade-in uppercase tracking-wider">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Global Client Ready • 2024
        </div>
        
        <h1 className="text-6xl md:text-9xl font-black tracking-tight mb-10 leading-[0.95] gradient-text reveal-on-scroll active">
          Digital Excellence <br className="hidden md:block"/> at Speed.
        </h1>
        
        <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-14 leading-relaxed font-medium reveal-on-scroll active transition-delay-300">
          Partnering with international brands to build scalable, high-performance web products that dominate their niche.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 reveal-on-scroll active transition-delay-500">
          <a 
            href="#portfolio" 
            className="w-full sm:w-auto px-12 py-5 bg-white text-black rounded-2xl font-extrabold text-xl hover:bg-zinc-200 transition-all shadow-[0_0_50px_rgba(255,255,255,0.15)] active:scale-95"
          >
            Explore Projects
          </a>
          <button 
            onClick={onOpenAI}
            className="w-full sm:w-auto px-12 py-5 bg-zinc-900 border border-zinc-800 text-white rounded-2xl font-extrabold text-xl hover:bg-zinc-800 transition-all active:scale-95 flex items-center justify-center gap-4 group"
          >
            <div className="p-1 bg-indigo-500 rounded flex items-center justify-center group-hover:rotate-12 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"/><circle cx="17" cy="7" r="5"/></svg>
            </div>
            AI Strategy
          </button>
        </div>

        <div className="mt-32 reveal-on-scroll active transition-delay-700">
          <p className="text-xs font-bold text-zinc-600 uppercase tracking-widest mb-10">Trusted by modern enterprises</p>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-20 grayscale hover:opacity-50 transition-all duration-700">
            <span className="text-2xl font-black tracking-tighter italic">TECHSCALE</span>
            <span className="text-2xl font-black tracking-tighter">FLOWSTATE</span>
            <span className="text-2xl font-black tracking-tighter italic underline decoration-indigo-500">VERTEX</span>
            <span className="text-2xl font-black tracking-tighter">SYNERGY</span>
          </div>
        </div>
      </div>
    </section>
  );
};
