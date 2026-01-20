
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { WhyMe } from './components/WhyMe';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { AIConsultant } from './components/AIConsultant';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [isAiOpen, setIsAiOpen] = useState(false);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Background decoration */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full"></div>
      </div>

      <Navbar onOpenAI={() => setIsAiOpen(true)} />
      
      <main>
        <Hero onOpenAI={() => setIsAiOpen(true)} />
        <About />
        <Services />
        <Portfolio />
        <WhyMe />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      {/* AI Assistant Modal */}
      {isAiOpen && (
        <AIConsultant onClose={() => setIsAiOpen(false)} />
      )}

      {/* Persistent floating action button for mobile/desktop AI access */}
      <button 
        onClick={() => setIsAiOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 z-40 group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"/><circle cx="17" cy="7" r="5"/></svg>
        <span className="absolute right-16 bg-zinc-800 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-zinc-700">AI Project Planner</span>
      </button>
    </div>
  );
};

export default App;
