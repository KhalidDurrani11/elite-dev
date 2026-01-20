
import React, { useEffect, useRef } from 'react';

const services = [
  {
    title: 'Landing Pages',
    description: 'High-conversion sales machines built with performance and SEO in mind. I focus on storytelling that sells.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    ),
    accent: 'bg-indigo-500/10 text-indigo-500',
    animationClass: 'animate-soft-pulse'
  },
  {
    title: 'Business Websites',
    description: 'Scalable corporate sites and CMS integrations that establish authority and build deep trust with your clients.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
    ),
    accent: 'bg-emerald-500/10 text-emerald-500',
    animationClass: 'animate-gentle-float'
  },
  {
    title: 'UI/UX Improvements',
    description: 'Refining user flows and visual aesthetics to reduce churn and increase user engagement through research-backed design.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
    ),
    accent: 'bg-amber-500/10 text-amber-500',
    animationClass: 'animate-subtle-rotate'
  },
  {
    title: 'Performance Optimization',
    description: 'Lightning-fast load times and perfect Core Web Vitals to boost your rankings and user experience significantly.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    ),
    accent: 'bg-rose-500/10 text-rose-500',
    animationClass: 'animate-soft-pulse'
  },
  {
    title: 'API & Cloud Systems',
    description: 'Robust server-side architectures and cloud deployments that handle traffic spikes without breaking a sweat.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
    ),
    accent: 'bg-sky-500/10 text-sky-500',
    animationClass: 'animate-gentle-float'
  },
  {
    title: 'Custom AI Integration',
    description: 'Harness the power of LLMs and machine learning to build intelligent features that set your brand apart.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
    ),
    accent: 'bg-purple-500/10 text-purple-500',
    animationClass: 'animate-subtle-rotate'
  }
];

export const Services: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-32 px-6 relative bg-zinc-950">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/5 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center max-w-3xl mx-auto reveal-on-scroll opacity-0 translate-y-4 transition-all duration-700">
          <span className="text-indigo-500 font-black tracking-widest text-xs uppercase mb-6 block">Capabilities</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Crafting Digital Dominance.</h2>
          <p className="text-zinc-400 text-xl font-medium leading-relaxed">
            I combine technical excellence with strategic thinking to deliver web products that define industry standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group p-10 rounded-[2.5rem] border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900/80 transition-all duration-700 hover:-translate-y-3 reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-10 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] ${service.accent} ${service.animationClass}`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-indigo-400 transition-colors duration-500">{service.title}</h3>
              <p className="text-zinc-400 text-base leading-relaxed font-medium group-hover:text-zinc-300 transition-colors duration-500">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .reveal-on-scroll.active {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
};
