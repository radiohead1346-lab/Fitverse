import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Check, ShieldCheck, ArrowRight, Eye } from 'lucide-react';

const ProductRow = ({ title, categorySlug, products }) => {
  if (!products || products.length === 0) return null;

  return (
    <div className="py-16 border-b border-gray-100 last:border-0 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Row Header */}
        <div className="flex justify-between items-end mb-8">
          <div>
             <h2 className="text-3xl font-bold text-brand-black tracking-tight">{title}</h2>
             <div className="h-1 w-20 bg-brand-red mt-2 rounded-full"></div>
          </div>
          
          <Link 
            to={`/category/${categorySlug}`} 
            className="hidden md:flex items-center text-gray-500 font-medium hover:text-brand-red transition-colors text-sm group"
          >
            See all {title} <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* The Premium Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-white border border-gray-200 rounded-2xl flex flex-col hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              
              {/* Image Container */}
              <div className="relative h-64 bg-gray-50 overflow-hidden p-4">
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                   <img 
                    src={product.image} 
                    alt={product.name}
                    className="h-full w-full object-contain mix-blend-multiply filter group-hover:scale-105 transition-transform duration-500"
                   />
                </div>
                
                {/* Badge Overlay (Optional) */}
                {product.rating >= 4.8 && (
                  <div className="absolute top-4 left-4 bg-brand-red text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-full shadow-md z-10">
                    Top Rated
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                       Verified Review
                    </span>
                    <div className="flex items-center gap-1 bg-green-50 px-2 py-0.5 rounded text-xs font-bold text-green-700">
                        <ShieldCheck className="w-3 h-3" /> Safe
                    </div>
                </div>

                <h3 className="font-bold text-brand-black text-lg leading-snug mb-3 min-h-[3.5rem] group-hover:text-brand-red transition-colors line-clamp-2">
                  {product.name}
                </h3>
                
                {/* Rating Row */}
                <div className="flex items-center mb-6 space-x-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 font-medium">({product.rating})</span>
                </div>

                {/* Features List (Restored!) */}
                <div className="space-y-2 mb-8 flex-1">
                  {product.features && product.features.slice(0, 2).map((feat, i) => ( // Show first 2 features
                    <div key={i} className="flex items-start text-xs text-gray-600">
                      <Check className="w-3.5 h-3.5 mr-2 text-brand-red flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Call to Action Button */}
                <Link 
                  to={`/product/${product.id}`}
                  className="mt-auto block w-full bg-white border-2 border-brand-black text-brand-black text-center font-bold py-3 rounded-xl hover:bg-brand-black hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg"
                >
                  <Eye className="w-4 h-4" /> View Details
                </Link>

              </div>
            </div>
          ))}
        </div>

        {/* Mobile "See All" Link */}
        <div className="mt-8 text-center md:hidden">
            <Link 
            to={`/category/${categorySlug}`} 
            className="inline-flex items-center text-brand-red font-bold text-sm"
          >
            See all {title} <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ProductRow;