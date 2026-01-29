
import React from 'react';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { LOCATIONS } from '../constants';

const Locations: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-zinc-950 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase">OUR <span className="text-orange-500">LOCATIONS</span></h1>
          <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
            Find a Forge Performance facility near you. All branches feature top-tier equipment, dedicated recovery zones, and expert staff available to help you reach your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {LOCATIONS.map((loc) => (
            <div key={loc.id} className="group bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-orange-500/50 transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={loc.image} 
                  alt={loc.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-6 heading-font tracking-tight">{loc.name}</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-zinc-300">{loc.address}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="text-orange-500 flex-shrink-0" size={20} />
                    <span className="text-zinc-300">{loc.hours}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="text-orange-500 flex-shrink-0" size={20} />
                    <span className="text-zinc-300">{loc.phone}</span>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-zinc-800 flex gap-4">
                  <button className="flex-grow bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2">
                    Get Directions <ExternalLink size={16} />
                  </button>
                  <button className="flex-grow bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-xl transition-all">
                    Virtual Tour
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-zinc-900 p-12 rounded-3xl border border-zinc-800 text-center">
          <h2 className="text-3xl font-bold mb-4 uppercase heading-font">Global Access</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
            Members with Elite or Legend plans enjoy access to all our locations worldwide, plus partner gyms in over 50 cities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['London', 'New York', 'Tokyo', 'Berlin', 'Sydney'].map(city => (
              <span key={city} className="bg-zinc-800 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-zinc-400">
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
