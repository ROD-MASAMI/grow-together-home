
import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white" id="why-choose-us">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <div className="w-24 h-1 bg-agrogreen-500 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            We pride ourselves on our commitment to quality, sustainability, and customer satisfaction.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="flex flex-col md:flex-row items-start gap-4">
            <div className="p-3 bg-agrogreen-100 rounded-full mb-2 md:mb-0">
              <span className="text-xl font-bold text-agrogreen-700">1</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Organic Practices</h3>
              <p className="text-gray-600">
                We use only natural fertilizers and pest management techniques to ensure our products are 100% organic and chemical-free.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-start gap-4">
            <div className="p-3 bg-agrogreen-100 rounded-full mb-2 md:mb-0">
              <span className="text-xl font-bold text-agrogreen-700">2</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Locally Sourced</h3>
              <p className="text-gray-600">
                All our products come directly from our local farms, reducing carbon footprint and supporting the local economy.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-start gap-4">
            <div className="p-3 bg-agrogreen-100 rounded-full mb-2 md:mb-0">
              <span className="text-xl font-bold text-agrogreen-700">3</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Innovative Technology</h3>
              <p className="text-gray-600">
                We use advanced farming technologies including precision agriculture and smart irrigation systems.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-start gap-4">
            <div className="p-3 bg-agrogreen-100 rounded-full mb-2 md:mb-0">
              <span className="text-xl font-bold text-agrogreen-700">4</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Sustainable Practices</h3>
              <p className="text-gray-600">
                Our farming methods focus on sustainability, soil health, and biodiversity to ensure long-term environmental health.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-agrogreen-50 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl">
              <h3 className="text-2xl font-semibold text-agrogreen-800 mb-4">Ready to experience the difference?</h3>
              <p className="text-gray-700">
                Join the growing number of families and businesses that trust us for their agricultural needs.
              </p>
            </div>
            <button className="bg-agrogreen-600 hover:bg-agrogreen-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
