import React from 'react';
import { MapPin, Phone, Mail, Heart } from 'lucide-react';

interface FooterLink {
  text: string;
  href: string;
}

interface FooterContact {
  icon: React.ComponentType<any>;
  text: string;
}

type FooterSection = {
  title: string;
  content: string[] | FooterLink[] | FooterContact[];
};

const Footer: React.FC = () => {
  const footerSections: FooterSection[] = [
    {
      title: "Hotel Luxe",
      content: [
        "Experience the pinnacle of luxury and comfort at Hotel Luxe. We are committed to making your stay unforgettable with our exceptional service and world-class amenities."
      ]
    },
    {
      title: "Quick Links",
      content: [
        { text: "About Us", href: "#about" },
        { text: "Rooms & Suites", href: "#rooms" },
        { text: "Amenities", href: "#amenities" },
        { text: "Gallery", href: "#gallery" },
        { text: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Services",
      content: [
        { text: "Room Service", href: "#" },
        { text: "Spa & Wellness", href: "#" },
        { text: "Restaurant", href: "#" },
        { text: "Conference Facilities", href: "#" },
        { text: "Airport Transfer", href: "#" }
      ]
    },
    {
      title: "Contact Info",
      content: [
        { icon: MapPin, text: "123 Luxury Avenue, New York, NY 10001" },
        { icon: Phone, text: "+1 (555) 123-4567" },
        { icon: Mail, text: "info@hotelluxe.com" }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerSections.map((section: FooterSection, index: number) => (
            <div key={index}>
              <h3 className="text-xl font-bold mb-6">{section.title}</h3>
              {section.title === "Hotel Luxe" ? (
                <p className="text-gray-300 leading-relaxed">
                  {section.content[0] as string}
                </p>
              ) : section.title === "Contact Info" ? (
                <div className="space-y-3">
                  {(section.content as FooterContact[]).map((item: FooterContact, itemIndex: number) => (
                    <div key={itemIndex} className="flex items-start space-x-3">
                      <item.icon size={18} className="text-gray-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="space-y-3">
                  {(section.content as FooterLink[]).map((item: FooterLink, itemIndex: number) => (
                    <li key={itemIndex}>
                      <a
                        href={item.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-300 mb-6">
              Get exclusive offers and be the first to know about our special promotions and events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-gray-600 text-white placeholder-gray-400"
              />
              <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400 text-sm mb-4 md:mb-0">
              <span>© 2024 Hotel Luxe. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>by Hotel Luxe Team</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
