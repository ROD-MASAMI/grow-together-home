
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Leaf, Wheat, Users, Truck, ShieldCheck, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Wheat className="h-8 w-8 text-green-600" />,
      title: "Crop Production",
      description: "We specialize in growing high-quality crops including coffee, maize, rice, and various vegetables using modern farming techniques.",
      features: ["Coffee beans", "Maize/Corn", "Rice", "Vegetables", "Legumes"]
    },
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: "Organic Farming",
      description: "Our commitment to sustainable agriculture ensures all our produce is grown using organic methods without harmful chemicals.",
      features: ["Chemical-free cultivation", "Natural fertilizers", "Pest control", "Soil conservation", "Water management"]
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Agricultural Consulting",
      description: "Expert advice and guidance for farmers looking to improve their yields and adopt sustainable farming practices.",
      features: ["Farm planning", "Crop selection", "Soil analysis", "Training programs", "Technical support"]
    },
    {
      icon: <Truck className="h-8 w-8 text-green-600" />,
      title: "Supply Chain Management",
      description: "From farm to market, we ensure efficient distribution of fresh produce to retailers and consumers.",
      features: ["Harvest collection", "Quality control", "Storage solutions", "Transportation", "Market distribution"]
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-green-600" />,
      title: "Quality Assurance",
      description: "Rigorous quality control processes ensure that all our agricultural products meet the highest standards.",
      features: ["Product testing", "Certification", "Traceability", "Safety standards", "Regular inspections"]
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      title: "Farm Management",
      description: "Complete farm management services to optimize productivity and profitability for agricultural operations.",
      features: ["Resource planning", "Crop rotation", "Yield optimization", "Cost management", "Performance tracking"]
    }
  ];

  const crops = [
    {
      name: "Coffee",
      image: "photo-1447175008436-054170c2e979",
      description: "Premium Arabica coffee beans grown in ideal climate conditions",
      harvest: "April - August"
    },
    {
      name: "Maize/Corn",
      image: "photo-1574484284002-952d92456975",
      description: "High-yield maize varieties for both food and feed applications",
      harvest: "June - September"
    },
    {
      name: "Rice",
      image: "photo-1586201375761-83865001e31c",
      description: "Quality rice varieties grown using sustainable irrigation methods",
      harvest: "March - May, October - December"
    },
    {
      name: "Vegetables",
      image: "photo-1445282768818-728615cc910a",
      description: "Fresh carrots, tomatoes, onions, and other seasonal vegetables",
      harvest: "Year-round"
    }
  ];

  const products = [
    {
      category: "Processed Coffee",
      items: ["Roasted coffee beans", "Ground coffee", "Coffee extracts", "Instant coffee"]
    },
    {
      category: "Grain Products",
      items: ["Maize flour", "Rice products", "Animal feed", "Grain exports"]
    },
    {
      category: "Fresh Produce",
      items: ["Fresh vegetables", "Seasonal fruits", "Herbs and spices", "Organic produce"]
    },
    {
      category: "Value-Added Products",
      items: ["Processed foods", "Packaged goods", "Export commodities", "Wholesale supplies"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url("https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80")`
      }}>
        <Navbar />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Our Services
            </h1>
            <p className="text-xl max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
              Comprehensive agricultural solutions from farm to market
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kings Liquor provides comprehensive agricultural services, from sustainable farming practices to quality produce distribution across Tanzania.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    {service.icon}
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Crops We Grow Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Crops We Grow</h2>
            <p className="text-lg text-gray-600">
              Our diverse crop portfolio ensures year-round production and supply
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {crops.map((crop, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/${crop.image}?auto=format&fit=crop&q=80&w=400&h=300`}
                    alt={crop.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{crop.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{crop.description}</p>
                  <div className="text-xs text-green-600 font-medium">
                    Harvest: {crop.harvest}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Final Products Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Final Products</h2>
            <p className="text-lg text-gray-600">
              From raw crops to finished products ready for market
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg text-green-700">{product.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Contact Kings Liquor today to discuss your agricultural needs and discover how we can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="text-white">
              <strong>Phone:</strong> +255 716 852 420
            </div>
            <div className="text-white">
              <strong>Email:</strong> agrofarming@kings.co.tz
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
