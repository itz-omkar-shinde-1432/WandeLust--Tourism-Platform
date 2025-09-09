import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Destinations from '@/components/Destinations';
import Packages from '@/components/Packages';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Destinations />
      <Packages />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
