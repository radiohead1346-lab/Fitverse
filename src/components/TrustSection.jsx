import React from 'react';
import { Camera, ShieldCheck, Users, FileText } from 'lucide-react';

const TrustSection = () => {
  const trustItems = [
    {
      icon: <Camera className="w-8 h-8 text-brand-red" />,
      title: "Real Proof",
      desc: "We buy the gear. We photograph the unboxing. No stock photos."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-brand-red" />,
      title: "Unbiased",
      desc: "We don't accept free products in exchange for positive reviews."
    },
    {
      icon: <Users className="w-8 h-8 text-brand-red" />,
      title: "Expert Verified",
      desc: "Every article is reviewed by a certified personal trainer (CPT)."
    },
    {
      icon: <FileText className="w-8 h-8 text-brand-red" />,
      title: "Data Driven",
      desc: "Our specs come from manual measurements, not the manufacturer's website."
    }
  ];

  return (
    <div className="bg-brand-black py-20 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-3xl font-bold text-white mb-16">
          Why Trust <span className="text-brand-red">Fitverse?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {trustItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-zinc-900 p-4 rounded-full mb-6 border border-gray-800 shadow-lg shadow-brand-red/10">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default TrustSection;