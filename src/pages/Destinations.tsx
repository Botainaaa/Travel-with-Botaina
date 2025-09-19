import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Clock, Star, Users, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import marrakechImage from "@/assets/marrakech.jpg";
import chefchaouenImage from "@/assets/chefchaouen.jpg";
import essaouiraImage from "@/assets/essaouira.jpg";

const destinations = [
  {
    id: "marrakech",
    name: "Marrakech",
    description: "The Red City with its famous medina, bustling souks, and magnificent palaces.",
    image: marrakechImage,
    duration: "3-5 days",
    price: "From $150/day",
    rating: 4.8,
    highlights: ["Jemaa el-Fnaa", "Bahia Palace", "Majorelle Garden", "Atlas Mountains"],
    bestTime: "October - April"
  },
  {
    id: "chefchaouen", 
    name: "Chefchaouen",
    description: "The Blue Pearl of Morocco nestled in the Rif Mountains.",
    image: chefchaouenImage,
    duration: "2-3 days", 
    price: "From $80/day",
    rating: 4.9,
    highlights: ["Blue Medina", "Kasbah Museum", "Ras El Maa Waterfall", "Mountain Hiking"],
    bestTime: "March - November"
  },
  {
    id: "essaouira",
    name: "Essaouira", 
    description: "Coastal gem with Portuguese architecture and Atlantic Ocean views.",
    image: essaouiraImage,
    duration: "2-4 days",
    price: "From $100/day", 
    rating: 4.7,
    highlights: ["Medina Walls", "Skala Fortress", "Argan Oil Cooperatives", "Beach Activities"],
    bestTime: "Year-round"
  }
];

const Destinations = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pearl-white to-sky-blue/10">
      {/* Header */}
      <div className="bg-gradient-to-r from-majorelle-blue to-sky-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <Link to="/" className="inline-flex items-center text-pearl-white hover:text-saffron-yellow transition-colors mb-6">
            <ArrowLeft className="mr-2 w-5 h-5" />
            Back to Home
          </Link>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Explore Morocco's
            <span className="block text-saffron-yellow">Best Destinations</span>
          </h1>
          <p className="text-xl text-pearl-white/90 max-w-3xl">
            Discover the magic of Morocco through our carefully curated destinations, 
            each offering unique experiences and unforgettable memories.
          </p>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Card key={destination.id} className="border-0 shadow-gomoro hover:shadow-warm transition-all duration-300 hover:scale-[1.02] bg-white/90 backdrop-blur-sm overflow-hidden">
              <div className="relative">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-saffron-yellow text-charcoal font-semibold">
                  {destination.price}
                </Badge>
              </div>
              
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl text-charcoal">{destination.name}</CardTitle>
                  <div className="flex items-center text-saffron-yellow">
                    <Star className="w-5 h-5 fill-current mr-1" />
                    <span className="font-semibold">{destination.rating}</span>
                  </div>
                </div>
                <CardDescription className="text-charcoal/70 text-base">
                  {destination.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm text-charcoal/70">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-majorelle-blue" />
                    {destination.duration}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-majorelle-blue" />
                    {destination.bestTime}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {destination.highlights.map((highlight, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-majorelle-blue/30 text-majorelle-blue">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button variant="gomoro" className="flex-1">
                    <MapPin className="mr-2 w-4 h-4" />
                    View Details
                  </Button>
                  <Button variant="sunset" className="flex-1">
                    <Users className="mr-2 w-4 h-4" />
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-majorelle-blue/10 to-saffron-yellow/10 rounded-2xl p-8 max-w-4xl mx-auto border border-sky-blue/30 shadow-gomoro">
            <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
              Ready to Start Your Moroccan Adventure?
            </h3>
            <p className="text-charcoal/70 mb-6 text-lg">
              Let us create a personalized itinerary that matches your interests and travel style.
            </p>
            <Link to="/">
              <Button variant="gomoro" size="lg" className="text-lg px-8 py-4">
                Plan Your Custom Trip
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;