import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Calendar, Users, MapPin } from 'lucide-react';

interface Package {
  id: number;
  name: string;
  duration: string;
  groupSize: string;
  price: string;
  originalPrice?: string;
  badge?: string;
  description: string;
  includes: string[];
  itinerary: string[];
}

const packages: Package[] = [
  {
    id: 1,
    name: "3-Day Forest Safari",
    duration: "3 Days / 2 Nights",
    groupSize: "Max 8 people",
    price: "$599",
    originalPrice: "$699",
    badge: "Popular",
    description: "Immerse yourself in nature with guided wildlife tours, canopy walks, and authentic jungle experiences.",
    includes: [
      "Accommodation in eco-lodge",
      "All meals included",
      "Professional guide", 
      "Wildlife photography tour",
      "Transportation"
    ],
    itinerary: [
      "Day 1: Arrival & Evening Safari",
      "Day 2: Canopy Walk & Night Tour", 
      "Day 3: Bird Watching & Departure"
    ]
  },
  {
    id: 2,
    name: "5-Day Heritage Tour",
    duration: "5 Days / 4 Nights",
    groupSize: "Max 12 people",
    price: "$1,299",
    badge: "Best Value",
    description: "Discover ancient civilizations, historic landmarks, and cultural treasures with expert local guides.",
    includes: [
      "4-star hotel accommodation",
      "Daily breakfast & 3 dinners",
      "Museum entries included",
      "Cultural performances",
      "Private transportation"
    ],
    itinerary: [
      "Day 1: Historic City Center Tour",
      "Day 2: Ancient Ruins & Museums",
      "Day 3: Cultural Workshops",
      "Day 4: Traditional Markets & Crafts",
      "Day 5: Final Sightseeing & Departure"
    ]
  },
  {
    id: 3,
    name: "7-Day Island Hopping",
    duration: "7 Days / 6 Nights",
    groupSize: "Max 6 people",
    price: "$2,399",
    badge: "Premium",
    description: "Luxury island adventure with private boat transfers, snorkeling, and beachside relaxation.",
    includes: [
      "Luxury resort stays",
      "All meals & premium beverages",
      "Private boat transfers",
      "Snorkeling equipment",
      "Spa treatments included"
    ],
    itinerary: [
      "Day 1-2: Main Island Paradise",
      "Day 3-4: Coral Reef Exploration",
      "Day 5-6: Private Island Retreat",
      "Day 7: Luxury Spa & Departure"
    ]
  }
];

const Packages = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="packages" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Travel Packages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our carefully curated travel packages designed to give you the best experiences at great value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg) => (
            <Card key={pkg.id} className="relative overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {pkg.badge && (
                <Badge 
                  className={`absolute top-4 right-4 z-10 ${
                    pkg.badge === 'Popular' ? 'bg-tourism-ocean' : 
                    pkg.badge === 'Best Value' ? 'bg-tourism-forest' : 
                    'bg-tourism-sunset'
                  }`}
                >
                  {pkg.badge}
                </Badge>
              )}
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-foreground">
                  {pkg.name}
                </CardTitle>
                
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {pkg.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    {pkg.groupSize}
                  </div>
                </div>
                
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                  {pkg.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">
                      {pkg.originalPrice}
                    </span>
                  )}
                  <span className="text-sm text-muted-foreground">per person</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  {pkg.description}
                </p>
                
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">What's Included:</h4>
                  <ul className="space-y-2">
                    {pkg.includes.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Itinerary:</h4>
                  <ul className="space-y-1">
                    {pkg.itinerary.map((day, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <MapPin className="w-3 h-3 mt-1 flex-shrink-0" />
                        {day}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  className="w-full bg-primary hover:bg-primary/90"
                  size="lg"
                  onClick={scrollToContact}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;