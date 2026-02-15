import React, { useEffect } from 'react';
import { Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-brand-black mb-4">Get In Touch</h1>
          <p className="text-gray-500">Have a question about gear? Found a bug? Just want to say hi?</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-brand-red/10 p-3 rounded-lg mr-4 text-brand-red">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Email Us</h3>
                <p className="text-gray-500 mb-1">For general inquiries and partnerships:</p>
                <a href="mailto:support@fitverse.com" className="text-brand-red font-bold hover:underline">
                  support@fitverse.com
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-brand-red/10 p-3 rounded-lg mr-4 text-brand-red">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Location</h3>
                <p className="text-gray-500">
                  Lahore, Pakistan<br />
                  (Operating Remotely Worldwide)
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-brand-red/10 p-3 rounded-lg mr-4 text-brand-red">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Response Time</h3>
                <p className="text-gray-500">
                  We try to respond to all emails within 24-48 hours, Monday through Friday.
                </p>
              </div>
            </div>
          </div>

          {/* Simple Form (Visual Only) */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-red" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-red" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea rows="4" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-red" placeholder="How can we help?"></textarea>
              </div>
              <button className="w-full bg-brand-black text-white font-bold py-3 rounded-lg hover:bg-brand-red transition-colors">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;