
import React, { useEffect } from 'react';

export const Contact: React.FC = () => {
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
    <section id="contact" className="py-40 px-6 relative bg-zinc-950 overflow-hidden">
      {/* Dynamic background element */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 blur-[180px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div className="reveal-on-scroll opacity-0 translate-x-[-20px] transition-all duration-1000">
            <span className="text-indigo-500 font-black tracking-widest text-xs uppercase mb-8 block">Project Inquiry</span>
            <h2 className="text-6xl md:text-8xl font-bold mb-10 tracking-tighter leading-[0.9]">Let's ship <br/><span className="gradient-text">greatness.</span></h2>
            <p className="text-zinc-400 text-xl mb-16 leading-relaxed max-w-lg font-medium">
              Ready to take your digital presence to the elite tier? Drop me a message and let's discuss your roadmap for Q4 2024.
            </p>
            
            <div className="space-y-12">
              <div className="group">
                <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.4em] mb-4">Direct Communication</p>
                <a href="mailto:hello@elitedev.io" className="text-3xl font-bold text-white hover:text-indigo-400 transition-colors flex items-center gap-4">
                  hello@elitedev.io
                  <svg className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>

              <div>
                <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.4em] mb-6">Social Capital</p>
                <div className="flex flex-wrap gap-10">
                  {['LinkedIn', 'Twitter/X', 'GitHub', 'Behance'].map(social => (
                    <a key={social} href="#" className="text-sm font-black text-zinc-400 hover:text-white transition-all hover:-translate-y-1 block uppercase tracking-widest">
                      {social}
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-10 border-t border-zinc-900 flex items-center gap-6">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Currently available for select projects</span>
              </div>
            </div>
          </div>

          <div className="reveal-on-scroll opacity-0 translate-x-[20px] transition-all duration-1000 delay-300">
            <div className="glass p-10 md:p-14 rounded-[3rem] border border-white/5 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8">
                 <div className="w-12 h-12 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-500 group-hover:rotate-12 transition-transform duration-500">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                 </div>
              </div>
              
              <form className="space-y-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase text-zinc-500 tracking-widest">What's your name?</label>
                  <input type="text" className="w-full bg-zinc-950/50 border-b border-zinc-800 p-4 text-white font-bold text-lg focus:outline-none focus:border-indigo-500 transition-all placeholder:text-zinc-800" placeholder="Type name here..." />
                </div>
                
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase text-zinc-500 tracking-widest">Your Professional Email</label>
                  <input type="email" className="w-full bg-zinc-950/50 border-b border-zinc-800 p-4 text-white font-bold text-lg focus:outline-none focus:border-indigo-500 transition-all placeholder:text-zinc-800" placeholder="Type email here..." />
                </div>

                <div className="grid grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase text-zinc-500 tracking-widest">Service Needed</label>
                    <select className="w-full bg-transparent border-b border-zinc-800 p-4 text-white font-bold text-base focus:outline-none focus:border-indigo-500 transition-all appearance-none cursor-pointer">
                      <option className="bg-zinc-950">Full Application</option>
                      <option className="bg-zinc-950">UI/UX Overhaul</option>
                      <option className="bg-zinc-950">Landing Page</option>
                      <option className="bg-zinc-950">Consultation</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase text-zinc-500 tracking-widest">Project Budget</label>
                    <select className="w-full bg-transparent border-b border-zinc-800 p-4 text-white font-bold text-base focus:outline-none focus:border-indigo-500 transition-all appearance-none cursor-pointer">
                      <option className="bg-zinc-950">$10k - $25k</option>
                      <option className="bg-zinc-950">$25k - $50k</option>
                      <option className="bg-zinc-950">$50k+</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase text-zinc-500 tracking-widest">Tell me about your vision</label>
                  <textarea className="w-full bg-zinc-950/50 border border-zinc-800 rounded-3xl p-6 text-white font-medium text-lg focus:outline-none focus:border-indigo-500 transition-all min-h-[160px] resize-none" placeholder="Let's build something..."></textarea>
                </div>

                <button type="button" className="w-full py-6 bg-white text-black rounded-3xl font-black text-xl transition-all shadow-2xl hover:shadow-indigo-500/20 active:scale-95 group/btn flex items-center justify-center gap-4">
                  Send Inquiry
                  <svg className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
