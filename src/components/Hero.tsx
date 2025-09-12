import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import heroImage from '@/assets/hero-beach.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden particles">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed transition-transform duration-1000"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          filter: 'brightness(0.6)',
          transform: 'translateZ(0)'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-bounce-gentle" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-bounce-gentle" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-white rounded-full animate-bounce-gentle" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl animate-fade-in-up">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight font-poppins">
          Discover Your Next
          <span className="block text-tourism-sand animate-slide-in-right" style={{ animationDelay: '0.5s' }}>
            Adventure
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '1s' }}>
          Explore breathtaking destinations, create unforgettable memories, 
          and experience the world like never before with our curated travel experiences.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <Button 
            size="lg" 
            onClick={() => scrollToSection('destinations')}
            className="bg-gradient-primary hover:shadow-glow text-white px-10 py-4 text-lg font-semibold ripple transform hover:scale-105 transition-all duration-300"
          >
            Explore Now
            <ArrowDown className="ml-2 animate-bounce" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            onClick={() => scrollToSection('packages')}
            className="glass border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-10 py-4 text-lg font-semibold backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
          >
            View Packages
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center">
          <ArrowDown className="text-white/80 w-6 h-6 mb-2" />
          <span className="text-white/60 text-sm font-medium">Scroll Down</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;