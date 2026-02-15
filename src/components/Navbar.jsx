import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Search, User, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      console.log('Searching for:', e.target.value);
    }
  };

  return (
    <nav className="bg-brand-black text-white sticky top-0 z-50 border-b border-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* 1. LOGO */}
          <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
            <span className="text-2xl font-black tracking-tighter uppercase">
              FIT<span className="text-brand-red">VERSE</span>
            </span>
          </Link>

          {/* 2. DESKTOP NAVIGATION - CENTERED */}
          {/* 'flex-1 justify-center' pushes this section to the middle */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-brand-red transition-colors">Home</Link>
            
            {/* Categories Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setShowCatMenu(true)}
              onMouseLeave={() => setShowCatMenu(false)}
            >
              <button 
                className="flex items-center text-sm font-medium hover:text-brand-red transition-colors focus:outline-none"
              >
                Categories <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {/* Dropdown Menu - Includes ALL 6 Categories */}
              <div className={`absolute top-full left-1/2 transform -translate-x-1/2 w-56 bg-white text-gray-800 rounded-lg shadow-xl py-2 mt-2 transition-all duration-200 origin-top ${showCatMenu ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'}`}>
                <div className="absolute -top-2 left-0 w-full h-2 bg-transparent"></div> {/* Bridge to prevent closing */}
                
                <Link to="/category/cardio" className="block px-4 py-2 hover:bg-gray-100 hover:text-brand-red text-sm">Cardio Machines</Link>
                <Link to="/category/strength" className="block px-4 py-2 hover:bg-gray-100 hover:text-brand-red text-sm">Strength Training</Link>
                <Link to="/category/free-weights" className="block px-4 py-2 hover:bg-gray-100 hover:text-brand-red text-sm">Free Weights</Link>
                <Link to="/category/functional" className="block px-4 py-2 hover:bg-gray-100 hover:text-brand-red text-sm">Functional Fitness</Link>
                <Link to="/category/flooring" className="block px-4 py-2 hover:bg-gray-100 hover:text-brand-red text-sm">Mats & Flooring</Link>
                <Link to="/category/wearables" className="block px-4 py-2 hover:bg-gray-100 hover:text-brand-red text-sm">Apparel & Wearables</Link>
              </div>
            </div>

            <Link to="/blog" className="text-sm font-medium hover:text-brand-red transition-colors">Blogs</Link>
            <Link to="/about" className="text-sm font-medium hover:text-brand-red transition-colors">About</Link>
            <Link to="/policies" className="text-sm font-medium hover:text-brand-red transition-colors">Policies</Link>
            <Link to="/contact" className="text-sm font-medium hover:text-brand-red transition-colors">Contact</Link>
          </div>

          {/* 3. SEARCH BAR & USER ICON */}
          <div className="hidden md:flex items-center gap-6 flex-shrink-0">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search gear..." 
                onKeyDown={handleSearch}
                className="bg-gray-900 border border-gray-700 text-sm rounded-full py-2 px-4 pl-10 w-48 focus:outline-none focus:border-brand-red focus:w-64 transition-all duration-300 placeholder-gray-500"
              />
              <Search className="w-4 h-4 text-gray-500 absolute left-3.5 top-2.5" />
            </div>
            
            <button className="hover:text-brand-red transition-colors">
              <User className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-brand-red p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-brand-black border-t border-gray-800 shadow-xl py-4 px-4 flex flex-col space-y-4">
          <Link to="/" className="text-lg font-medium hover:text-brand-red" onClick={() => setIsOpen(false)}>Home</Link>
          <div className="text-lg font-medium text-gray-400 pl-2">Categories:</div>
          <div className="pl-4 grid grid-cols-2 gap-2">
             <Link to="/category/cardio" className="text-sm text-gray-300 hover:text-brand-red" onClick={() => setIsOpen(false)}>Cardio</Link>
             <Link to="/category/strength" className="text-sm text-gray-300 hover:text-brand-red" onClick={() => setIsOpen(false)}>Strength</Link>
             <Link to="/category/free-weights" className="text-sm text-gray-300 hover:text-brand-red" onClick={() => setIsOpen(false)}>Free Weights</Link>
             <Link to="/category/functional" className="text-sm text-gray-300 hover:text-brand-red" onClick={() => setIsOpen(false)}>Functional</Link>
             <Link to="/category/flooring" className="text-sm text-gray-300 hover:text-brand-red" onClick={() => setIsOpen(false)}>Flooring</Link>
             <Link to="/category/wearables" className="text-sm text-gray-300 hover:text-brand-red" onClick={() => setIsOpen(false)}>Wearables</Link>
          </div>
          <Link to="/blog" className="text-lg font-medium hover:text-brand-red" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link to="/about" className="text-lg font-medium hover:text-brand-red" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/policies" className="text-lg font-medium hover:text-brand-red" onClick={() => setIsOpen(false)}>Policies</Link>
          <Link to="/contact" className="text-lg font-medium hover:text-brand-red" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;