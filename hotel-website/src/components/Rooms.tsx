import React, { useState } from 'react';
import { Bath, Bed, Users, Wifi, Car, Coffee, Dumbbell, Wind } from 'lucide-react';

const Rooms: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Rooms' },
    { id: 'standard', name: 'Standard' },
    { id: 'deluxe', name: 'Deluxe' },
    { id: 'suite', name: 'Suites' },
  ];

  const rooms = [
    {
      id: 1,
      name: 'Standard Room',
      category: 'standard',
      price: 199,
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      size: '25 sqm',
      capacity: '2 Guests',
      bed: 'Queen Bed',
      amenities: [Wifi, Wind],
      description: 'Comfortable and elegant room perfect for business travelers or couples.'
    },
    {
      id: 2,
      name: 'Deluxe Room',
      category: 'deluxe',
      price: 299,
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      size: '35 sqm',
      capacity: '2-3 Guests',
      bed: 'King Bed',
      amenities: [Wifi, Wind, Coffee],
      description: 'Spacious room with premium amenities and stunning city views.'
    },
    {
      id: 3,
      name: 'Executive Suite',
      category: 'suite',
      price: 499,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      size: '55 sqm',
      capacity: '2-4 Guests',
      bed: 'King Bed + Sofa Bed',
      amenities: [Wifi, Wind, Coffee, Car],
      description: 'Luxurious suite with separate living area and premium amenities.'
    },
    {
      id: 4,
      name: 'Presidential Suite',
      category: 'suite',
      price: 799,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      size: '85 sqm',
      capacity: '4-6 Guests',
      bed: '2 King Beds',
      amenities: [Wifi, Wind, Coffee, Car, Dumbbell],
      description: 'Ultimate luxury experience with panoramic views and personalized service.'
    },
    {
      id: 5,
      name: 'Family Room',
      category: 'deluxe',
      price: 349,
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      size: '45 sqm',
      capacity: '4 Guests',
      bed: '2 Queen Beds',
      amenities: [Wifi, Wind, Coffee],
      description: 'Perfect for families with children, offering space and comfort.'
    },
    {
      id: 6,
      name: 'Standard Twin',
      category: 'standard',
      price: 179,
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      size: '28 sqm',
      capacity: '2 Guests',
      bed: '2 Twin Beds',
      amenities: [Wifi],
      description: 'Cozy room with twin beds, ideal for friends or colleagues.'
    }
  ];

  const filteredRooms = selectedCategory === 'all' 
    ? rooms 
    : rooms.filter(room => room.category === selectedCategory);

  return (
    <section id="rooms" className="py-20 bg-hotel-light">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Rooms & Suites
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each room is thoughtfully designed to provide the perfect blend of comfort, 
            elegance, and modern amenities for an unforgettable stay.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gray-900 text-white scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              {/* Room Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-gray-900">
                    ${room.price}/night
                  </span>
                </div>
              </div>

              {/* Room Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                  {room.name}
                </h3>
                <p className="text-gray-600 mb-4">{room.description}</p>

                {/* Room Details */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Bed size={16} />
                    <span className="text-sm">{room.bed}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Users size={16} />
                    <span className="text-sm">{room.capacity}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <div className="w-4 h-4 bg-gray-200 rounded" />
                    <span className="text-sm">{room.size}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Bath size={16} />
                    <span className="text-sm">Private Bath</span>
                  </div>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {room.amenities.map((Icon, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full"
                    >
                      <Icon size={16} className="text-gray-600" />
                    </div>
                  ))}
                </div>

                {/* Book Button */}
                <button className="w-full bg-gray-900 text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Can't find what you're looking for? Contact us for special requests.
          </p>
          <button className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
