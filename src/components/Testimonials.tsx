import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    rating: 5,
    trip: "10-Day Imperial Cities Tour",
    content: "Our Moroccan adventure was absolutely magical! From the bustling souks of Marrakech to the serene blue streets of Chefchaouen, every moment was perfectly curated. Our guide Ahmed was incredibly knowledgeable and made us feel like family.",
    avatar: "SJ",
    verified: true
  },
  {
    id: 2,
    name: "Marcus Weber",
    location: "Berlin, Germany",
    rating: 5,
    trip: "Sahara Desert Experience",
    content: "The desert camp experience was beyond our wildest dreams. Sleeping under the stars in the Sahara, riding camels at sunset, and enjoying traditional Berber music around the campfire - it was truly a once-in-a-lifetime experience.",
    avatar: "MW",
    verified: true
  },
  {
    id: 3,
    name: "Emma Thompson",
    location: "London, UK",
    rating: 5,
    trip: "Coastal & Culture Journey",
    content: "Every detail was thoughtfully planned. The coastal towns were breathtaking, the food was incredible, and learning about Moroccan culture from local artisans was fascinating. The team went above and beyond to make our honeymoon special.",
    avatar: "ET",
    verified: true
  },
  {
    id: 4,
    name: "Carlos Rodriguez",
    location: "Madrid, Spain",
    rating: 5,
    trip: "Atlas Mountains Trek",
    content: "As an experienced traveler, I can say this was one of the best organized trips I've ever taken. The Atlas Mountains trek was challenging but rewarding, and the local Berber villages we visited were authentic and welcoming.",
    avatar: "CR",
    verified: true
  },
  {
    id: 5,
    name: "Yuki Tanaka",
    location: "Tokyo, Japan",
    rating: 5,
    trip: "Photography Tour",
    content: "Perfect for photographers! Every location was chosen with great care for its visual appeal and cultural significance. The golden hour shots in the desert and the vibrant colors of the medinas created a stunning portfolio.",
    avatar: "YT",
    verified: true
  },
  {
    id: 6,
    name: "Rachel Green",
    location: "Sydney, Australia",
    rating: 5,
    trip: "Family Adventure",
    content: "Traveling with kids can be challenging, but this team made it seamless. The activities were engaging for all ages, from exploring ancient kasbahs to learning traditional crafts. Our children still talk about the experience months later!",
    avatar: "RG",
    verified: true
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-pearl-white via-sky-blue/10 to-pearl-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Stories from Our 
            <span className="text-transparent bg-gradient-to-r from-saffron-yellow to-majorelle-blue bg-clip-text">
              {" "}Travelers
            </span>
          </h2>
          <p className="text-xl text-charcoal max-w-3xl mx-auto mb-8">
            Don't just take our word for it. Here's what our guests say about their unforgettable 
            Moroccan adventures with us.
          </p>
          
          {/* Overall Rating */}
          <div className="flex items-center justify-center gap-4 bg-white/60 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto border border-majorelle-blue/20 shadow-gomoro">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-saffron-yellow text-saffron-yellow" />
              ))}
            </div>
            <div className="text-2xl font-bold text-majorelle-blue">4.9</div>
            <div className="text-charcoal/70">based on 500+ reviews</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-0 shadow-gomoro hover:shadow-warm transition-all duration-300 hover:scale-[1.02] bg-white/80 backdrop-blur-sm relative overflow-hidden border border-sky-blue/20">
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-saffron-yellow/20">
                <Quote className="w-8 h-8" />
              </div>
              
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-saffron-yellow text-saffron-yellow" />
                  ))}
                </div>
                
                {/* Testimonial Content */}
                <p className="text-charcoal mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                {/* Trip Badge */}
                <Badge variant="outline" className="border-majorelle-blue text-majorelle-blue mb-4">
                  {testimonial.trip}
                </Badge>
                
                {/* User Info */}
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12 border-2 border-sky-blue">
                    <AvatarImage src="" alt={testimonial.name} />
                    <AvatarFallback className="bg-gradient-to-br from-majorelle-blue to-saffron-yellow text-white font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-charcoal">{testimonial.name}</h4>
                      {testimonial.verified && (
                        <Badge variant="secondary" className="text-xs bg-sky-blue/10 text-majorelle-blue border-0">
                          Verified
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-charcoal/70">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-majorelle-blue/10 to-saffron-yellow/10 rounded-2xl p-8 max-w-4xl mx-auto border border-sky-blue/30 shadow-gomoro">
            <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
              Ready to Create Your Own Story?
            </h3>
            <p className="text-charcoal/70 text-lg mb-6">
              Join hundreds of satisfied travelers who have discovered the magic of Morocco with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Card className="border-0 bg-white/90 backdrop-blur-sm p-4 text-center shadow-gomoro border border-sky-blue/20">
                <div className="text-2xl font-bold text-majorelle-blue">500+</div>
                <div className="text-sm text-charcoal/70">Happy Travelers</div>
              </Card>
              <Card className="border-0 bg-white/90 backdrop-blur-sm p-4 text-center shadow-gomoro border border-sky-blue/20">
                <div className="text-2xl font-bold text-saffron-yellow">4.9</div>
                <div className="text-sm text-charcoal/70">Average Rating</div>
              </Card>
              <Card className="border-0 bg-white/90 backdrop-blur-sm p-4 text-center shadow-gomoro border border-sky-blue/20">
                <div className="text-2xl font-bold text-majorelle-blue">98%</div>
                <div className="text-sm text-charcoal/70">Would Recommend</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;