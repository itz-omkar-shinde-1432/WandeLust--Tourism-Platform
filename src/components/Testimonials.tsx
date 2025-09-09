import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import sarahImage from '@/assets/testimonial-sarah.jpg';
import mikeImage from '@/assets/testimonial-mike.jpg';
import emmaImage from '@/assets/testimonial-emma.jpg';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: number;
  quote: string;
  trip: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    image: sarahImage,
    rating: 5,
    quote: "This was hands down the most incredible adventure I've ever experienced! The attention to detail and the breathtaking destinations exceeded all my expectations. I can't wait to book my next trip!",
    trip: "Himalayan Adventure"
  },
  {
    id: 2,
    name: "Mike Chen",
    location: "Toronto, Canada",
    image: mikeImage,
    rating: 5,
    quote: "From the moment I arrived, everything was perfectly organized. The local guides were knowledgeable and friendly, and the experiences were truly authentic. Highly recommend WanderLust for anyone seeking genuine adventures!",
    trip: "Amazon Expedition"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    location: "London, UK",
    image: emmaImage,
    rating: 5,
    quote: "The heritage tour was absolutely fascinating! Every historical site came alive through the expert storytelling of our guides. This trip deepened my appreciation for ancient cultures and created memories I'll treasure forever.",
    trip: "Historic Rome"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our adventurous travelers have to say about their experiences with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-12 h-12" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star key={index} className="w-4 h-4 fill-current text-yellow-500" />
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                {/* Profile */}
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    <p className="text-xs text-primary font-medium">{testimonial.trip}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Happy Travelers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Destinations</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">4.9</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;