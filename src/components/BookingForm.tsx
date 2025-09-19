import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Users, MapPin, Send, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const BookingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travelers: "",
    duration: "",
    departure: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Inquiry Submitted! 🇲🇦",
      description: "Thank you for your interest! Our travel experts will contact you within 24 hours to discuss your Moroccan adventure.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      destination: "",
      travelers: "",
      duration: "",
      departure: "",
      message: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-muted to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Plan Your 
            <span className="text-transparent bg-gradient-to-r from-atlas-green to-midnight-blue bg-clip-text">
              {" "}Moroccan Adventure
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let our expert travel consultants create a personalized itinerary for your perfect Moroccan journey. 
            Share your dreams, and we'll make them reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-0 bg-gradient-to-br from-desert-sand/20 to-golden-ochre/20">
              <CardHeader>
                <CardTitle className="text-2xl text-midnight-blue flex items-center">
                  <Phone className="mr-3 text-moroccan-red" />
                  Get In Touch
                </CardTitle>
                <CardDescription className="text-base">
                  Ready to start planning? Our travel experts are here to help create your perfect Moroccan experience.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-moroccan-red/10 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-moroccan-red" />
                  </div>
                  <div>
                    <div className="font-semibold text-midnight-blue">Call Us</div>
                    <div className="text-muted-foreground">+212 5XX-XXX-XXX</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-atlas-green/10 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-atlas-green" />
                  </div>
                  <div>
                    <div className="font-semibold text-midnight-blue">Email Us</div>
                    <div className="text-muted-foreground">info@moroccanjourney.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-golden-ochre/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-golden-ochre" />
                  </div>
                  <div>
                    <div className="font-semibold text-midnight-blue">Visit Us</div>
                    <div className="text-muted-foreground">Marrakech, Morocco</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-atlas-green/10 to-midnight-blue/10">
              <CardHeader>
                <CardTitle className="text-xl text-midnight-blue">Why Choose Us?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-moroccan-red rounded-full mr-3"></div>
                    15+ years of Moroccan travel expertise
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-atlas-green rounded-full mr-3"></div>
                    Local guides and authentic experiences
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-golden-ochre rounded-full mr-3"></div>
                    Customized itineraries for every budget
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-midnight-blue rounded-full mr-3"></div>
                    24/7 support during your journey
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Booking Form */}
          <Card className="border-0 shadow-morocco">
            <CardHeader>
              <CardTitle className="text-2xl text-midnight-blue">Start Your Journey</CardTitle>
              <CardDescription>Fill out the form below and we'll create a personalized quote for you.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input 
                      id="name" 
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Enter your full name" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input 
                      id="email" 
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="your@email.com" 
                      required 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="+1 (555) 000-0000" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="travelers">Number of Travelers *</Label>
                    <Select value={formData.travelers} onValueChange={(value) => handleChange("travelers", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select travelers" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Traveler</SelectItem>
                        <SelectItem value="2">2 Travelers</SelectItem>
                        <SelectItem value="3-4">3-4 Travelers</SelectItem>
                        <SelectItem value="5-8">5-8 Travelers</SelectItem>
                        <SelectItem value="9+">9+ Travelers</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="destination">Preferred Destination</Label>
                    <Select value={formData.destination} onValueChange={(value) => handleChange("destination", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose destination" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="marrakech">Marrakech</SelectItem>
                        <SelectItem value="fes">Fes</SelectItem>
                        <SelectItem value="chefchaouen">Chefchaouen</SelectItem>
                        <SelectItem value="sahara">Sahara Desert</SelectItem>
                        <SelectItem value="essaouira">Essaouira</SelectItem>
                        <SelectItem value="casablanca">Casablanca</SelectItem>
                        <SelectItem value="custom">Custom Itinerary</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="duration">Trip Duration</Label>
                    <Select value={formData.duration} onValueChange={(value) => handleChange("duration", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3-4">3-4 Days</SelectItem>
                        <SelectItem value="5-7">5-7 Days</SelectItem>
                        <SelectItem value="8-10">8-10 Days</SelectItem>
                        <SelectItem value="11-14">11-14 Days</SelectItem>
                        <SelectItem value="15+">15+ Days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="departure">Preferred Departure Date</Label>
                  <Input 
                    id="departure" 
                    type="date"
                    value={formData.departure}
                    onChange={(e) => handleChange("departure", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Special Requests or Questions</Label>
                  <Textarea 
                    id="message" 
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Tell us about your interests, special occasions, dietary requirements, or any specific experiences you'd like to include..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button type="submit" variant="gomoro" size="lg" className="w-full text-lg py-6">
                  <Send className="mr-2" />
                  Send Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;