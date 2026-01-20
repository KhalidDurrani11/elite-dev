
import React from 'react';

export const WhyMe: React.FC = () => {
  const values = [
    {
      title: 'Global Communication',
      description: 'Native-level English and availability across EST/CET/BST timezones ensures seamless collaboration.',
      icon: '🌍'
    },
    {
      title: 'Performance First',
      description: 'Speed is a feature. I optimize every line of code for maximum efficiency and SEO ranking.',
      icon: '⚡'
    },
    {
      title: 'Clean Engineering',
      description: 'Extremely maintainable, documented, and typed code that your future team will thank you for.',
      icon: '🏗️'
    }
  ];

  return (
    <section id="process" className="py-24 px-6 border-y border-zinc-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">Why clients work with me.</h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          {values.map((v, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="text-4xl mb-6">{v.icon}</div>
              <h3 className="text-xl font-bold mb-4">{v.title}</h3>
              <p className="text-zinc-400 max-w-xs">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
