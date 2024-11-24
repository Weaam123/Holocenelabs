import React from 'react';
import { Leaf, Play } from 'lucide-react';

export function Hero() {
  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-20"
        >
          <source src="https://player.vimeo.com/external/517090081.hd.mp4?s=60c145c038b6c0ac2b8e2658c548f2fdf4e02c5c&profile_id=175" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/40 to-emerald-950/40" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <Leaf className="w-12 h-12 text-emerald-400" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Holocene Herbs
        </h1>
        <p className="text-xl md:text-2xl text-emerald-50 mb-8">
          Bridging traditional African herbal wisdom with blockchain technology
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-emerald-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-colors">
            Join the Ecosystem
          </button>
          <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white/20 transition-colors flex items-center justify-center gap-2">
            <Play className="w-5 h-5" /> Watch Demo
          </button>
        </div>
      </div>
    </header>
  );
}