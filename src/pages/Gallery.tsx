
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { X } from 'lucide-react';

const Gallery = () => {
  const [openFolder, setOpenFolder] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const folders = [
    {
      id: 'farming',
      name: 'Farm Life',
      description: 'Daily life on our sustainable farms',
      preview: 'photo-1500937386664-56d1dfef3854',
      images: [
        'photo-1500937386664-56d1dfef3854', // rural farm landscape
        'photo-1574323347407-f5e1ad6d020b', // farmer in field
        'photo-1476514525535-07fb3b4ae5f1', // farm work scene
        'photo-1625246333195-78d9c38ad449', // agricultural equipment
        'photo-1559827260-dc66d52bef19', // farmers working
        'photo-1504378874489-7c843fe342d6' // farm life
      ]
    },
    {
      id: 'animals',
      name: 'Farm Animals',
      description: 'Our beloved farm animals',
      preview: 'photo-1516467508483-a7212febe31a',
      images: [
        'photo-1516467508483-a7212febe31a', // cows in field
        'photo-1548550023-2bdb3c5beed7', // sheep grazing
        'photo-1517022812141-23620dba5c23', // sheep herd
        'photo-1452378174528-3090a4bba7b2', // horses
        'photo-1582562124811-c09040d0a901', // farm animals
        'photo-1567459437266-61ba7bd137cd' // cattle
      ]
    },
    {
      id: 'landscapes',
      name: 'Farm Landscapes',
      description: 'Beautiful views from our crop plantations',
      preview: 'photo-1472396961693-142e6e269027',
      images: [
        'photo-1472396961693-142e6e269027', // green crop fields
        'photo-1571019613454-1cb2f99b2d8b', // coffee plantation rows
        'photo-1574484284002-952d92456975', // corn plantation field
        'photo-1509316975850-ff9c5deb0cd9', // agricultural plantation
        'photo-1500375592092-40eb2168fd21', // crop plantation vista
        'photo-1558618666-fcd25c85cd64' // tea plantation rows
      ]
    },
    {
      id: 'harvest',
      name: 'Crops & Harvest',
      description: 'Fresh crops and farmers collecting produce',
      preview: 'photo-1447175008436-054170c2e979',
      images: [
        'photo-1447175008436-054170c2e979', // coffee beans harvest
        'photo-1574484284002-952d92456975', // corn/maize crop
        'photo-1445282768818-728615cc910a', // fresh carrots
        'photo-1559827260-dc66d52bef19', // farmers collecting produce
        'photo-1574323347407-f5e1ad6d020b', // farmer harvesting crops
        'photo-1504378874489-7c843fe342d6' // farmer with harvest
      ]
    }
  ];

  const toggleFolder = (folderId: string) => {
    setOpenFolder(openFolder === folderId ? null : folderId);
  };

  const openImageDialog = (imageId: string) => {
    setSelectedImage(imageId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative">
        {/* Hero Section with Background Image */}
        <div className="h-96 bg-cover bg-center bg-no-repeat relative" style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url("https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80")`
        }}>
          <Navbar />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
                Our Farm Gallery
              </h1>
              <p className="text-xl max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
                Explore the beauty of sustainable farming through our collection of images
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Folder Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {folders.map((folder) => (
              <div key={folder.id} className="space-y-4">
                {/* Folder Header with Preview Image */}
                <Card 
                  className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden"
                  onClick={() => toggleFolder(folder.id)}
                >
                  <div className="relative h-48">
                    <img
                      src={`https://images.unsplash.com/${folder.preview}?auto=format&fit=crop&q=80&w=600&h=300`}
                      alt={folder.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-semibold mb-2">
                        {folder.name}
                      </h3>
                      <p className="text-white/90 text-sm">
                        {folder.description}
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Folder Content */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openFolder === folder.id 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 bg-white rounded-lg shadow-sm">
                    {folder.images.map((imageId, index) => (
                      <div 
                        key={imageId}
                        className="aspect-square overflow-hidden rounded-lg group cursor-pointer transform transition-all duration-300 hover:scale-105"
                        style={{
                          animationDelay: `${index * 100}ms`
                        }}
                        onClick={() => openImageDialog(imageId)}
                      >
                        <img
                          src={`https://images.unsplash.com/${imageId}?auto=format&fit=crop&q=80&w=400&h=400`}
                          alt={`${folder.name} image ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Statistics */}
          <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="animate-fade-in">
                <div className="text-3xl font-bold text-agrogreen-600">50+</div>
                <div className="text-gray-600">Farm Animals</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="text-3xl font-bold text-agrogreen-600">200+</div>
                <div className="text-gray-600">Acres of Land</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
                <div className="text-3xl font-bold text-agrogreen-600">15+</div>
                <div className="text-gray-600">Crop Varieties</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '600ms' }}>
                <div className="text-3xl font-bold text-agrogreen-600">100%</div>
                <div className="text-gray-600">Organic</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
          >
            <X size={20} />
          </button>
          {selectedImage && (
            <img
              src={`https://images.unsplash.com/${selectedImage}?auto=format&fit=crop&q=80&w=1200&h=800`}
              alt="Gallery image"
              className="w-full h-auto max-h-[90vh] object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default Gallery;
