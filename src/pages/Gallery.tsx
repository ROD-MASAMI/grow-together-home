
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { folder, folderOpen } from 'lucide-react';

const Gallery = () => {
  const [openFolder, setOpenFolder] = useState<string | null>(null);

  const folders = [
    {
      id: 'farming',
      name: 'Farm Life',
      description: 'Daily life on our sustainable farms',
      images: [
        'photo-1517022812141-23620dba5c23',
        'photo-1466721591366-2d5fba72006d',
        'photo-1493962853295-0fd70327578a',
        'photo-1452960962994-acf4fd70b632',
        'photo-1465379944081-7f47de8d74ac',
        'photo-1439886183900-e79ec0057170'
      ]
    },
    {
      id: 'animals',
      name: 'Farm Animals',
      description: 'Our beloved farm animals',
      images: [
        'photo-1582562124811-c09040d0a901',
        'photo-1535268647677-300dbf3d78d1',
        'photo-1441057206919-63d19fac2369',
        'photo-1485833077593-4278bba3f11f',
        'photo-1438565434616-3ef039228b15',
        'photo-1452378174528-3090a4bba7b2'
      ]
    },
    {
      id: 'landscapes',
      name: 'Farm Landscapes',
      description: 'Beautiful views from our fields',
      images: [
        'photo-1472396961693-142e6e269027',
        'photo-1433086966358-54859d0ed716',
        'photo-1482938289607-e9573fc25ebb',
        'photo-1509316975850-ff9c5deb0cd9',
        'photo-1469474968028-56623f02e42e',
        'photo-1500375592092-40eb2168fd21'
      ]
    },
    {
      id: 'harvest',
      name: 'Harvest Season',
      description: 'Fresh produce from our farms',
      images: [
        'photo-1618160702438-9b02ab6515c9',
        'photo-1465146344425-f00d5f5c8f07',
        'photo-1518005020951-eccb494ad742',
        'photo-1496307653780-42ee777d4833',
        'photo-1721322800607-8c38375eef04',
        'photo-1498936178812-4b2e558d2937'
      ]
    }
  ];

  const toggleFolder = (folderId: string) => {
    setOpenFolder(openFolder === folderId ? null : folderId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Farm Gallery
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the beauty of sustainable farming through our collection of images showcasing daily farm life, animals, and landscapes.
            </p>
          </div>

          {/* Folder Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {folders.map((folder) => (
              <div key={folder.id} className="space-y-4">
                {/* Folder Header */}
                <Card 
                  className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105"
                  onClick={() => toggleFolder(folder.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-agrogreen-600 transition-transform duration-300">
                        {openFolder === folder.id ? (
                          <folderOpen size={32} />
                        ) : (
                          <folder size={32} />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {folder.name}
                        </h3>
                        <p className="text-gray-600">
                          {folder.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
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
                        className="aspect-square overflow-hidden rounded-lg group cursor-pointer"
                        style={{
                          animationDelay: `${index * 100}ms`
                        }}
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
      
      <Footer />
    </div>
  );
};

export default Gallery;
