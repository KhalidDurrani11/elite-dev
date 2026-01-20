
import React, { useState, useEffect } from 'react';

const projects = [
  {
    title: 'Venture Capital Dashboard',
    problem: 'Traditional VC tracking was messy, manual, and lacked real-time insights for LP reporting. Partners spent 15+ hours weekly on manual spreadsheets.',
    solution: 'Built a unified dashboard with real-time data visualisations, automated reporting, and secure document sharing. Integrated multi-source API tracking for equity benchmarks.',
    tech: ['Next.js', 'D3.js', 'PostgreSQL', 'Tailwind', 'Auth0'],
    image: 'https://picsum.photos/seed/project1/1200/800'
  },
  {
    title: 'Luxury E-commerce Platform',
    problem: 'Slow page loads and dated UI were leading to high drop-off rates for a high-end fashion brand. Bounce rate was over 65%.',
    solution: 'Engineered a headless commerce solution using Shopify & Next.js, achieving sub-200ms page transitions and a 42% increase in mobile conversion rates.',
    tech: ['Shopify SDK', 'Framer Motion', 'Redis', 'TypeScript', 'Vercel'],
    image: 'https://picsum.photos/seed/project2/1200/800'
  },
  {
    title: 'AI-Powered Research Engine',
    problem: 'Researchers struggled to index and query thousands of PDF documents efficiently. Information retrieval took minutes per document.',
    solution: 'Integrated Vector embeddings and Gemini API to create a semantic search engine with source citations, reducing research time by 80%.',
    tech: ['Python', 'Gemini API', 'Pinecone', 'React', 'FastAPI'],
    image: 'https://picsum.photos/seed/project3/1200/800'
  }
];

const ProjectImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-[2rem] aspect-[16/10] bg-zinc-900 border border-white/5 transition-all duration-700 ease-out group-hover:shadow-[0_40px_100px_rgba(0,0,0,0.6)] group-hover:-translate-y-4 group-hover:scale-[1.02] group-hover:border-white/10">
      {!loaded && <div className="absolute inset-0 animate-shimmer z-10" />}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-1000 ${
          loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
        } group-hover:scale-105 transition-transform duration-[1.5s]`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
    </div>
  );
};

export const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.portfolio-item').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="portfolio" className="py-32 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="reveal-on-scroll opacity-0 translate-y-4 transition-all duration-700">
              <span className="text-indigo-500 font-black tracking-widest text-xs uppercase mb-4 block">Case Studies</span>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Proof of Concept.</h2>
            </div>
            <button className="text-sm font-bold border-b-2 border-indigo-500 pb-2 hover:text-indigo-400 hover:border-indigo-400 transition-all uppercase tracking-widest">
              Archive Explorer
            </button>
          </div>

          <div className="space-y-48">
            {projects.map((project, idx) => (
              <div 
                key={idx} 
                className={`portfolio-item group flex flex-col cursor-pointer ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 lg:gap-24 items-center opacity-0 translate-y-20 transition-all duration-1000 ease-out`}
                onClick={() => setSelectedProject(project)}
              >
                <div className="w-full md:w-1/2">
                  <ProjectImage src={project.image} alt={project.title} />
                </div>
                
                <div className="w-full md:w-1/2 transition-transform duration-700 group-hover:translate-x-2">
                  <div className="flex items-center gap-3 mb-8">
                    <span className="w-8 h-[1px] bg-zinc-700 group-hover:w-12 group-hover:bg-indigo-500 transition-all duration-700"></span>
                    <span className="text-xs font-black text-zinc-500 uppercase tracking-[0.3em] group-hover:text-zinc-300 transition-colors">0{idx + 1} / Case Study</span>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-bold mb-8 text-white tracking-tight group-hover:text-indigo-400 transition-colors duration-500">{project.title}</h3>
                  
                  <div className="space-y-8 mb-12">
                    <div className="p-8 bg-zinc-900/30 rounded-3xl border border-white/5 group-hover:border-white/10 transition-all duration-700 backdrop-blur-sm group-hover:shadow-2xl group-hover:shadow-indigo-500/5">
                      <p className="text-[10px] font-black text-indigo-500 uppercase tracking-widest mb-3">Challenge</p>
                      <p className="text-zinc-300 text-lg leading-relaxed">{project.problem}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-12 px-8 md:px-0">
                    {project.tech.map(t => (
                      <span key={t} className="px-4 py-1.5 rounded-full bg-zinc-900 border border-white/5 text-zinc-500 text-[10px] font-black uppercase tracking-widest">
                        {t}
                      </span>
                    ))}
                  </div>

                  <button className="flex items-center gap-3 font-black text-sm text-white group/btn uppercase tracking-widest ml-8 md:ml-0">
                    <span className="group-hover/btn:mr-2 transition-all">View Full Solution</span>
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-black transition-all group-hover/btn:rotate-45">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <style>{`
          .portfolio-item.active {
            opacity: 1;
            transform: translateY(0);
          }
        `}</style>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12 overflow-hidden">
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-xl animate-fade-in" 
            onClick={() => setSelectedProject(null)}
          ></div>
          
          <div className="relative w-full max-w-5xl bg-zinc-950 border border-zinc-800 rounded-[3rem] overflow-hidden shadow-2xl animate-modal flex flex-col md:flex-row max-h-[90vh]">
            <div className="w-full md:w-1/2 relative bg-zinc-900">
               <img 
                 src={selectedProject.image} 
                 alt={selectedProject.title} 
                 className="w-full h-full object-cover"
               />
               <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 left-8 w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
               >
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
               </button>
            </div>

            <div className="w-full md:w-1/2 p-8 md:p-16 overflow-y-auto custom-scrollbar">
              <div className="flex items-center gap-3 mb-10">
                <span className="text-xs font-black text-indigo-500 uppercase tracking-[0.3em]">Full Case Study</span>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-bold mb-10 text-white tracking-tight leading-tight">
                {selectedProject.title}
              </h3>

              <div className="space-y-12">
                <div>
                  <h4 className="text-xs font-black text-zinc-500 uppercase tracking-widest mb-4">Background & Problem</h4>
                  <p className="text-zinc-300 text-lg leading-relaxed font-medium">
                    {selectedProject.problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-black text-emerald-500 uppercase tracking-widest mb-4">The Solution</h4>
                  <p className="text-zinc-400 text-base leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-black text-zinc-500 uppercase tracking-widest mb-4">Technology Stack</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tech.map(t => (
                      <span key={t} className="px-5 py-2 rounded-xl bg-zinc-900 border border-white/5 text-zinc-400 text-xs font-bold uppercase tracking-wider">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-zinc-900 flex gap-6">
                  <button 
                    onClick={() => {
                      setSelectedProject(null);
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex-1 py-5 bg-white text-black rounded-2xl font-black text-lg hover:bg-zinc-200 transition-all active:scale-95 shadow-xl shadow-white/5"
                  >
                    Start Project Like This
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
