import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-morocco.jpg";
import TravelPlanningModal from "./TravelPlanningModal";

const Hero = () => {
  const [showPlanningModal, setShowPlanningModal] = useState(false);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/50 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Discover Morocco with 
            <span className="block text-transparent bg-gradient-to-r from-saffron-yellow to-majorelle-blue bg-clip-text">
              Travel with Botaina
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-pearl-white max-w-3xl mx-auto">
            Journey through ancient medinas, golden deserts, and breathtaking landscapes. 
            Experience authentic Moroccan culture with our expertly crafted travel experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              variant="gomoro" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto"
              onClick={() => setShowPlanningModal(true)}
            >
              <Calendar className="mr-2" />
              Plan Your Journey
              <ArrowRight className="ml-2" />
            </Button>
            
            <Link to="/destinations">
              <Button variant="sunset" size="lg" className="text-lg px-8 py-4 h-auto">
                <MapPin className="mr-2" />
                Explore Destinations
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Floating Stats */}
        <div className="grid grid-cols-3 gap-6 mt-16 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-saffron-yellow">15+</div>
            <div className="text-pearl-white">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-saffron-yellow">500+</div>
            <div className="text-pearl-white">Happy Travelers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-saffron-yellow">20+</div>
            <div className="text-pearl-white">Destinations</div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-pearl-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-pearl-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Travel Planning Modal */}
      <TravelPlanningModal 
        open={showPlanningModal} 
        onOpenChange={setShowPlanningModal} 
      />
    </div>
  );
};

export default Hero;