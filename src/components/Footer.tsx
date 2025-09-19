import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-charcoal to-charcoal/90 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-saffron-yellow to-sky-blue bg-clip-text text-transparent">
                Travel with Botaina
              </h3>
              <p className="text-sm text-pearl-white/70 mt-2">Authentic Moroccan Travel Experiences</p>
            </div>
            
            <p className="text-pearl-white/60 leading-relaxed">
              Discover the magic of Morocco with our expertly crafted journeys. From ancient medinas to golden deserts, we create unforgettable experiences that connect you with the heart of Moroccan culture.
            </p>
            
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-pearl-white/60 hover:text-saffron-yellow hover:bg-saffron-yellow/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-pearl-white/60 hover:text-saffron-yellow hover:bg-saffron-yellow/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-pearl-white/60 hover:text-saffron-yellow hover:bg-saffron-yellow/10">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-saffron-yellow">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#destinations" className="text-pearl-white/60 hover:text-saffron-yellow transition-colors">Destinations</a></li>
              <li><a href="#tours" className="text-pearl-white/60 hover:text-saffron-yellow transition-colors">Tours & Packages</a></li>
              <li><a href="#about" className="text-pearl-white/60 hover:text-saffron-yellow transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-pearl-white/60 hover:text-saffron-yellow transition-colors">Contact</a></li>
              <li><a href="#reviews" className="text-pearl-white/60 hover:text-saffron-yellow transition-colors">Reviews</a></li>
              <li><a href="#blog" className="text-pearl-white/60 hover:text-saffron-yellow transition-colors">Travel Blog</a></li>
            </ul>
          </div>

          {/* Destinations */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-saffron-yellow">Popular Destinations</h4>
            <ul className="space-y-3">
              <li><a href="#marrakech" className="text-pearl-white/60 hover:text-saffron-yellow transition-colors">Marrakech</a></li>
              <li><a href="#fes" className="text-pearl-white/60 hover:text-saffron-yellow transition-colors">Fes</a></li>
              <li><a href="#chefchaouen" className="text-pearl-white/60 hover:text-saffron-yellow transition-colors">Chefchaouen</a></li>
              <li><a href="#sahara" className="text-pearl-white/60 hover:text-saffron-yellow transition-colors">Sahara Desert</a></li>
              <li><a href="#essaouira" className="text-pearl-white/60 hover:text-saffron-yellow transition-colors">Essaouira</a></li>
              <li><a href="#atlas" className="text-pearl-white/60 hover:text-saffron-yellow transition-colors">Atlas Mountains</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-saffron-yellow">Stay Connected</h4>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-majorelle-blue" />
                <span className="text-pearl-white/60 text-sm">Marrakech, Morocco</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-majorelle-blue" />
                <span className="text-pearl-white/60 text-sm">+212 5XX-XXX-XXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-majorelle-blue" />
                <span className="text-pearl-white/60 text-sm">hello@travelwithbotaina.com</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-3">
              <h5 className="font-medium text-sky-blue">Travel Newsletter</h5>
              <p className="text-sm text-pearl-white/60">Get travel tips and exclusive offers</p>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Your email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-pearl-white/40"
                />
                <Button variant="gomoro" size="sm">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-pearl-white/40">
            © 2024 Travel with Botaina. All rights reserved. | Authentic Moroccan Travel Experiences
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#privacy" className="text-pearl-white/40 hover:text-saffron-yellow transition-colors">Privacy Policy</a>
            <a href="#terms" className="text-pearl-white/40 hover:text-saffron-yellow transition-colors">Terms of Service</a>
            <a href="#cookies" className="text-pearl-white/40 hover:text-saffron-yellow transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;