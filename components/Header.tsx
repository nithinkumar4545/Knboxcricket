
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-lime-400 rounded-lg flex items-center justify-center transform rotate-12">
              <span className="text-zinc-950 font-black text-xl -rotate-12">K</span>
            </div>
            <h1 className="text-2xl font-oswald font-bold tracking-tight text-white">
              KN<span className="text-lime-400">BOXCRICKET</span>
            </h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-400">
            <a href="#" className="hover:text-lime-400 transition-colors">Home</a>
            <a href="#boxes" className="hover:text-lime-400 transition-colors">Venues</a>
            <a href="#pricing" className="hover:text-lime-400 transition-colors">Pricing</a>
            <a href="#about" className="hover:text-lime-400 transition-colors">About Us</a>
            <button className="bg-lime-400 text-zinc-950 px-5 py-2 rounded-full font-bold hover:bg-lime-300 transition-all shadow-lg shadow-lime-500/20">
              Book Now
            </button>
          </nav>
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
