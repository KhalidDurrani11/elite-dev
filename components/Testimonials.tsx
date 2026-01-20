
import React from 'react';

const testimonials = [
  {
    content: "He transformed our messy legacy app into a modern, fast platform. Our conversion rates jumped by 40% within the first month.",
    name: "Sarah Chen",
    role: "CTO",
    company: "Nexus AI",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    content: "One of the few developers who actually understands business goals. He doesn't just write code; he solves real problems.",
    name: "Jameson Blake",
    role: "Founder",
    company: "Velocity Design",
    avatar: "https://i.pravatar.cc/150?u=jameson"
  },
  {
    content: "Exceptional quality and communication. Even with a 6-hour time difference, it felt like he was right in our office.",
    name: "Elena Rodriguez",
    role: "Product Manager",
    company: "Lumina Labs",
    avatar: "https://i.pravatar.cc/150?u=elena"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-zinc-950/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-indigo-500 font-bold tracking-widest text-xs uppercase mb-4 block">Testimonials</span>
          <h2 className="text-4xl font-bold">What industry leaders say.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 rounded-2xl glass border border-white/5 relative">
              <div className="text-indigo-500 text-4xl font-serif absolute top-4 left-6 opacity-20">"</div>
              <p className="text-zinc-300 mb-8 italic leading-relaxed relative z-10">
                {t.content}
              </p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border border-white/10" />
                <div>
                  <p className="text-sm font-bold text-white">{t.name}</p>
                  <p className="text-xs text-zinc-500">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
