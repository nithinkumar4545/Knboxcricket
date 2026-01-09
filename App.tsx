
import React, { useState } from 'react';
import Header from './components/Header';
import AIAssistant from './components/AIAssistant';
import BookingModal from './components/BookingModal';
import { BOXES } from './constants';
import { Box } from './types';

const App: React.FC = () => {
  const [selectedBox, setSelectedBox] = useState<Box | null>(null);

  return (
    <div className="min-h-screen selection:bg-lime-400 selection:text-zinc-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-40"
            alt="Cricket background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="inline-block py-1 px-3 bg-lime-400 text-zinc-950 text-xs font-black uppercase tracking-widest rounded mb-6 animate-bounce">
            Live Booking Available
          </span>
          <h1 className="text-6xl md:text-8xl font-oswald font-bold text-white mb-6 uppercase tracking-tighter leading-none">
            Rule the <span className="text-lime-400">Turf</span>.<br />Book Your <span className="underline decoration-lime-400/50">Box</span>.
          </h1>
          <p className="text-xl text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Experience the best box cricket environment in the city. High-quality turf, professional lighting, and seamless online booking at Knboxcricket.com.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#boxes" className="bg-lime-400 text-zinc-950 px-10 py-4 rounded-full font-bold text-lg hover:bg-lime-300 hover:scale-105 transition-all shadow-xl shadow-lime-400/10">
              Browse Venues
            </a>
            <button className="bg-zinc-800 text-white px-10 py-4 rounded-full font-bold text-lg border border-zinc-700 hover:bg-zinc-700 transition-all">
              Watch Experience
            </button>
          </div>
        </div>
      </section>

      {/* Featured Boxes */}
      <section id="boxes" className="py-24 bg-zinc-950 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-sm font-black text-lime-400 uppercase tracking-[0.2em] mb-3">Our Arenas</h2>
              <p className="text-4xl md:text-5xl font-oswald font-bold text-white uppercase italic">Choose Your Battleground</p>
            </div>
            <div className="hidden md:block">
              <p className="text-zinc-500 max-w-xs text-sm">Every pitch is meticulously maintained for peak performance.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {BOXES.map((box) => (
              <div key={box.id} className="group bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-lime-400/50 transition-all">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={box.imageUrl} 
                    alt={box.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-lime-400 text-zinc-950 px-3 py-1 rounded font-black text-sm">
                    ₹{box.pricePerHour}/hr
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-oswald font-bold text-white uppercase">{box.name}</h3>
                    <span className="text-xs text-zinc-500 font-bold uppercase py-1 px-2 border border-zinc-800 rounded">{box.capacity}</span>
                  </div>
                  <p className="text-zinc-400 text-sm mb-6 leading-relaxed h-10 overflow-hidden">
                    {box.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {box.amenities.slice(0, 3).map((amenity, i) => (
                      <span key={i} className="text-[10px] uppercase font-bold text-zinc-500 bg-zinc-800 px-2 py-1 rounded">
                        {amenity}
                      </span>
                    ))}
                  </div>
                  <button 
                    onClick={() => setSelectedBox(box)}
                    className="w-full bg-zinc-100 text-zinc-900 font-bold py-4 rounded-xl group-hover:bg-lime-400 transition-colors"
                  >
                    Select Box
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features/Stats Section */}
      <section className="py-20 bg-lime-400">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12">
          <div className="text-zinc-950 text-center">
            <h4 className="text-5xl font-black mb-2">5,000+</h4>
            <p className="text-sm font-bold uppercase tracking-widest opacity-70">Matches Played</p>
          </div>
          <div className="text-zinc-950 text-center">
            <h4 className="text-5xl font-black mb-2">15k+</h4>
            <p className="text-sm font-bold uppercase tracking-widest opacity-70">Happy Players</p>
          </div>
          <div className="text-zinc-950 text-center">
            <h4 className="text-5xl font-black mb-2">24/7</h4>
            <p className="text-sm font-bold uppercase tracking-widest opacity-70">Booking Support</p>
          </div>
          <div className="text-zinc-950 text-center">
            <h4 className="text-5xl font-black mb-2">4.8★</h4>
            <p className="text-sm font-bold uppercase tracking-widest opacity-70">Player Rating</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 py-20 border-t border-zinc-900 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-lime-400 rounded-lg flex items-center justify-center transform rotate-12">
                  <span className="text-zinc-950 font-black text-xl -rotate-12">K</span>
                </div>
                <h1 className="text-3xl font-oswald font-bold tracking-tight text-white uppercase">
                  KN<span className="text-lime-400">BOXCRICKET</span>
                </h1>
              </div>
              <p className="text-zinc-500 max-w-md leading-relaxed">
                Elevating the game of box cricket through technology and premium facilities. Join the community and book your next match in seconds.
              </p>
            </div>
            <div>
              <h5 className="text-white font-bold mb-6">Quick Links</h5>
              <ul className="space-y-4 text-zinc-500 text-sm">
                <li><a href="#" className="hover:text-lime-400">Browse Venues</a></li>
                <li><a href="#" className="hover:text-lime-400">Membership Plans</a></li>
                <li><a href="#" className="hover:text-lime-400">Rules & Regulations</a></li>
                <li><a href="#" className="hover:text-lime-400">Partner with Us</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-6">Contact</h5>
              <ul className="space-y-4 text-zinc-500 text-sm">
                <li>Email: hello@knboxcricket.com</li>
                <li>Phone: +91 800 123 4567</li>
                <li>Central Sports Hub, City Center, IN</li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-zinc-600 text-xs">© 2024 Knboxcricket.com. All Rights Reserved. Built with ❤️ for Cricket Fans.</p>
            <div className="flex gap-6">
              <a href="#" className="text-zinc-500 hover:text-white transition-colors">Instagram</a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors">Facebook</a>
            </div>
          </div>
        </div>
      </footer>

      <AIAssistant />
      <BookingModal box={selectedBox} onClose={() => setSelectedBox(null)} />
    </div>
  );
};

export default App;
