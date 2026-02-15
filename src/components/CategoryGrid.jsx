import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Dumbbell,  Package, Zap, Layers, Watch } from 'lucide-react'; // Icons

const categories = [
  { name: "Cardio", icon: <Activity />, path: "/category/cardio", color: "bg-blue-500" },
  { name: "Strength", icon: <Dumbbell />, path: "/category/strength", color: "bg-brand-red" },
  { name: "Weights", icon: <Package />, path: "/category/free-weights", color: "bg-gray-500" },
  { name: "Functional", icon: <Zap />, path: "/category/functional", color: "bg-yellow-500" },
  { name: "Flooring", icon: <Layers />, path: "/category/flooring", color: "bg-green-500" },
  { name: "Wearables", icon: <Watch />, path: "/category/wearables", color: "bg-purple-500" },
];

const CategoryGrid = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-10 text-brand-black">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <Link key={cat.name} to={cat.path} className="group flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
              <div className={`p-4 rounded-full text-white mb-3 ${cat.color} group-hover:scale-110 transition-transform`}>
                {React.cloneElement(cat.icon, { className: "w-6 h-6" })}
              </div>
              <span className="font-bold text-gray-700 group-hover:text-brand-black">{cat.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryGrid;