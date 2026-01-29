
import React from 'react';
import { Check, X } from 'lucide-react';
import { MEMBERSHIPS } from '../constants';

const Memberships: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-zinc-950 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase">CHOOSE YOUR <span className="text-orange-500">PLAN</span></h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">Flexible options for every commitment level. No hidden fees, just pure performance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MEMBERSHIPS.map((plan) => (
            <div 
              key={plan.id} 
              className={`relative flex flex-col p-10 rounded-3xl border transition-all duration-300 ${
                plan.recommended 
                  ? 'bg-zinc-900 border-orange-600 scale-105 shadow-2xl shadow-orange-900/10 z-10' 
                  : 'bg-zinc-950 border-zinc-800 hover:border-zinc-700'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-600 text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold uppercase tracking-widest text-zinc-400 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black leading-none">${plan.price}</span>
                  <span className="text-zinc-500 font-medium">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-zinc-300">
                    <Check className="text-orange-500 w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => onNavigate('booking')}
                className={`w-full py-4 rounded-xl font-black uppercase text-sm tracking-widest transition-all ${
                  plan.recommended 
                    ? 'bg-orange-600 hover:bg-orange-700 text-white' 
                    : 'bg-zinc-800 hover:bg-zinc-700 text-white'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="mt-24 overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="py-6 px-4 font-black uppercase tracking-widest text-zinc-500 text-xs">Features</th>
                <th className="py-6 px-4 font-black uppercase tracking-widest text-zinc-300 text-xs text-center">Base</th>
                <th className="py-6 px-4 font-black uppercase tracking-widest text-orange-500 text-xs text-center">Elite</th>
                <th className="py-6 px-4 font-black uppercase tracking-widest text-zinc-300 text-xs text-center">Legend</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[
                { label: '24/7 Gym Access', base: true, elite: true, legend: true },
                { label: 'Standard Equipment', base: true, elite: true, legend: true },
                { label: 'Group Classes', base: false, elite: true, legend: true },
                { label: 'Sauna & Recovery', base: false, elite: true, legend: true },
                { label: 'Personal Training', base: 'Add-on', elite: '1/mo', legend: 'Unlimited' },
                { label: 'Nutrition Plans', base: false, elite: false, legend: true },
                { label: 'Guest Passes', base: false, elite: '2/mo', legend: 'Unlimited' },
              ].map((row, idx) => (
                <tr key={idx} className="border-b border-zinc-900 hover:bg-zinc-900/30">
                  <td className="py-5 px-4 text-zinc-400 font-medium">{row.label}</td>
                  <td className="py-5 px-4 text-center">
                    {typeof row.base === 'boolean' ? (row.base ? <Check className="mx-auto text-green-500" size={18}/> : <X className="mx-auto text-zinc-800" size={18}/>) : row.base}
                  </td>
                  <td className="py-5 px-4 text-center">
                    {typeof row.elite === 'boolean' ? (row.elite ? <Check className="mx-auto text-green-500" size={18}/> : <X className="mx-auto text-zinc-800" size={18}/>) : row.elite}
                  </td>
                  <td className="py-5 px-4 text-center font-bold">
                    {typeof row.legend === 'boolean' ? (row.legend ? <Check className="mx-auto text-green-500" size={18}/> : <X className="mx-auto text-zinc-800" size={18}/>) : row.legend}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Memberships;
