
import React, { useState } from 'react';
import { ArrowRight, Zap, Target, Shield, MessageSquare, Loader2 } from 'lucide-react';
import { askFitnessQuestion } from '../services/gemini';

const Home: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  const [question, setQuestion] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAskAi = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;
    setLoading(true);
    try {
      const result = await askFitnessQuestion(question);
      setAiResponse(result || "Sorry, I couldn't answer that right now.");
    } catch (err) {
      setAiResponse("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-30"
            alt="Gym Background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tighter">
            FORGE YOUR <span className="text-orange-500 block md:inline">LIMITS.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 mb-10 max-w-2xl mx-auto font-medium tracking-wide">
            Elite training facility equipped with cutting-edge tech and world-class experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate('booking')}
              className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-full font-black uppercase text-sm tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2 group hover:scale-105 active:translate-x-1"
            >
              Start Free Trial <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => onNavigate('memberships')}
              className="bg-white/10 hover:bg-orange-500/20 backdrop-blur-md text-white px-10 py-5 rounded-full font-black uppercase text-sm tracking-[0.2em] transition-all duration-300 border border-white/20 hover:border-orange-500/40"
            >
              View Membership
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-zinc-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 p-10 border border-zinc-800 hover:border-orange-500/50 transition-all rounded-2xl group">
              <Zap className="w-12 h-12 text-orange-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4">Performance Tech</h3>
              <p className="text-zinc-400 leading-relaxed">Integrated tracking systems to measure your metabolic data and lifting metrics in real-time.</p>
            </div>
            <div className="bg-zinc-900 p-10 border border-zinc-800 hover:border-orange-500/50 transition-all rounded-2xl group">
              <Target className="w-12 h-12 text-orange-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4">Precision Coaching</h3>
              <p className="text-zinc-400 leading-relaxed">Personalized programming from specialists who have coached elite athletes and competitive lifters.</p>
            </div>
            <div className="bg-zinc-900 p-10 border border-zinc-800 hover:border-orange-500/50 transition-all rounded-2xl group">
              <Shield className="w-12 h-12 text-orange-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4">Recovery Zone</h3>
              <p className="text-zinc-400 leading-relaxed">Full access to cryotherapy, saunas, and sports massage to ensure your body recovers as hard as it works.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Assistant Section */}
      <section className="py-24 bg-zinc-900/50 border-y border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-500 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
            <MessageSquare size={14} /> AI Coaching Assistant
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">HAVE A FITNESS QUESTION?</h2>
          <p className="text-zinc-400 mb-10 text-lg">Our AI coach, powered by Gemini, can give you quick advice on nutrition, routines, or recovery.</p>
          
          <form onSubmit={handleAskAi} className="relative max-w-2xl mx-auto mb-12">
            <input 
              type="text" 
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="e.g., How can I improve my squat depth?"
              className="w-full bg-zinc-950 border border-zinc-700 px-6 py-4 rounded-2xl focus:outline-none focus:border-orange-500 transition-all text-white"
            />
            <button 
              disabled={loading}
              className="absolute right-2 top-2 bg-orange-600 hover:bg-orange-700 disabled:bg-zinc-700 text-white px-6 py-2 rounded-xl font-bold transition-all h-[calc(100%-16px)]"
            >
              {loading ? <Loader2 className="animate-spin" /> : 'ASK'}
            </button>
          </form>

          {aiResponse && (
            <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 text-left animate-in slide-in-from-bottom duration-500">
              <p className="text-zinc-300 leading-relaxed italic">"{aiResponse}"</p>
              <div className="mt-4 flex items-center gap-2 text-zinc-500 text-xs font-bold uppercase tracking-widest">
                <Dumbbell className="w-3 h-3" /> Forge AI Trainer
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden text-center bg-orange-600">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">STOP DREAMING. START BUILDING.</h2>
          <button 
            onClick={() => onNavigate('booking')}
            className="bg-zinc-950 text-white hover:bg-zinc-900 px-12 py-6 rounded-full font-black uppercase text-lg tracking-[0.2em] transition-all shadow-2xl"
          >
            Claim Your Pass
          </button>
        </div>
      </section>
    </div>
  );
};

const Dumbbell = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.4 14.4 9.6 9.6" /><path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.767-2.828-2.828 1.767-1.767a2 2 0 1 1-2.828-2.829" /><path d="m21.485 18.657-1.767-1.767 2.828-2.828 1.767 1.767a2 2 0 1 1-2.828 2.829z" /><path d="M11.314 11.314 9.547 9.547a2 2 0 1 1-2.828-2.829l-1.767 1.767-2.828-2.828 1.767-1.767a2 2 0 1 1-2.828-2.829" /><path d="m5.343 5.343-1.767-1.767 2.828-2.828 1.767 1.767a2 2 0 1 1-2.828 2.829z" />
  </svg>
);

export default Home;
