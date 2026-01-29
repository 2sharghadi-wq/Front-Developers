
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-zinc-950 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase">GET IN <span className="text-orange-500">TOUCH</span></h1>
          <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
            Have a question about memberships or personal training? Reach out to us and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Form */}
          <div className="bg-zinc-900 p-8 md:p-12 rounded-3xl border border-zinc-800">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-zinc-500 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-zinc-950 border border-zinc-800 px-6 py-4 rounded-xl text-white focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-zinc-500 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-zinc-950 border border-zinc-800 px-6 py-4 rounded-xl text-white focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-zinc-500 ml-1">Inquiry Type</label>
                <select className="w-full bg-zinc-950 border border-zinc-800 px-6 py-4 rounded-xl text-white focus:outline-none focus:border-orange-500 transition-colors appearance-none">
                  <option>General Membership</option>
                  <option>Personal Training</option>
                  <option>Corporate Accounts</option>
                  <option>Partnerships</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-zinc-500 ml-1">Message</label>
                <textarea 
                  rows={5} 
                  placeholder="How can we help?" 
                  className="w-full bg-zinc-950 border border-zinc-800 px-6 py-4 rounded-xl text-white focus:outline-none focus:border-orange-500 transition-colors resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-5 rounded-xl font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

          {/* Info Side */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-8 heading-font">Headquarters</h3>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="bg-zinc-900 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-orange-500 border border-zinc-800">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Visit Us</h4>
                    <p className="text-zinc-500">123 Performance Way, Suite 100<br/>Metro City, NY 10001</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="bg-zinc-900 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-orange-500 border border-zinc-800">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Call Us</h4>
                    <p className="text-zinc-500">+1 (555) 000-FORGE<br/>Mon-Fri, 9am - 6pm EST</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="bg-zinc-900 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-orange-500 border border-zinc-800">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Email Us</h4>
                    <p className="text-zinc-500">hello@forgeperformance.com<br/>support@forgeperformance.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/30 p-8 rounded-3xl border border-dashed border-zinc-800">
              <h4 className="font-black uppercase tracking-widest text-zinc-500 text-xs mb-4">Social Presence</h4>
              <div className="flex gap-4">
                {['Instagram', 'Twitter', 'Facebook', 'LinkedIn', 'YouTube'].map(s => (
                  <button key={s} className="bg-zinc-900 hover:bg-zinc-800 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest text-zinc-400 border border-zinc-800 transition-colors">
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
