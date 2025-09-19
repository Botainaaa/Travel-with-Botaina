import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, MapPin, Users, Phone, Mail, MessageSquare, Star, Heart, Camera, Mountain, Compass } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const moroccanCities = [
  { 
    value: "rabat", 
    label: "Rabat", 
    description: "Capital city with royal palaces and history",
    highlights: ["Hassan Tower", "Royal Palace", "Kasbah of the Udayas"],
    icon: <Star className="w-4 h-4" />,
    image: "🏛️"
  },
  { 
    value: "essaouira", 
    label: "Essaouira", 
    description: "Coastal city with Portuguese architecture",
    highlights: ["Historic Medina", "Fishing Port", "Windsurfing"],
    icon: <Heart className="w-4 h-4" />,
    image: "🌊"
  },
  { 
    value: "agadir", 
    label: "Agadir", 
    description: "Modern beach resort destination",
    highlights: ["Agadir Beach", "Souk El Had", "Paradise Valley"],
    icon: <Camera className="w-4 h-4" />,
    image: "🏖️"
  },
  { 
    value: "marrakech", 
    label: "Marrakech", 
    description: "The Red City with vibrant souks and gardens",
    highlights: ["Jemaa el-Fnaa", "Majorelle Garden", "Bahia Palace"],
    icon: <Star className="w-4 h-4" />,
    image: "🕌"
  },
  { 
    value: "chefchaouen", 
    label: "Chefchaouen", 
    description: "The Blue Pearl nestled in mountains",
    highlights: ["Blue Streets", "Kasbah Museum", "Ras El Maa"],
    icon: <Mountain className="w-4 h-4" />,
    image: "💙"
  },
  { 
    value: "casablanca", 
    label: "Casablanca", 
    description: "Economic capital and modern metropolis",
    highlights: ["Hassan II Mosque", "Corniche", "Rick's Café"],
    icon: <Camera className="w-4 h-4" />,
    image: "🏙️"
  },
  { 
    value: "fez", 
    label: "Fez", 
    description: "Medieval city with ancient medina",
    highlights: ["Fes el-Bali", "Bou Inania Madrasa", "Tanneries"],
    icon: <Heart className="w-4 h-4" />,
    image: "🏺"
  },
  { 
    value: "meknes", 
    label: "Meknes", 
    description: "Imperial city with grand architecture",
    highlights: ["Bab Mansour", "Mausoleum of Moulay Ismail", "Volubilis"],
    icon: <Camera className="w-4 h-4" />,
    image: "👑"
  },
  { 
    value: "ouarzazate", 
    label: "Ouarzazate", 
    description: "Gateway to the Sahara Desert",
    highlights: ["Atlas Studios", "Kasbah Taourirt", "Ait Ben Haddou"],
    icon: <Mountain className="w-4 h-4" />,
    image: "🏜️"
  },
  { 
    value: "tangier", 
    label: "Tangier", 
    description: "Gateway between Africa and Europe",
    highlights: ["Cap Spartel", "Hercules Caves", "Kasbah"],
    icon: <Compass className="w-4 h-4" />,
    image: "⚓"
  },
  { 
    value: "merzouga", 
    label: "Merzouga", 
    description: "Sahara Desert experience with golden dunes",
    highlights: ["Erg Chebbi Dunes", "Camel Trekking", "Desert Camping"],
    icon: <Heart className="w-4 h-4" />,
    image: "🐪"
  },
  { 
    value: "erfoud", 
    label: "Erfoud", 
    description: "Fossil town near the desert",
    highlights: ["Fossil Workshops", "Date Palms", "Desert Gateway"],
    icon: <Star className="w-4 h-4" />,
    image: "🌴"
  }
];

interface TravelPlanningModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TravelPlanningModal = ({ open, onOpenChange }: TravelPlanningModalProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [departureDate, setDepartureDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelers: "",
    budget: "",
    accommodation: "",
    specialRequests: ""
  });

  const selectedCityData = moroccanCities.find(city => city.value === selectedCity);

  const handleNext = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    console.log("Travel plan submitted:", {
      ...formData,
      selectedCity,
      departureDate,
      returnDate,
    });
    onOpenChange(false);
    setCurrentStep(1);
  };

  const isStep1Valid = selectedCity && departureDate && returnDate && formData.travelers;
  const isStep2Valid = formData.budget && formData.accommodation;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-screen h-screen max-w-none max-h-none m-0 rounded-none overflow-y-auto bg-gradient-to-br from-pearl-white to-sky-blue/5 border-0">
        <DialogHeader className="pb-6 border-b border-sky-blue/20">
          <DialogTitle className="text-3xl font-bold text-charcoal text-center">
            Plan Your <span className="text-transparent bg-gradient-to-r from-saffron-yellow to-majorelle-blue bg-clip-text">Moroccan Journey</span>
          </DialogTitle>
          <DialogDescription className="text-charcoal/70 text-center text-lg">
            Create your perfect Moroccan adventure with Travel with Botaina - Step {currentStep} of 3
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-8 py-6">
          {/* Progress Indicator */}
          <div className="flex justify-center space-x-4 mb-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors",
                  currentStep >= step 
                    ? "bg-majorelle-blue text-white" 
                    : "bg-sky-blue/20 text-charcoal/50"
                )}>
                  {step}
                </div>
                {step < 3 && (
                  <div className={cn(
                    "w-12 h-1 mx-2 transition-colors",
                    currentStep > step ? "bg-majorelle-blue" : "bg-sky-blue/20"
                  )} />
                )}
              </div>
            ))}
          </div>

          {/* Step 1: Destination & Dates */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-charcoal mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-majorelle-blue" />
                  Choose Your Destination
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {moroccanCities.map((city) => (
                    <Card 
                      key={city.value} 
                      className={cn(
                        "cursor-pointer transition-all duration-200 hover:scale-105",
                        selectedCity === city.value 
                          ? "border-majorelle-blue shadow-gomoro bg-majorelle-blue/5" 
                          : "border-sky-blue/20 hover:border-majorelle-blue/50"
                      )}
                      onClick={() => setSelectedCity(city.value)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <span className="text-2xl">{city.image}</span>
                            <h4 className="font-semibold text-charcoal">{city.label}</h4>
                          </div>
                          {city.icon}
                        </div>
                        <p className="text-sm text-charcoal/70 mb-3">{city.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {city.highlights.slice(0, 2).map((highlight, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs border-sky-blue text-majorelle-blue">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {selectedCityData && (
                <Card className="bg-gradient-to-r from-majorelle-blue/5 to-saffron-yellow/5 border-majorelle-blue/20">
                  <CardHeader>
                    <CardTitle className="text-majorelle-blue flex items-center">
                      <span className="text-2xl mr-2">{selectedCityData.image}</span>
                      Discover {selectedCityData.label}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-charcoal/70 mb-3">{selectedCityData.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedCityData.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="outline" className="border-majorelle-blue text-majorelle-blue">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label className="text-charcoal font-medium">Departure Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !departureDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {departureDate ? format(departureDate, "PPP") : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={departureDate}
                        onSelect={setDepartureDate}
                        disabled={(date) => date < new Date()}
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label className="text-charcoal font-medium">Return Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !returnDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {returnDate ? format(returnDate, "PPP") : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={returnDate}
                        onSelect={setReturnDate}
                        disabled={(date) => date < (departureDate || new Date())}
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label className="text-charcoal font-medium flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    Travelers
                  </Label>
                  <Select value={formData.travelers} onValueChange={(value) => setFormData({...formData, travelers: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="How many?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Traveler</SelectItem>
                      <SelectItem value="2">2 Travelers</SelectItem>
                      <SelectItem value="3">3 Travelers</SelectItem>
                      <SelectItem value="4">4 Travelers</SelectItem>
                      <SelectItem value="5">5 Travelers</SelectItem>
                      <SelectItem value="6+">6+ Travelers</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Preferences */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Travel Preferences</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-charcoal font-medium">Budget Range</Label>
                  <Select value={formData.budget} onValueChange={(value) => setFormData({...formData, budget: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your budget..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-1000">Under $1,000</SelectItem>
                      <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                      <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                      <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                      <SelectItem value="above-10000">Above $10,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-charcoal font-medium">Accommodation Type</Label>
                  <Select value={formData.accommodation} onValueChange={(value) => setFormData({...formData, accommodation: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Preferred accommodation..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="luxury-hotel">Luxury Hotel</SelectItem>
                      <SelectItem value="boutique-riad">Boutique Riad</SelectItem>
                      <SelectItem value="desert-camp">Desert Camp</SelectItem>
                      <SelectItem value="guesthouse">Traditional Guesthouse</SelectItem>
                      <SelectItem value="resort">Beach Resort</SelectItem>
                      <SelectItem value="hostel">Budget Hostel</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-charcoal font-medium">Special Requests or Interests</Label>
                <Textarea
                  placeholder="Tell us about any special interests, dietary requirements, accessibility needs, or specific experiences you're looking for..."
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({...formData, specialRequests: e.target.value})}
                  className="min-h-[100px]"
                />
              </div>
            </div>
          )}

          {/* Step 3: Contact Information */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Contact Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-charcoal font-medium">Full Name</Label>
                  <Input
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-charcoal font-medium flex items-center">
                    <Mail className="w-4 h-4 mr-1" />
                    Email Address
                  </Label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-charcoal font-medium flex items-center">
                    <Phone className="w-4 h-4 mr-1" />
                    Phone Number
                  </Label>
                  <Input
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              {/* Summary Card */}
              <Card className="bg-gradient-to-r from-majorelle-blue/5 to-saffron-yellow/5 border-majorelle-blue/20">
                <CardHeader>
                  <CardTitle className="text-majorelle-blue">Journey Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p><span className="font-semibold">Destination:</span> {selectedCityData?.label}</p>
                  <p><span className="font-semibold">Dates:</span> {departureDate && format(departureDate, "PPP")} - {returnDate && format(returnDate, "PPP")}</p>
                  <p><span className="font-semibold">Travelers:</span> {formData.travelers}</p>
                  <p><span className="font-semibold">Budget:</span> {formData.budget?.replace('-', ' - $')}</p>
                  <p><span className="font-semibold">Accommodation:</span> {formData.accommodation?.replace('-', ' ')}</p>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6 border-t border-sky-blue/20">
            <Button 
              variant="outline" 
              onClick={currentStep === 1 ? () => onOpenChange(false) : handleBack}
            >
              {currentStep === 1 ? "Cancel" : "Back"}
            </Button>
            
            <Button 
              variant="gomoro"
              onClick={currentStep === 3 ? handleSubmit : handleNext}
              disabled={
                (currentStep === 1 && !isStep1Valid) ||
                (currentStep === 2 && !isStep2Valid) ||
                (currentStep === 3 && (!formData.name || !formData.email))
              }
            >
              {currentStep === 3 ? "Submit Request" : "Next Step"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TravelPlanningModal;