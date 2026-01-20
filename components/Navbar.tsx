
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenAI: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAI }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHover, setActiveHover] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[60] transition-all duration-700 ${scrolled ? 'py-4' : 'py-8'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className={`flex items-center justify-between transition-all duration-500 rounded-full px-6 py-2 ${scrolled ? 'glass border border-white/10 shadow-2xl' : 'bg-transparent'}`}>
            <a href="#" className="text-xl font-bold tracking-tighter flex items-center gap-2 group">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black group-hover:rotate-[15deg] transition-all duration-500 shadow-lg shadow-indigo-500/20">E</div>
              <span className="tracking-tight text-white">ELITE<span className="text-indigo-400">DEV</span></span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-2 relative">
              <div className="flex items-center bg-zinc-900/40 backdrop-blur-sm rounded-full p-1 border border-white/5">
                {navLinks.map((link, idx) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onMouseEnter={() => setActiveHover(idx)}
                    onMouseLeave={() => setActiveHover(null)}
                    className={`text-[13px] font-semibold px-5 py-2 rounded-full transition-all duration-300 relative z-10 ${activeHover === idx ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'}`}
                  >
                    {link.name}
                    {activeHover === idx && (
                      <div className="absolute inset-0 bg-white/10 rounded-full -z-10 animate-fade-in"></div>
                    )}
                  </a>
                ))}
              </div>
              
              <div className="flex items-center gap-3 ml-4">
                <button 
                  onClick={onOpenAI}
                  className="group relative px-5 py-2 rounded-full overflow-hidden transition-all active:scale-95"
                >
                  <div className="absolute inset-0 bg-indigo-600/10 group-hover:bg-indigo-600/20 transition-colors"></div>
                  <div className="relative flex items-center gap-2 text-[12px] font-black text-indigo-400 uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse"></span>
                    AI Planner
                  </div>
                </button>
                <a 
                  href="#contact" 
                  className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all active:scale-95"
                >
                  Hire Me
                </a>
              </div>
            </div>

            {/* Mobile UI Buttons */}
            <div className="md:hidden flex items-center gap-4">
               <button 
                onClick={onOpenAI} 
                className="w-10 h-10 bg-zinc-800/80 rounded-full flex items-center justify-center text-indigo-400 border border-zinc-700 active:scale-90 transition-transform"
               >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"/><circle cx="17" cy="7" r="5"/></svg>
               </button>
               <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 relative z-50"
               >
                 <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                 <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 scale-x-0' : ''}`}></span>
                 <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
               </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[55] bg-black/95 backdrop-blur-xl transition-all duration-700 ease-in-out md:hidden ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
        <div className="h-full flex flex-col items-center justify-center gap-10 p-10">
          {navLinks.map((link, idx) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={handleLinkClick}
              className={`text-5xl font-black tracking-tighter hover:text-indigo-500 transition-all duration-500 ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {link.name}
            </a>
          ))}
          <div className="w-24 h-[1px] bg-zinc-800 my-6"></div>
          <a 
            href="#contact" 
            onClick={handleLinkClick}
            className="w-full max-w-sm bg-white text-black py-6 rounded-3xl text-2xl font-black text-center active:scale-95 transition-transform shadow-2xl"
          >
            Get Started
          </a>
        </div>
      </div>
    </>
  );
};
