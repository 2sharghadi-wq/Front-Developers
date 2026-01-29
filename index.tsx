
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Layout from './components/Layout';
import Home from './pages/Home';
import Locations from './pages/Locations';
import Memberships from './pages/Memberships';
import Trainers from './pages/Trainers';
import FAQ from './pages/FAQ';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Booking from './pages/Booking';

const App = () => {
  const [activePage, setActivePage] = useState('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case 'home': return <Home onNavigate={setActivePage} />;
      case 'locations': return <Locations />;
      case 'memberships': return <Memberships onNavigate={setActivePage} />;
      case 'trainers': return <Trainers />;
      case 'faq': return <FAQ />;
      case 'careers': return <Careers />;
      case 'contact': return <Contact />;
      case 'booking': return <Booking />;
      default: return <Home onNavigate={setActivePage} />;
    }
  };

  return (
    <Layout activePage={activePage} onNavigate={setActivePage}>
      {renderPage()}
    </Layout>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
