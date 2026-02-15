import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Check, ShieldCheck, Eye, ArrowLeft } from 'lucide-react';

const CategoryPage = () => {
  const { slug } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // FIXED #3: Added 'wearables' to the map so it perfectly matches your homepage link
  const categoryMap = {
    'cardio': { id: 1, title: 'Cardio Machines' },
    'strength': { id: 2, title: 'Strength Essentials' },
    'free-weights': { id: 3, title: 'Free Weights' },
    'functional': { id: 4, title: 'Functional Fitness' },
    'flooring': { id: 5, title: 'Mats & Flooring' },
    'apparel': { id: 6, title: 'Apparel & Wearables' },
    'wearables': { id: 6, title: 'Apparel & Wearables' } 
  };

  const currentCategory = categoryMap[slug];

  useEffect(() => {
    // FIXED #1: Automatically scroll to the very top of the page whenever the URL changes
    window.scrollTo(0, 0);

    if (!currentCategory) {
      setLoading(false);
      return;
    }

    setLoading(true);
    fetch('http://localhost:8000/products/')
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          const categoryProducts = data.filter(p => p.category_id === currentCategory.id);
          setProducts(categoryProducts);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching category products:", error);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-gray-50 pt-20">
        <h2 className="text-2xl font-bold text-gray-500 animate-pulse">Loading {currentCategory?.title}...</h2>
      </div>
    );
  }

  if (!currentCategory) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gray-50 text-center px-4 pt-20">
        <h1 className="text-4xl font-bold text-brand-black mb-4">Category Not Found</h1>
        <p className="text-gray-500 mb-8">We couldn't find the gear you're looking for.</p>
        <Link to="/" className="text-brand-red font-bold flex items-center hover:underline">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* FIXED #2: Added a clean Back to Home button at the top left */}
        <Link 
          to="/" 
          className="inline-flex items-center text-gray-500 hover:text-brand-red font-medium mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-black tracking-tight mb-4">
            {currentCategory.title}
          </h1>
          <div className="h-1 w-24 bg-brand-red mx-auto rounded-full mb-4"></div>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Browse our top-rated, hand-picked {currentCategory.title.toLowerCase()} to level up your home gym.
          </p>
        </div>

        {/* Product Grid */}
        {products.length === 0 ? (
          <div className="text-center py-12 text-gray-500">No products found in this category yet.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group relative bg-white border border-gray-200 rounded-2xl flex flex-col hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                
                <div className="relative h-64 bg-gray-50 overflow-hidden p-4">
                  <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="h-full w-full object-contain mix-blend-multiply filter group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {product.rating >= 4.8 && (
                    <div className="absolute top-4 left-4 bg-brand-red text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-full shadow-md z-10">
                      Top Rated
                    </div>
                  )}
                </div>

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
                  
                  <div className="flex items-center mb-6 space-x-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 font-medium">({product.rating})</span>
                  </div>

                  <div className="space-y-2 mb-8 flex-1">
                    {product.features && product.features.slice(0, 2).map((feat, i) => (
                      <div key={i} className="flex items-start text-xs text-gray-600">
                        <Check className="w-3.5 h-3.5 mr-2 text-brand-red flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>

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
        )}
      </div>
    </div>
  );
};

export default CategoryPage;