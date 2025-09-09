import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { MapPin, Clock, Star } from 'lucide-react';
import mountainsImage from '@/assets/destination-mountains.jpg';
import historicImage from '@/assets/destination-historic.jpg';
import beachImage from '@/assets/destination-beach.jpg';
import forestImage from '@/assets/destination-forest.jpg';

interface Destination {
  id: number;
  name: string;
  location: string;
  image: string;
  description: string;
  fullDescription: string;
  duration: string;
  rating: number;
  price: string;
  highlights: string[];
}

const destinations: Destination[] = [
  {
    id: 1,
    name: "Himalayan Adventure",
    location: "Nepal",
    image: mountainsImage,
    description: "Experience the majestic peaks and serene mountain villages.",
    fullDescription: "Embark on an unforgettable journey through the Himalayas, where towering peaks pierce the sky and ancient monasteries dot the landscape. This adventure takes you through pristine mountain trails, vibrant Sherpa villages, and offers breathtaking views of the world's highest mountains including Mount Everest.",
    duration: "10 days",
    rating: 4.9,
    price: "$2,499",
    highlights: ["Mount Everest Base Camp", "Sherpa Culture", "Mountain Monasteries", "Alpine Lakes"]
  },
  {
    id: 2,
    name: "Historic Rome",
    location: "Italy",
    image: historicImage,
    description: "Walk through centuries of history in the Eternal City.",
    fullDescription: "Discover the ancient wonders of Rome, from the iconic Colosseum to the magnificent Vatican City. Explore cobblestone streets, sample authentic Italian cuisine, and immerse yourself in the rich history that spans over two millennia. Visit world-famous museums, throw a coin in the Trevi Fountain, and experience la dolce vita.",
    duration: "7 days",
    rating: 4.8,
    price: "$1,899",
    highlights: ["Colosseum & Forum", "Vatican Museums", "Trevi Fountain", "Italian Cuisine Tours"]
  },
  {
    id: 3,
    name: "Tropical Paradise",
    location: "Maldives",
    image: beachImage,
    description: "Pristine beaches and crystal-clear waters await you.",
    fullDescription: "Escape to the ultimate tropical paradise in the Maldives, where crystal-clear turquoise waters meet pristine white sand beaches. Stay in luxury overwater bungalows, snorkel among vibrant coral reefs, and enjoy world-class spa treatments. This is the perfect destination for romance, relaxation, and underwater adventures.",
    duration: "5 days",
    rating: 4.9,
    price: "$3,299",
    highlights: ["Overwater Bungalows", "Coral Reef Snorkeling", "Luxury Spa", "Private Beach Access"]
  },
  {
    id: 4,
    name: "Amazon Expedition",
    location: "Brazil",
    image: forestImage,
    description: "Explore the world's largest rainforest ecosystem.",
    fullDescription: "Venture deep into the Amazon rainforest, the lungs of our planet. This eco-adventure offers encounters with exotic wildlife, indigenous communities, and the most biodiverse ecosystem on Earth. Navigate winding rivers, spot rare birds and animals, and learn about conservation efforts in this natural wonder.",
    duration: "8 days",
    rating: 4.7,
    price: "$2,199",
    highlights: ["Wildlife Watching", "Indigenous Communities", "River Navigation", "Canopy Walks"]
  }
];

const Destinations = () => {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  return (
    <section id="destinations" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Destinations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover extraordinary places that will take your breath away and create memories to last a lifetime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {destinations.map((destination) => (
            <Card key={destination.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-semibold text-foreground">
                  {destination.price}
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <MapPin className="w-4 h-4" />
                  {destination.location}
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {destination.name}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {destination.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {destination.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-current text-yellow-500" />
                      {destination.rating}
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => setSelectedDestination(destination)}
                    className="bg-primary hover:bg-primary/90"
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Destination Detail Modal */}
      <Dialog open={!!selectedDestination} onOpenChange={() => setSelectedDestination(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {selectedDestination && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedDestination.name}</DialogTitle>
              </DialogHeader>
              
              <div className="space-y-4">
                <img 
                  src={selectedDestination.image} 
                  alt={selectedDestination.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
                
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {selectedDestination.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {selectedDestination.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 fill-current text-yellow-500" />
                    {selectedDestination.rating}
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {selectedDestination.fullDescription}
                </p>
                
                <div>
                  <h4 className="font-semibold mb-2">Highlights:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {selectedDestination.highlights.map((highlight, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="text-2xl font-bold text-primary">
                    {selectedDestination.price}
                    <span className="text-sm text-muted-foreground ml-1">per person</span>
                  </div>
                  <Button 
                    size="lg"
                    onClick={() => {
                      setSelectedDestination(null);
                      const element = document.getElementById('contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Destinations;