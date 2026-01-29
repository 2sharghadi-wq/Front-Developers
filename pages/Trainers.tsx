
import React from 'react';
import { TRAINERS } from '../constants';

const Trainers: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-zinc-950 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase">WORLD CLASS <span className="text-orange-500">TRAINERS</span></h1>
          <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
            Our elite staff is comprised of industry veterans, former competitive athletes, and science-driven professionals dedicated to your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRAINERS.map((trainer) => (
            <div key={trainer.id} className="group bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 flex flex-col">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold heading-font leading-none mb-1">{trainer.name}</h3>
                  <p className="text-orange-500 text-xs font-black uppercase tracking-widest">{trainer.specialty}</p>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <p className="text-zinc-400 text-sm mb-6 flex-grow leading-relaxed">
                  {trainer.bio}
                </p>
                <div className="flex flex-wrap gap-2">
                  {trainer.tags.map(tag => (
                    <span key={tag} className="bg-zinc-800 text-zinc-500 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md">
                      #{tag}
                    </span>
                  ))}
                </div>
                <button className="mt-6 w-full py-3 bg-zinc-800 hover:bg-orange-600 text-white text-xs font-black uppercase tracking-widest rounded-xl transition-all">
                  Book Consultation
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trainers;
