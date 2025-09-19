import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Clock } from "lucide-react";
import chefchaouenImage from "@/assets/chefchaouen.jpg";
import marrakechImage from "@/assets/marrakech.jpg";
import essaouiraImage from "@/assets/essaouira.jpg";
import volubilistImage from "@/assets/volubilis.jpg";

const destinations = [
  {
    id: 1,
    name: "Chefchaouen",
    description: "The enchanting blue pearl of Morocco nestled in the Rif Mountains",
    image: chefchaouenImage,
    duration: "2-3 days",
    rating: 4.9,
    highlights: ["Blue Medina", "Mountain Views", "Local Crafts"],
    price: "From €89/day"
  },
  {
    id: 2,
    name: "Marrakech",
    description: "The vibrant red city with bustling souks and magnificent palaces",
    image: marrakechImage,
    duration: "3-4 days",
    rating: 4.8,
    highlights: ["Jemaa el-Fnaa", "Majorelle Garden", "Souks"],
    price: "From €125/day"
  },
  {
    id: 3,
    name: "Essaouira",
    description: "Charming coastal city with Portuguese architecture and fresh seafood",
    image: essaouiraImage,
    duration: "2-3 days",
    rating: 4.7,
    highlights: ["Historic Port", "Windsurfing", "Art Galleries"],
    price: "From €95/day"
  },
  {
    id: 4,
    name: "Volubilis",
    description: "Ancient Roman ruins with stunning mosaics and historical significance",
    image: volubilistImage,
    duration: "1 day",
    rating: 4.6,
    highlights: ["Roman Mosaics", "Archaeology", "History"],
    price: "From €65/day"
  }
];

const DestinationGallery = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Discover Our 
            <span className="text-transparent bg-gradient-to-r from-moroccan-red to-golden-ochre bg-clip-text">
              {" "}Featured Destinations
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From imperial cities to coastal gems, explore Morocco's most captivating destinations 
            with our expertly curated travel experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {destinations.map((destination) => (
            <Card key={destination.id} className="group overflow-hidden hover:shadow-morocco transition-all duration-300 hover:scale-[1.02] border-0 bg-white">
              <div className="relative overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-midnight-blue font-semibold">
                    {destination.price}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 rounded-full px-2 py-1">
                  <Star className="w-4 h-4 fill-golden-ochre text-golden-ochre" />
                  <span className="text-sm font-semibold text-midnight-blue">{destination.rating}</span>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl text-midnight-blue">{destination.name}</CardTitle>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-sm">{destination.duration}</span>
                  </div>
                </div>
                <CardDescription className="text-base">{destination.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {destination.highlights.map((highlight, index) => (
                    <Badge key={index} variant="outline" className="border-atlas-green text-atlas-green">
                      {highlight}
                    </Badge>
                  ))}
                </div>
                
                <Button variant="gomoro" className="w-full group">
                  <MapPin className="mr-2 w-4 h-4" />
                  Explore {destination.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="ocean" size="lg" className="text-lg px-8 py-4 h-auto">
            View All Destinations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DestinationGallery;