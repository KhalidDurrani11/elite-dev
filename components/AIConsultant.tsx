
import React, { useState } from 'react';
import { getProjectPlan } from '../services/gemini';

interface AIConsultantProps {
  onClose: () => void;
}

export const AIConsultant: React.FC<AIConsultantProps> = ({ onClose }) => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<any>(null);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setError('');
    try {
      const data = await getProjectPlan(prompt);
      setPlan(data);
    } catch (err) {
      setError('Failed to generate plan. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl animate-fade-in">
        <div className="p-6 md:p-10">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"/><circle cx="17" cy="7" r="5"/></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">AI Project Planner</h3>
                <p className="text-xs text-zinc-500">Powered by Gemini 3</p>
              </div>
            </div>
            <button onClick={onClose} className="text-zinc-500 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          {!plan ? (
            <div className="space-y-6">
              <p className="text-zinc-400">
                Briefly describe your business and what you're looking to build. Our AI will generate a roadmap and tech recommendation for us to discuss.
              </p>
              <textarea 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g. I need a modern dashboard for a crypto exchange with real-time trading charts..."
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl p-4 text-white focus:outline-none focus:border-indigo-500 min-h-[120px] resize-none"
              ></textarea>
              <button 
                onClick={handleGenerate}
                disabled={loading || !prompt.trim()}
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 disabled:bg-zinc-800 disabled:text-zinc-600 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Thinking...
                  </>
                ) : 'Generate Strategy'}
              </button>
              {error && <p className="text-rose-500 text-sm text-center">{error}</p>}
            </div>
          ) : (
            <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-zinc-800 rounded-xl border border-zinc-700">
                  <p className="text-xs font-bold text-zinc-500 uppercase mb-1">Complexity</p>
                  <p className="text-indigo-400 font-bold">{plan.complexity}</p>
                </div>
                <div className="p-4 bg-zinc-800 rounded-xl border border-zinc-700">
                  <p className="text-xs font-bold text-zinc-500 uppercase mb-1">Est. Timeline</p>
                  <p className="text-emerald-400 font-bold">{plan.estimatedTimeline}</p>
                </div>
              </div>

              <div>
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                  Suggested Roadmap
                </h4>
                <div className="space-y-3">
                  {plan.roadmap.map((p: any, i: number) => (
                    <div key={i} className="pl-4 border-l-2 border-zinc-800 py-1">
                      <p className="text-sm font-bold text-zinc-300">{p.phase}</p>
                      <ul className="text-xs text-zinc-500 list-disc list-inside mt-1">
                        {p.tasks.map((t: string, j: number) => <li key={j}>{t}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                  Recommended Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {plan.suggestedTech.map((t: string) => (
                    <span key={t} className="px-3 py-1 bg-zinc-800 text-zinc-400 text-xs rounded-lg border border-zinc-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex gap-4">
                <button 
                  onClick={() => setPlan(null)}
                  className="flex-1 py-3 border border-zinc-700 rounded-xl text-zinc-400 font-bold hover:bg-zinc-800 transition-all"
                >
                  Back
                </button>
                <button 
                  onClick={() => {
                    const el = document.getElementById('contact');
                    el?.scrollIntoView({ behavior: 'smooth' });
                    onClose();
                  }}
                  className="flex-[2] py-3 bg-white text-black rounded-xl font-bold hover:bg-zinc-200 transition-all"
                >
                  Book Consultation
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
