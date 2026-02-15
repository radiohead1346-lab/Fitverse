import React from 'react';
import { ArrowRight, BarChart2 } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-[85vh] w-full bg-brand-black overflow-hidden">
      
      {/* 1. Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          alt="Dark Gym Background" 
          className="w-full h-full object-cover opacity-60"
        />
        {/* Gradient Fade at bottom to blend into the next section */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent"></div>
      </div>

      {/* 2. Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          
          {/* Tagline */}
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-brand-red/30 bg-brand-red/10 text-brand-red mb-6 backdrop-blur-sm">
            <span className="text-xs font-bold tracking-widest uppercase">Trust-First Fitness</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            BUILD YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">DREAM GYM</span> <br />
            WITH <span className="text-brand-red">UNBIASED DATA.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
            Stop guessing. We test high-ticket home gym equipment with real-world metrics, so you invest in gear that lasts a lifetime.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded font-bold transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-brand-red/25">
              FIND YOUR GEAR
              <ArrowRight className="w-5 h-5" />
            </button>
            
          </div>

        </div>
      </div>

      {/* 3. Decorative 'Scroll Down' indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
           <div className="w-1 h-3 bg-brand-red rounded-full"></div>
        </div>
      </div>

    </div>
  );
};

export default Hero;