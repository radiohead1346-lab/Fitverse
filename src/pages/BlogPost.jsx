import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, User, Calendar, Clock } from 'lucide-react';
import { mockDB } from '../data/mockDB'; 

const BlogPost = () => {
  // FIXED: We now grab "blogId" because that matches your App.jsx route
  const { blogId } = useParams();

  // Scroll to top when opening a new blog post
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // FIXED: We use blogId here
  const blog = mockDB.blogs.find(b => b.id === parseInt(blogId));

  // Safety Check
  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4 pt-24">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
        <p className="text-gray-500 mb-8">This post seems to have been moved or deleted.</p>
        <Link to="/blog" className="text-brand-red font-bold flex items-center hover:underline">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Knowledge Base
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-20 pt-24">
      
      {/* Article Header */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 mb-10">
        <Link to="/blog" className="inline-flex items-center text-gray-500 hover:text-brand-red mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blogs
        </Link>
        
        <h1 className="text-3xl md:text-5xl font-extrabold text-brand-black mb-6 leading-tight">
          {blog.title}
        </h1>

        <div className="flex items-center space-x-6 text-sm text-gray-500 border-b border-gray-100 pb-8">
           <div className="flex items-center">
             <User className="w-4 h-4 mr-2 text-brand-red" />
             {blog.author}
           </div>
           <div className="flex items-center">
             <Calendar className="w-4 h-4 mr-2 text-brand-red" />
             {blog.date}
           </div>
           <div className="flex items-center">
             <Clock className="w-4 h-4 mr-2 text-brand-red" />
             5 min read
           </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-lg prose-red text-gray-700">
        <p className="lead text-xl text-gray-900 font-medium mb-8">
          {blog.snippet}
        </p>
        <div className="whitespace-pre-line">
          {blog.content}
        </div>
      </article>

    </div>
  );
};

export default BlogPost;