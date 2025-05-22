
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero-image w-full h-[600px] relative flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Sustainable Farming for a Better Tomorrow
          </h1>
          <p className="text-xl text-white/90 mb-8">
            We combine traditional farming wisdom with modern technology to grow healthier crops while preserving our environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/services" 
              className="bg-agrogreen-600 hover:bg-agrogreen-700 text-white font-medium py-3 px-6 rounded-md inline-flex items-center transition-colors"
            >
              Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/contact" 
              className="bg-white hover:bg-gray-100 text-agrogreen-700 font-medium py-3 px-6 rounded-md inline-flex items-center transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
