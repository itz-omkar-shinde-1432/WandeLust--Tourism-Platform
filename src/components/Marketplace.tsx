import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart, Truck } from 'lucide-react';

const Marketplace = () => {
  const products = [
    {
      id: 1,
      name: "Traditional Tribal Mask",
      description: "Authentic handcrafted mask from Jharkhand artisans",
      price: "₹450",
      originalPrice: "₹599",
      image: "/api/placeholder/200/200",
      rating: 4.6,
      category: "Handicrafts",
      discount: "25% OFF"
    },
    {
      id: 2,
      name: "Dokra Metal Art",
      description: "Beautiful brass sculpture using ancient lost-wax technique",
      price: "₹850",
      originalPrice: "₹1,100",
      image: "/api/placeholder/200/200",
      rating: 4.8,
      category: "Art & Crafts",
      discount: "23% OFF"
    },
    {
      id: 3,
      name: "Bamboo Wind Chime",
      description: "Eco-friendly wind chime made from local bamboo",
      price: "₹299",
      originalPrice: "₹399",
      image: "/api/placeholder/200/200",
      rating: 4.4,
      category: "Home Decor",
      discount: "25% OFF"
    },
    {
      id: 4,
      name: "Tribal Jewelry Set",
      description: "Silver-plated traditional jewelry with colorful beads",
      price: "₹650",
      originalPrice: "₹899",
      image: "/api/placeholder/200/200",
      rating: 4.7,
      category: "Jewelry",
      discount: "28% OFF"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-tourism-sand/5 via-background to-tourism-forest/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge className="mb-4 bg-tourism-forest text-white px-4 py-2">
            🛍️ Local Marketplace
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Authentic Jharkhand Crafts
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Support local artisans and take home a piece of Jharkhand's rich cultural heritage.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group overflow-hidden bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-500 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <div 
                  className="h-48 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 cursor-pointer"
                  style={{ backgroundImage: `url(${product.image})` }}
                />
                <Badge className="absolute top-2 left-2 bg-tourism-sunset text-white">
                  {product.discount}
                </Badge>
                <Badge variant="secondary" className="absolute top-2 right-2">
                  {product.category}
                </Badge>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{product.rating}</span>
                </div>
                
                <h3 className="font-semibold text-lg mb-2 group-hover:text-tourism-ocean transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-tourism-ocean">{product.price}</span>
                    <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                  </div>
                </div>

                <Button 
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 ripple"
                  size="sm"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Truck className="w-5 h-5 text-tourism-forest" />
            <span className="text-sm text-muted-foreground">Free delivery across Jharkhand • 7-day return policy</span>
          </div>
          <Button variant="outline" size="lg" className="hover:bg-tourism-forest hover:text-white">
            View Complete Collection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Marketplace;