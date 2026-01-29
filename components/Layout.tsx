
import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook, Twitter, Dumbbell } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activePage: string;
  onNavigate: (page: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activePage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Locations', id: 'locations' },
    { label: 'Memberships', id: 'memberships' },
    { label: 'Trainers', id: 'trainers' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Careers', id: 'careers' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-950/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div 
              className="flex items-center gap-2 cursor-pointer" 
              onClick={() => onNavigate('home')}
            >
              <Dumbbell className="w-8 h-8 text-orange-500" />
              <span className="text-2xl font-bold tracking-tighter heading-font">FORGE<span className="text-orange-500">PERFORMANCE</span></span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`text-sm font-medium uppercase tracking-widest transition-colors hover:text-orange-500 ${activePage === item.id ? 'text-orange-500' : 'text-zinc-300'}`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => onNavigate('booking')}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full font-bold uppercase text-xs tracking-widest transition-all"
              >
                Join Now
              </button>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-zinc-300">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-zinc-900 border-b border-zinc-800 animate-in slide-in-from-top duration-300">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => { onNavigate(item.id); setIsMenuOpen(false); }}
                  className="block w-full text-left px-3 py-4 text-base font-medium text-zinc-300 hover:bg-zinc-800 hover:text-orange-500 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => { onNavigate('booking'); setIsMenuOpen(false); }}
                className="w-full mt-4 bg-orange-600 text-white py-4 rounded-lg font-bold uppercase tracking-widest"
              >
                Join Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Dumbbell className="w-6 h-6 text-orange-500" />
                <span className="text-xl font-bold tracking-tighter heading-font">FORGE</span>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Elite training for elite individuals. We provide the tools, the knowledge, and the environment to forge your best self.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-zinc-400 hover:text-orange-500 transition-colors"><Instagram size={20} /></a>
                <a href="#" className="text-zinc-400 hover:text-orange-500 transition-colors"><Facebook size={20} /></a>
                <a href="#" className="text-zinc-400 hover:text-orange-500 transition-colors"><Twitter size={20} /></a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold uppercase tracking-widest mb-6 text-orange-500">Quick Links</h4>
              <ul className="space-y-3">
                {navItems.map(item => (
                  <li key={item.id}>
                    <button onClick={() => onNavigate(item.id)} className="text-zinc-400 hover:text-white transition-colors text-sm uppercase tracking-wider">
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest mb-6 text-orange-500">Hours</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li className="flex justify-between"><span>Mon - Fri:</span> <span>24/7 (DT)</span></li>
                <li className="flex justify-between"><span>Sat - Sun:</span> <span>24/7 (DT)</span></li>
                <li className="pt-2 italic text-zinc-500">Branch hours may vary.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest mb-6 text-orange-500">Newsletter</h4>
              <p className="text-zinc-500 text-sm mb-4">Get fitness tips and gym updates.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-zinc-900 border border-zinc-700 px-4 py-2 rounded-lg text-sm flex-grow focus:outline-none focus:border-orange-500"
                />
                <button className="bg-orange-600 px-4 py-2 rounded-lg text-sm font-bold">JOIN</button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-600 text-xs tracking-widest uppercase">
              &copy; 2024 Forge Performance. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-xs text-zinc-600 uppercase tracking-widest">
              <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
