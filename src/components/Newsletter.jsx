import React from 'react';
import { Send } from 'lucide-react';

const Newsletter = () => {
  return (
    <div className="bg-brand-red py-20 relative overflow-hidden">
      
      {/* Background Pattern Overlay (Optional for texture) */}
      <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="black" />
          </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Join the Fitverse.
        </h2>
        <p className="text-red-100 mb-8 text-lg">
          Get weekly gym hacks, price drop alerts, and our exclusive PDF: <br/>
          <span className="font-bold text-white underline">"The 10 Essentials for a $500 Home Gym"</span>
        </p>

        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="flex-1 px-6 py-4 rounded-full text-brand-black focus:outline-none focus:ring-4 focus:ring-black/20 font-medium"
          />
          <button className="bg-brand-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-900 transition-colors flex items-center justify-center gap-2">
            SUBSCRIBE <Send className="w-4 h-4" />
          </button>
        </form>

        <p className="text-xs text-red-200 mt-6">
          No spam. Unsubscribe anytime.
        </p>

      </div>
    </div>
  );
};

export default Newsletter;