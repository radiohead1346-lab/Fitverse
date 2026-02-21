import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Check, ShieldCheck, ArrowLeft, ShoppingCart } from 'lucide-react';

const ProductPage = () => {
  const { productId } = useParams();
  
  // 1. Set up state for our single product and loading status
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // 2. Fetch the specific product from FastAPI
  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
    setLoading(true);

    fetch(`${import.meta.env.VITE_API_URL}/products/${productId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Product not found');
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setProduct(null); // Triggers the "Not Found" UI
        setLoading(false);
      });
  }, [productId]);

  // --- UI RENDERING ---

  if (loading) {
    return (
      <div className="min-h-screen pt-32 text-center pb-20 bg-white">
        <h2 className="text-2xl font-bold text-gray-500 animate-pulse">Loading product details...</h2>
      </div>
    );
  }

  // If product not found (e.g. invalid URL or error), show error
  if (!product) {
    return (
      <div className="min-h-screen pt-32 text-center pb-20 bg-white">
        <h2 className="text-3xl font-bold mb-4 text-brand-black">Product Not Found</h2>
        <p className="text-gray-500 mb-8">We couldn't locate this item in our inventory.</p>
        <Link to="/" className="text-brand-red font-bold hover:underline inline-flex items-center">
          <ArrowLeft className="w-4 h-4 mr-2" /> Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-20">
      
      {/* Breadcrumb / Back Button */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
           {/* Using window.history.back() is often better here so it goes back to the Category if they came from there! */}
           <button onClick={() => window.history.back()} className="inline-flex items-center text-sm text-gray-500 hover:text-brand-red transition-colors">
             <ArrowLeft className="w-4 h-4 mr-1" /> Back
           </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* LEFT COLUMN: Image */}
          <div className="space-y-6">
             <div className="aspect-square bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 flex items-center justify-center p-8">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain mix-blend-multiply hover:scale-105 transition-transform duration-500"
                />
             </div>
             {/* Trust Badge below image */}
             <div className="flex items-center justify-center gap-2 text-sm text-green-700 bg-green-50 py-2 rounded-lg border border-green-100">
                <ShieldCheck className="w-5 h-5" />
                <span className="font-semibold">Verified by Fitverse Experts</span>
             </div>
          </div>

          {/* RIGHT COLUMN: Details */}
          <div>
             <h1 className="text-3xl md:text-4xl font-bold text-brand-black mb-4 leading-tight">
               {product.name}
             </h1>

             {/* Rating & Reviews */}
             <div className="flex items-center mb-6">
                <div className="flex text-yellow-400 mr-2">
                   {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} />
                   ))}
                </div>
                <span className="text-gray-500 font-medium">({product.rating} / 5.0)</span>
             </div>

             {/* Description (Now dynamically pulled from your database!) */}
             <p className="text-gray-600 text-lg leading-relaxed mb-8">
               {product.description}
             </p>

             {/* Key Features List */}
             <div className="mb-10">
               <h3 className="font-bold text-brand-black mb-3 uppercase tracking-wider text-sm">Key Features</h3>
               <ul className="space-y-3">
                 {product.features && product.features.map((feature, idx) => (
                   <li key={idx} className="flex items-start">
                     <div className="mt-1 bg-brand-red/10 p-1 rounded-full mr-3 shrink-0">
                        <Check className="w-3 h-3 text-brand-red" />
                     </div>
                     <span className="text-gray-700">{feature}</span>
                   </li>
                 ))}
               </ul>
             </div>

             {/* Action Buttons */}
             <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                   <span className="text-gray-500 font-medium">Current Availability:</span>
                   <span className="text-green-600 font-bold bg-green-100 px-3 py-1 rounded-full text-xs uppercase">In Stock</span>
                </div>
                
                <a 
                  href={product.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-brand-black hover:bg-brand-red text-white text-center font-bold text-lg py-4 rounded-lg transition-all shadow-lg hover:shadow-brand-red/25 flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" /> {product.price_label} on Amazon
                </a>
                
                <p className="text-xs text-center text-gray-400 mt-3">
                  Secure transaction via Amazon.com. As an Amazon Associate, we earn from qualifying purchases.
                </p>
             </div>

          </div>
        </div>

        {/* REVIEWS SECTION */}
        <div className="mt-20 border-t border-gray-200 pt-16">
           <h2 className="text-2xl font-bold mb-8">Customer Reviews</h2>
           
           <div className="grid md:grid-cols-2 gap-8">
              {/* Mock Review 1 */}
              <div className="bg-gray-50 p-6 rounded-xl">
                 <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center font-bold text-white mr-3">JD</div>
                    <div>
                       <h4 className="font-bold text-brand-black">John D.</h4>
                       <div className="flex text-yellow-400 text-xs">★★★★★</div>
                    </div>
                 </div>
                 <p className="text-gray-600 text-sm">"Honestly the best investment for my garage gym. Solid build quality and arrived faster than expected."</p>
              </div>

              {/* Mock Review 2 */}
              <div className="bg-gray-50 p-6 rounded-xl">
                 <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center font-bold text-white mr-3">SM</div>
                    <div>
                       <h4 className="font-bold text-brand-black">Sarah M.</h4>
                       <div className="flex text-yellow-400 text-xs">★★★★☆</div>
                    </div>
                 </div>
                 <p className="text-gray-600 text-sm">"Great product, but the assembly took a bit longer than the manual suggested. Otherwise perfect."</p>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default ProductPage;