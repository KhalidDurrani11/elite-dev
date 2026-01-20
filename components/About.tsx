
import React, { useEffect } from 'react';

export const About: React.FC = () => {
  const skills = [
    { name: 'React / Next.js', level: 95 },
    { name: 'TypeScript / Node.js', level: 90 },
    { name: 'UI/UX Design Systems', level: 85 },
    { name: 'Fullstack Architecture', level: 80 },
    { name: 'Cloud Infrastructure', level: 75 },
  ];

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
    <section id="about" className="py-32 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative group reveal-on-scroll opacity-0 -translate-x-8 transition-all duration-1000">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-[2rem] blur-2xl opacity-10 group-hover:opacity-20 transition duration-1000"></div>
            <div className="relative rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
              <img 
                src="https://picsum.photos/seed/dev-portrait/1000/1200" 
                alt="Professional Portrait" 
                className="w-full object-cover aspect-[4/5] grayscale group-hover:grayscale-0 transition-all duration-1000 scale-[1.01]"
              />
              <div className="absolute bottom-8 left-8 right-8 glass p-8 rounded-2xl border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center text-white text-xl">✨</div>
                  <div>
                    <p className="text-lg font-bold text-white leading-none mb-1">Elite Engineering</p>
                    <p className="text-xs text-zinc-400 font-medium">Delivering worldwide from Switzerland</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal-on-scroll opacity-0 translate-x-8 transition-all duration-1000 delay-200">
            <span className="text-indigo-500 font-black tracking-widest text-xs uppercase mb-6 block">Philosophy</span>
            <h2 className="text-5xl md:text-6xl font-bold mb-10 tracking-tight">Code that scales, <br/> Designs that convert.</h2>
            <p className="text-zinc-400 text-xl leading-relaxed mb-10 font-medium">
              I don't just build websites; I engineer business growth. With a focus on performance-first architecture and human-centric UI, I ensure your product not only looks premium but performs at the highest international standards.
            </p>
            
            <div className="space-y-8">
              {skills.map((skill, idx) => (
                <div key={skill.name} className="reveal-on-scroll opacity-0 translate-y-4 transition-all duration-700" style={{ transitionDelay: `${idx * 100 + 400}ms` }}>
                  <div className="flex justify-between mb-3 items-end">
                    <span className="text-base font-bold text-white">{skill.name}</span>
                    <span className="text-xs text-zinc-500 font-mono">{skill.level}% Mastery</span>
                  </div>
                  <div className="h-1.5 bg-zinc-900 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-indigo-600 rounded-full transition-all duration-[1.5s] ease-out-expo"
                      style={{ width: entryActive() ? `${skill.level}%` : '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-10 border-t border-zinc-900 grid grid-cols-3 gap-8">
              <div>
                <p className="text-4xl font-black text-white mb-2 tracking-tighter">120+</p>
                <p className="text-[10px] text-zinc-500 font-black uppercase tracking-[0.2em]">Deployments</p>
              </div>
              <div>
                <p className="text-4xl font-black text-white mb-2 tracking-tighter">98%</p>
                <p className="text-[10px] text-zinc-500 font-black uppercase tracking-[0.2em]">Referral Rate</p>
              </div>
              <div>
                <p className="text-4xl font-black text-white mb-2 tracking-tighter">8+</p>
                <p className="text-[10px] text-zinc-500 font-black uppercase tracking-[0.2em]">Years Deep</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper to check if parent section is active for animation triggers
function entryActive() {
  return true; // Simplified for the reveal logic
}
