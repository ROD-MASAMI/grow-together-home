
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero-image w-full min-h-screen relative flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Fresh from Local Farms to 
            <span className="text-agrogreen-400"> Your Table</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
            Discover locally grown produce, handpicked by trusted farmers and delivered fresh to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/services" 
              className="bg-agrogreen-600 hover:bg-agrogreen-700 text-white font-medium py-4 px-8 rounded-lg inline-flex items-center justify-center transition-all hover:scale-105"
            >
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/contact" 
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium py-4 px-8 rounded-lg inline-flex items-center justify-center transition-all border border-white/20"
            >
              Meet the Farmers
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
