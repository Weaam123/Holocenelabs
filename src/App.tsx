import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Stats } from './components/Stats';
import { Programs } from './components/Programs';
import { Community } from './components/Community';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Login } from './components/auth/Login';
import { Marketplace } from './components/marketplace/Marketplace';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <Login />;
      case 'marketplace':
        return <Marketplace />;
      default:
        return (
          <>
            <Hero />
            <Features />
            <Stats />
            <Programs />
            <Community />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100">
      <nav className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => setCurrentPage('home')}
              className="text-xl font-bold text-emerald-800"
            >
              Holocene Herbs
            </button>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setCurrentPage('marketplace')}
                className="text-gray-600 hover:text-emerald-600 transition-colors"
              >
                Marketplace
              </button>
              <button 
                onClick={() => setCurrentPage('login')}
                className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;