import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Youtube, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-black text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand */}
          <div>
            <Link to="/" className="text-2xl font-black tracking-tighter text-white uppercase mb-6 block">
              FIT<span className="text-brand-red">VERSE</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              The only fitness review site backed by data, not hype. We test gear so you can train without regrets.
            </p>
            <div className="text-gray-500 text-xs">
              &copy; {new Date().getFullYear()} Fitverse Inc. All rights reserved.
            </div>
          </div>

          {/* Column 2: Gear (Updated to match your actual Categories) */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">Top Gear</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/category/cardio" className="text-gray-300 hover:text-brand-red transition-colors text-sm">
                  Cardio Machines
                </Link>
              </li>
              <li>
                <Link to="/category/strength" className="text-gray-300 hover:text-brand-red transition-colors text-sm">
                  Strength Training
                </Link>
              </li>
              <li>
                <Link to="/category/free-weights" className="text-gray-300 hover:text-brand-red transition-colors text-sm">
                  Free Weights
                </Link>
              </li>
              <li>
                <Link to="/category/wearables" className="text-gray-300 hover:text-brand-red transition-colors text-sm">
                  Apparel & Wearables
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company (Updated to link to Policies & Blog) */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-brand-red transition-colors text-sm">
                  Latest Articles
                </Link>
              </li>
              <li>
                <Link to="/policies" className="text-gray-300 hover:text-brand-red transition-colors text-sm">
                  Legal & Policies
                </Link>
              </li>
              <li>
                {/* Mailto link is safer than a dead contact page for now */}
                <a href="mailto:support@fitverse.com" className="text-gray-300 hover:text-brand-red transition-colors text-sm">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-red transition-colors text-white group">
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-red transition-colors text-white group">
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-red transition-colors text-white group">
                <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-red transition-colors text-white group">
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

        </div>

        {/* Affiliate Disclaimer Row */}
        <div className="border-t border-gray-800 pt-8 text-center md:text-right">
           <p className="text-xs text-gray-600 max-w-2xl ml-auto">
             <strong>Affiliate Disclaimer:</strong> Fitverse is a participant in the Amazon Services LLC Associates Program. We may earn a commission when you buy through our links.
           </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;