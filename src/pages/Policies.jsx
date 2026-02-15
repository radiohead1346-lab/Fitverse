import React, { useEffect } from 'react';

const Policies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h1 className="text-4xl font-bold text-brand-black mb-4">Legal Policies & Disclaimers</h1>
        <p className="text-gray-500 mb-12">Last Updated: February 2026</p>

        <div className="space-y-12">
          
          {/* 1. Affiliate Disclosure (CRITICAL FOR AMAZON) */}
          <section id="affiliate" className="border-b border-gray-200 pb-10">
            <h2 className="text-2xl font-bold text-brand-black mb-4 flex items-center">
              <span className="bg-brand-red w-2 h-8 mr-3 rounded-full"></span>
              Affiliate Disclosure
            </h2>
            <div className="prose prose-gray text-gray-700">
              <p className="mb-4">
                Fitverse is a participant in the <strong>Amazon Services LLC Associates Program</strong>, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
              </p>
              <p>
                As an Amazon Associate, we earn from qualifying purchases. This means that if you click on a link to a product on this website and make a purchase, we may receive a small commission at no extra cost to you. This helps support our testing process and allows us to keep our content free.
              </p>
            </div>
          </section>

          {/* 2. Medical Disclaimer (CRITICAL FOR FITNESS) */}
          <section id="medical" className="border-b border-gray-200 pb-10">
            <h2 className="text-2xl font-bold text-brand-black mb-4 flex items-center">
              <span className="bg-brand-red w-2 h-8 mr-3 rounded-full"></span>
              Medical Disclaimer
            </h2>
            <div className="prose prose-gray text-gray-700">
              <p className="mb-4">
                The content provided on Fitverse, including text, graphics, images, and other material, is for informational purposes only. It is <strong>not intended to be a substitute for professional medical advice</strong>, diagnosis, or treatment.
              </p>
              <p>
                Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition or before starting a new fitness regime. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.
              </p>
            </div>
          </section>

          {/* 3. Privacy Policy */}
          <section id="privacy" className="border-b border-gray-200 pb-10">
            <h2 className="text-2xl font-bold text-brand-black mb-4 flex items-center">
              <span className="bg-brand-red w-2 h-8 mr-3 rounded-full"></span>
              Privacy Policy
            </h2>
            <div className="prose prose-gray text-gray-700">
              <h3 className="font-bold text-lg mb-2">Information Collection</h3>
              <p className="mb-4">
                We may collect non-personal information about your visit, such as the pages you viewed and the links you clicked. We use this information to analyze trends and improve the user experience.
              </p>
              <h3 className="font-bold text-lg mb-2">Cookies</h3>
              <p>
                We use cookies to store your preferences and settings. You can control the use of cookies at the individual browser level. If you reject cookies, you may still use our site, but your ability to use some features may be limited.
              </p>
            </div>
          </section>

          {/* 4. Terms of Use */}
          <section id="terms">
            <h2 className="text-2xl font-bold text-brand-black mb-4 flex items-center">
              <span className="bg-brand-red w-2 h-8 mr-3 rounded-full"></span>
              Terms of Use
            </h2>
            <div className="prose prose-gray text-gray-700">
              <p className="mb-4">
                By accessing this website, you agree to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
              </p>
              <p>
                Fitverse reserves the right to revise these terms of use for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms and Conditions of Use.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Policies;