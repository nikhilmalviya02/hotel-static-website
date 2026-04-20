import React from 'react';
import { Wifi, Car, Coffee, Dumbbell, Bath, Utensils, Shield, Clock, MapPin, Phone, Heart } from 'lucide-react';

const Amenities: React.FC = () => {
  const amenityCategories = [
    {
      title: "Room Features",
      icon: Bath,
      items: [
        "Luxury Bedding & Linens",
        "Premium Toiletries",
        "Mini Bar & Refrigerator",
        "Smart TV with Streaming",
        "Work Desk with Ergonomic Chair",
        "In-Room Safe",
        "Coffee & Tea Maker",
        "Climate Control"
      ]
    },
    {
      title: "Hotel Services",
      icon: Shield,
      items: [
        "24/7 Front Desk",
        "Concierge Service",
        "Room Service",
        "Daily Housekeeping",
        "Laundry & Dry Cleaning",
        "Airport Shuttle",
        "Valet Parking",
        "Multilingual Staff"
      ]
    },
    {
      title: "Dining Options",
      icon: Utensils,
      items: [
        "Fine Dining Restaurant",
        "Casual Café & Bistro",
        "Rooftop Bar",
        "Poolside Bar & Grill",
        "24-Hour Room Service",
        "Complimentary Breakfast",
        "Special Dietary Options",
        "Private Dining Available"
      ]
    },
    {
      title: "Wellness & Recreation",
      icon: Dumbbell,
      items: [
        "State-of-the-Art Fitness Center",
        "Indoor Swimming Pool",
        "Spa & Wellness Center",
        "Sauna & Steam Rooms",
        "Massage Therapy",
        "Yoga & Meditation Classes",
        "Tennis Courts",
        "Jogging Trails"
      ]
    },
    {
      title: "Business Facilities",
      icon: Clock,
      items: [
        "Business Center",
        "Meeting Rooms",
        "Conference Halls",
        "High-Speed Internet",
        "Audio-Visual Equipment",
        "Catering Services",
        "Event Planning",
        "Co-working Space"
      ]
    },
    {
      title: "Connectivity",
      icon: Wifi,
      items: [
        "Free High-Speed WiFi",
        "Complimentary Internet",
        "WiFi in All Areas",
        "Business Center Access",
        "Printing Services",
        "Mobile Check-in",
        "Digital Concierge",
        "Smart Room Controls"
      ]
    }
  ];

  const highlights = [
    {
      icon: Wifi,
      title: "High-Speed WiFi",
      description: "Stay connected with complimentary high-speed internet throughout the property"
    },
    {
      icon: Car,
      title: "Free Parking",
      description: "Secure parking facilities available for all guests at no additional cost"
    },
    {
      icon: Coffee,
      title: "Complimentary Breakfast",
      description: "Start your day with our delicious breakfast buffet included in your stay"
    },
    {
      icon: Heart,
      title: "Premium Service",
      description: "Experience our award-winning 24/7 personalized service"
    }
  ];

  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Premium Amenities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of amenities designed to make your stay 
            comfortable, convenient, and truly memorable.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="text-center group cursor-pointer"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4 group-hover:bg-gray-200 transition-all duration-300 group-hover:scale-110">
                <highlight.icon size={40} className="text-gray-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{highlight.title}</h3>
              <p className="text-gray-600 text-sm">{highlight.description}</p>
            </div>
          ))}
        </div>

        {/* Amenity Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenityCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full mr-4">
                  <category.icon size={24} className="text-gray-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mt-16 bg-gradient-to-r from-gray-100 to-gray-50 rounded-3xl p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Everything You Need for a Perfect Stay
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                From the moment you arrive until your departure, our dedicated team 
                is committed to providing exceptional service and ensuring your comfort.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-gray-600" size={20} />
                  <span className="text-gray-700">Prime city center location</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-gray-600" size={20} />
                  <span className="text-gray-700">24/7 guest support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="text-gray-600" size={20} />
                  <span className="text-gray-700">Enhanced safety protocols</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Hotel Lobby"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
