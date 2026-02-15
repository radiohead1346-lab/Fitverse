import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { mockDB } from '../data/mockDB'; // <-- THIS WAS MISSING!

const BlogList = () => {
  return (
    <div className="bg-white min-h-screen py-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Header / Search Bar Simulation */}
        <div className="mb-10 border-b border-gray-200 pb-6">
           <h1 className="text-3xl font-bold text-brand-black mb-2">Fitverse Knowledge Base</h1>
           <div className="relative">
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full border border-gray-300 rounded-full py-3 px-5 pl-12 text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-red/50 shadow-sm"
              />
              <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
           </div>
           <p className="text-gray-500 text-sm mt-3">
             About {mockDB.blogs.length} results (0.42 seconds)
           </p>
        </div>

        {/* The "Google Style" Results List */}
        <div className="space-y-10">
          {mockDB.blogs.map((blog) => (
            <div key={blog.id} className="group">
              
              {/* URL / Breadcrumb Look */}
              <div className="flex items-center text-sm text-gray-600 mb-1">
                 <span className="font-medium text-brand-black">Fitverse.com</span>
                 <span className="mx-1">›</span>
                 <span>blog</span>
                 <span className="mx-1">›</span>
                 <span>{blog.slug}</span>
              </div>

              {/* Clickable Title */}
              <Link to={`/blog/${blog.id}`} className="block">
                <h2 className="text-xl text-blue-800 font-medium group-hover:underline mb-1 visited:text-purple-900">
                  {blog.title}
                </h2>
              </Link>

              {/* Meta Data */}
              <div className="text-xs text-gray-400 mb-2">
                 {blog.date} — By {blog.author}
              </div>

              {/* Snippet */}
              <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
                {blog.snippet}
              </p>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default BlogList;