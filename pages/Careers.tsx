
import React from 'react';
import { Briefcase, MapPin, ArrowRight } from 'lucide-react';
import { JOBS } from '../constants';

const Careers: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-zinc-950 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase">JOIN THE <span className="text-orange-500">TEAM</span></h1>
          <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
            We are always looking for passionate fitness professionals, operations experts, and coaches who want to redefine the industry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold uppercase tracking-widest mb-8 flex items-center gap-3">
              <Briefcase className="text-orange-500" /> Open Positions
            </h2>
            {JOBS.map((job) => (
              <div key={job.id} className="group bg-zinc-900 p-8 rounded-3xl border border-zinc-800 hover:border-orange-500 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{job.title}</h3>
                  <div className="flex gap-4 text-sm text-zinc-500 uppercase font-black tracking-widest">
                    <span>{job.department}</span>
                    <span className="flex items-center gap-1"><MapPin size={12}/> {job.location}</span>
                    <span>{job.type}</span>
                  </div>
                </div>
                <button className="bg-zinc-800 group-hover:bg-orange-600 text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2">
                  Apply Now <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <div className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800">
              <h3 className="text-xl font-bold uppercase tracking-widest text-orange-500 mb-6">Our Culture</h3>
              <ul className="space-y-6">
                <li>
                  <h4 className="font-bold text-white mb-1">Growth Mindset</h4>
                  <p className="text-zinc-500 text-sm">We invest in our staff's continuous education and professional certifications.</p>
                </li>
                <li>
                  <h4 className="font-bold text-white mb-1">Elite Standards</h4>
                  <p className="text-zinc-500 text-sm">We maintain the highest quality of service and facility maintenance.</p>
                </li>
                <li>
                  <h4 className="font-bold text-white mb-1">Community First</h4>
                  <p className="text-zinc-500 text-sm">We are a diverse community built on mutual respect and shared goals.</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 relative overflow-hidden">
              <img src="https://picsum.photos/seed/team/400/400" className="absolute inset-0 w-full h-full object-cover opacity-20" alt="Team"/>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-2 uppercase">Staff Perks</h3>
                <ul className="text-zinc-400 text-sm space-y-2">
                  <li>• Free Premium Membership</li>
                  <li>• Competitive Base + Commission</li>
                  <li>• Ongoing CEC Support</li>
                  <li>• Health & Vision Benefits</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
