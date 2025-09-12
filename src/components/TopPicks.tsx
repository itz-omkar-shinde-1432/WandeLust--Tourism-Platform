import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Calendar, Users, MapPin } from 'lucide-react';

const TopPicks = () => {
  const topPicks = [
    {
      id: 1,
      title: "Ranchi Hill Station Adventure",
      description: "Explore the scenic hills of Ranchi with guided trekking and local cultural experiences.",
      image: "/api/placeholder/400/250",
      rating: 4.8,
      reviews: 124,
      price: "₹899",
      duration: "2 Days",
      groupSize: "4-8 people",
      location: "Ranchi, Jharkhand",
      badge: "Most Popular",
      badgeColor: "bg-tourism-sunset"
    },
    {
      id: 2,
      title: "Tribal Heritage Discovery",
      description: "Immerse yourself in the rich tribal culture and traditions of Jharkhand.",
      image: "/api/placeholder/400/250",
      rating: 4.9,
      reviews: 89,
      price: "₹1,299",
      duration: "3 Days",
      groupSize: "6-12 people",
      location: "Khunti, Jharkhand",
      badge: "Editor's Choice",
      badgeColor: "bg-tourism-forest"
    },
    {
      id: 3,
      title: "Waterfall Photography Tour",
      description: "Capture stunning waterfalls and natural beauty with professional photography guidance.",
      image: "/api/placeholder/400/250",
      rating: 4.7,
      reviews: 67,
      price: "₹1,599",
      duration: "4 Days",
      groupSize: "2-6 people",
      location: "Hazaribagh, Jharkhand",
      badge: "New",
      badgeColor: "bg-tourism-ocean"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-tourism-sand/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge className="mb-4 bg-tourism-ocean text-white px-4 py-2">
            ✨ Top Picks of the Month
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Handpicked Adventures
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most loved experiences, carefully selected by travel experts and fellow adventurers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topPicks.map((pick, index) => (
            <Card 
              key={pick.id} 
              className="group overflow-hidden bg-gradient-card shadow-soft hover:shadow-large transition-all duration-500 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <div 
                  className="h-48 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${pick.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <Badge className={`absolute top-4 left-4 ${pick.badgeColor} text-white border-0`}>
                  {pick.badge}
                </Badge>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{pick.rating}</span>
                    <span className="text-xs opacity-80">({pick.reviews} reviews)</span>
                  </div>
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold group-hover:text-tourism-ocean transition-colors">
                  {pick.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm">{pick.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{pick.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{pick.groupSize}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-tourism-sunset" />
                  <span className="text-sm text-muted-foreground">{pick.location}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-tourism-ocean">{pick.price}</span>
                    <span className="text-sm text-muted-foreground ml-1">per person</span>
                  </div>
                  <Button 
                    className="bg-gradient-primary hover:shadow-glow transition-all duration-300 ripple"
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopPicks;