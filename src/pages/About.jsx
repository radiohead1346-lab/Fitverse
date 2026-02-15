import React, { useEffect } from 'react';
import { ShieldCheck, Users, Search, Heart } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-brand-black mb-6 tracking-tight">
          WE ARE <span className="text-brand-red">FITVERSE</span>
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
          We believe home gyms shouldn't be complicated. Our mission is to test, analyze, and review the best gear so you can focus on training.
        </p>
      </div>

      {/* The Values Grid */}
      <div className="bg-gray-50 py-16 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-brand-red">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">Unbiased Reviews</h3>
              <p className="text-gray-500 text-sm">
                We don't accept payments for positive reviews. Our scores are based on performance, durability, and value.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-brand-red">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">Data Driven</h3>
              <p className="text-gray-500 text-sm">
                We analyze specs, warranty terms, and real user feedback to give you the full picture before you buy.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-brand-red">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">Built for You</h3>
              <p className="text-gray-500 text-sm">
                Whether you have a garage gym or a small apartment corner, we find gear that fits your specific space.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-6 text-brand-black">Our Story</h2>
        <div className="prose prose-lg text-gray-700">
          <p>
            Fitverse started with a simple frustration: trying to buy a squat rack online is a nightmare. There are thousands of options, confusing specs, and fake reviews everywhere.
          </p>
          <p>
            We decided to build the resource we wish we had. A clean, honest, data-forward platform that cuts through the marketing hype and tells you exactly what you need to know.
          </p>
          <p>
            Today, we are a small team of fitness enthusiasts, data nerds, and garage gym owners dedicated to helping you build your dream setup.
          </p>
        </div>
      </div>

    </div>
  );
};

export default About;