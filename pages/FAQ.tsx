
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-zinc-950 animate-in fade-in duration-500">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase">COMMON <span className="text-orange-500">QUESTIONS</span></h1>
          <p className="text-zinc-400 text-lg">Everything you need to know about joining Forge Performance.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 text-left flex justify-between items-center transition-colors hover:bg-zinc-800/50"
              >
                <span className="font-bold text-lg text-zinc-200">{faq.question}</span>
                {openIndex === idx ? <ChevronUp className="text-orange-500" /> : <ChevronDown className="text-zinc-500" />}
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6 text-zinc-400 leading-relaxed animate-in slide-in-from-top-2 duration-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 bg-orange-600 rounded-3xl text-center">
          <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2">Still have questions?</h3>
          <p className="text-orange-100 mb-8 font-medium">We're here to help you get started on your journey.</p>
          <button className="bg-zinc-950 text-white px-8 py-4 rounded-xl font-bold uppercase text-sm tracking-widest transition-all hover:scale-105">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
