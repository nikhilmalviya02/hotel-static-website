import React from 'react';
import { Award, Users, Heart, Shield } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Award, number: "15+", label: "Years of Excellence" },
    { icon: Users, number: "50K+", label: "Happy Guests" },
    { icon: Heart, number: "4.9", label: "Guest Rating" },
    { icon: Shield, number: "24/7", label: "Premium Service" },
  ];

  const features = [
    {
      title: "Luxurious Accommodations",
      description: "Experience the perfect blend of comfort and elegance in our meticulously designed rooms and suites.",
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "World-Class Dining",
      description: "Savor exquisite culinary creations prepared by our renowned chefs using the finest ingredients.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Wellness & Spa",
      description: "Rejuvenate your body and soul in our state-of-the-art spa and wellness facilities.",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Welcome to Hotel Luxe
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Where luxury meets comfort, and every stay becomes an unforgettable experience. 
            Discover the perfect destination for your next getaway.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4 group-hover:bg-gray-200 transition-colors duration-300">
                <stat.icon size={32} className="text-gray-700" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gray-50 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Experience Luxury?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Book your stay with us and enjoy exclusive benefits, personalized service, 
            and memories that will last a lifetime.
          </p>
          <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Reserve Your Stay
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
