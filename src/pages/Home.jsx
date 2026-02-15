import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import TrustSection from '../components/TrustSection';
import Newsletter from '../components/Newsletter';
import ProductRow from '../components/ProductRow';
import CategoryGrid from '../components/CategoryGrid'; 

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/products/')
      .then((response) => {
        // If the server throws an error (like 404 or 405), catch it immediately
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Safety check: Only set products if the data is actually an array
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error("Expected an array of products, but received:", data);
          setProducts([]); 
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching from database:", error);
        setProducts([]); // Fallback to an empty array so .filter() doesn't crash
        setLoading(false);
      });
  }, []);

  const getProductsByCategory = (catId) => {
    // This will now safely work even if products is an empty array
    return products.filter(p => p.category_id === catId).slice(0, 4); 
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <h2 className="text-2xl font-bold text-gray-500 animate-pulse">Loading your gear...</h2>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <Hero />
      
      <ProductRow 
           title="Best in Cardio" 
           categorySlug="cardio" 
           products={getProductsByCategory(1)} 
      />

      <CategoryGrid />

      <ProductRow 
           title="Strength Essentials" 
           categorySlug="strength" 
           products={getProductsByCategory(2)} 
      />

      <TrustSection />
      <Newsletter />
    </div>
  );
};

export default Home;