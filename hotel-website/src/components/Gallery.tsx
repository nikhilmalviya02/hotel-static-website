import React, { useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      category: 'rooms',
      title: 'Presidential Suite',
      image: '/rooms/Presidential Suite.png'
    },
    {
      id: 2,
      category: 'rooms',
      title: 'Executive Suite',
      image: '/rooms/Executive Suite.png'
    },
    {
      id: 3,
      category: 'spa',
      title: 'Wellness Center',
      image: '/facilities/Wellness Center.png'
    },
    {
      id: 4,
      category: 'pool',
      title: 'Infinity Pool',
      image: '/facilities/Infinity Pool.png'
    },
    {
      id: 5,
      category: 'lobby',
      title: 'Grand Lobby',
      image: '/facilities/Grand Lobby.png'
    },
    {
      id: 6,
      category: 'rooms',
      title: 'Deluxe Room',
      image: '/rooms/Deluxe Room.png'
    },
    {
      id: 7,
      category: 'rooms',
      title: 'Family Room',
      image: '/rooms/Family Room.png'
    },
    {
      id: 8,
      category: 'spa',
      title: 'Massage Therapy',
      image: '/facilities/Massage Therapy.png'
    },
    {
      id: 9,
      category: 'rooms',
      title: 'Standard Room',
      image: '/rooms/Standard Room.png'
    },
    {
      id: 10,
      category: 'rooms',
      title: 'Standard Twin',
      image: '/rooms/Standard Twin.png'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'rooms', name: 'Rooms' },
    { id: 'spa', name: 'Spa & Wellness' },
    { id: 'pool', name: 'Pool' },
    { id: 'lobby', name: 'Lobby' },
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const handlePrevious = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
      const previousIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
      setSelectedImage(filteredImages[previousIndex].id);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
      const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
      setSelectedImage(filteredImages[nextIndex].id);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-hotel-light">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Photo Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a virtual tour of our luxurious hotel and discover the elegant spaces 
            and premium amenities that await you.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gray-900 text-white scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(image.id)}
            >
              <img
                src={image.image}
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <ZoomIn
                  size={32}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-semibold">{image.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>

            <button
              className="absolute left-4 text-white hover:text-gray-300 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
            >
              <ChevronLeft size={48} />
            </button>

            <button
              className="absolute right-4 text-white hover:text-gray-300 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
            >
              <ChevronRight size={48} />
            </button>

            <div className="max-w-6xl max-h-full">
              <img
                src={filteredImages.find(img => img.id === selectedImage)?.image}
                alt={filteredImages.find(img => img.id === selectedImage)?.title}
                className="max-w-full max-h-full object-contain"
              />
              <p className="text-white text-center mt-4 text-lg">
                {filteredImages.find(img => img.id === selectedImage)?.title}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
