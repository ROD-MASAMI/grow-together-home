
import React from 'react';
import { Leaf, Tractor, Wheat } from 'lucide-react';

const AboutUs = () => {
  return (
    <section className="py-16 bg-gray-50" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
          <div className="w-24 h-1 bg-agrogreen-500 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            At GreenAcres, we're dedicated to sustainable agriculture practices that respect the land
            and provide healthy, nutritious food for our community.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="p-3 bg-agrogreen-100 rounded-full inline-block mb-4">
              <Leaf className="h-8 w-8 text-agrogreen-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Sustainable Farming</h3>
            <p className="text-gray-600">
              We implement sustainable farming practices that minimize environmental impact while maximizing crop yields.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="p-3 bg-agrogreen-100 rounded-full inline-block mb-4">
              <Tractor className="h-8 w-8 text-agrogreen-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Modern Technology</h3>
            <p className="text-gray-600">
              We utilize cutting-edge agricultural technology to optimize resource usage and improve production efficiency.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="p-3 bg-agrogreen-100 rounded-full inline-block mb-4">
              <Wheat className="h-8 w-8 text-agrogreen-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Quality Products</h3>
            <p className="text-gray-600">
              Our commitment to quality ensures that all our agricultural products meet the highest standards.
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            With over 20 years of experience in the agricultural industry, we have developed innovative farming
            techniques that produce abundant harvests while preserving the environment for future generations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
