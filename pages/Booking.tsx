
import React, { useState } from 'react';
import { User, Mail, Calendar, Sparkles, Loader2, ArrowRight, CheckCircle2 } from 'lucide-react';
import { getTrainerRecommendation } from '../services/gemini';
import { TRAINERS } from '../constants';

const Booking: React.FC = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    goal: '',
    level: 'intermediate',
  });
  const [recommendation, setRecommendation] = useState<{ trainerName: string, explanation: string } | null>(null);

  const handleNext = async () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setLoading(true);
      try {
        const rec = await getTrainerRecommendation(formData.goal, formData.level);
        setRecommendation(rec);
        setStep(3);
      } catch (err) {
        console.error(err);
        setStep(3); // Fallback to success even if AI fails
      } finally {
        setLoading(false);
      }
    }
  };

  const getRecommendedTrainerObj = () => {
    if (!recommendation) return TRAINERS[0];
    return TRAINERS.find(t => t.name.toLowerCase().includes(recommendation.trainerName.toLowerCase())) || TRAINERS[0];
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-zinc-950 animate-in fade-in duration-500">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Progress bar */}
        <div className="flex items-center justify-between mb-12 max-w-sm mx-auto">
          {[1, 2, 3].map(s => (
            <div key={s} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${step >= s ? 'bg-orange-600 text-white' : 'bg-zinc-800 text-zinc-500'}`}>
                {s}
              </div>
              {s < 3 && <div className={`w-12 h-1 ${step > s ? 'bg-orange-600' : 'bg-zinc-800'}`} />}
            </div>
          ))}
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden p-8 md:p-12">
          {step === 1 && (
            <div className="animate-in slide-in-from-right duration-500">
              <h2 className="text-3xl font-black uppercase tracking-tight mb-2">Basic Information</h2>
              <p className="text-zinc-500 mb-10">Start your 3-day complimentary pass today.</p>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-zinc-500">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Jane Smith"
                      className="w-full bg-zinc-950 border border-zinc-800 pl-12 pr-6 py-4 rounded-xl text-white focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-zinc-500">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="jane@example.com"
                      className="w-full bg-zinc-950 border border-zinc-800 pl-12 pr-6 py-4 rounded-xl text-white focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                </div>
                <button 
                  onClick={handleNext}
                  disabled={!formData.name || !formData.email}
                  className="w-full bg-orange-600 hover:bg-orange-700 disabled:opacity-50 text-white py-5 rounded-xl font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2"
                >
                  Continue <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-in slide-in-from-right duration-500">
              <div className="flex items-center gap-2 bg-orange-500/10 text-orange-500 px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase mb-4 w-fit">
                <Sparkles size={12} /> Personalized For You
              </div>
              <h2 className="text-3xl font-black uppercase tracking-tight mb-2">Fitness Profile</h2>
              <p className="text-zinc-500 mb-10">Tell us about your goals so we can match you with the right coach.</p>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-zinc-500">What's your primary goal?</label>
                  <textarea 
                    value={formData.goal}
                    onChange={(e) => setFormData({...formData, goal: e.target.value})}
                    placeholder="e.g., I want to increase my deadlift by 20kg and improve mobility."
                    className="w-full bg-zinc-950 border border-zinc-800 px-6 py-4 rounded-xl text-white focus:outline-none focus:border-orange-500 transition-colors resize-none"
                    rows={3}
                  ></textarea>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-zinc-500">Fitness Level</label>
                  <div className="grid grid-cols-3 gap-4">
                    {['Beginner', 'Intermediate', 'Advanced'].map(l => (
                      <button 
                        key={l}
                        onClick={() => setFormData({...formData, level: l.toLowerCase()})}
                        className={`py-3 rounded-xl text-xs font-bold uppercase transition-all ${formData.level === l.toLowerCase() ? 'bg-orange-600 text-white border-orange-600' : 'bg-zinc-950 text-zinc-500 border-zinc-800 border'}`}
                      >
                        {l}
                      </button>
                    ))}
                  </div>
                </div>
                <button 
                  onClick={handleNext}
                  disabled={loading || !formData.goal}
                  className="w-full bg-orange-600 hover:bg-orange-700 disabled:opacity-50 text-white py-5 rounded-xl font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2"
                >
                  {loading ? <Loader2 className="animate-spin" /> : 'Find My Match'}
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-in fade-in zoom-in-95 duration-500 text-center">
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h2 className="text-4xl font-black uppercase tracking-tight mb-4">Registration Complete!</h2>
              <p className="text-zinc-400 mb-10">Check your inbox for your 3-day pass and orientation details.</p>
              
              {recommendation && (
                <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 text-left mb-8 animate-in slide-in-from-bottom-4 duration-700">
                  <div className="flex items-center gap-4 mb-6">
                    <img 
                      src={getRecommendedTrainerObj().image} 
                      alt="Recommended Trainer" 
                      className="w-16 h-16 rounded-full object-cover border-2 border-orange-500"
                    />
                    <div>
                      <span className="text-xs font-black uppercase tracking-widest text-orange-500">AI MATCHED COACH</span>
                      <h4 className="text-xl font-bold text-white">{recommendation.trainerName}</h4>
                    </div>
                  </div>
                  <p className="text-zinc-300 italic text-sm leading-relaxed mb-4">
                    "{recommendation.explanation}"
                  </p>
                  <button className="text-orange-500 text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                    View Coach Profile <ArrowRight size={14} />
                  </button>
                </div>
              )}

              <button 
                onClick={() => window.location.href = '/'}
                className="bg-zinc-800 hover:bg-zinc-700 text-white px-10 py-4 rounded-xl font-bold uppercase text-sm tracking-widest transition-all"
              >
                Back to Home
              </button>
            </div>
          )}
        </div>

        <div className="mt-12 flex items-center justify-center gap-8 text-zinc-600">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} /> <span className="text-[10px] font-bold uppercase tracking-widest">Secure Checkout</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} /> <span className="text-[10px] font-bold uppercase tracking-widest">Instant Access</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} /> <span className="text-[10px] font-bold uppercase tracking-widest">No Commitment</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
