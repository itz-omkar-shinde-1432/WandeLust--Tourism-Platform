import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import WalletBalance from './WalletBalance';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = ['hero', 'destinations', 'packages', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', sectionId: 'hero' },
    { label: 'Destinations', sectionId: 'destinations' },
    { label: 'Packages', sectionId: 'packages' },
    { label: 'Testimonials', sectionId: 'testimonials' },
    { label: 'Contact', sectionId: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'glass backdrop-blur-md shadow-medium' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold font-poppins gradient-text">
            WanderLust
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.sectionId}
                onClick={() => scrollToSection(item.sectionId)}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-tourism-ocean ${
                  activeSection === item.sectionId 
                    ? 'text-tourism-ocean' 
                    : 'text-foreground hover:text-tourism-ocean'
                }`}
              >
                {item.label}
                {activeSection === item.sectionId && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary transform scale-x-100 transition-transform duration-300" />
                )}
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <WalletBalance />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass backdrop-blur-md border-t animate-fade-in">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.sectionId}
                  onClick={() => scrollToSection(item.sectionId)}
                  className={`block w-full text-left px-4 py-3 text-foreground hover:text-tourism-ocean hover:bg-tourism-ocean/10 transition-all duration-200 rounded-lg mx-2 ${
                    activeSection === item.sectionId ? 'text-tourism-ocean bg-tourism-ocean/10' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center justify-between px-4 py-2 border-t border-border mt-4 pt-4">
                <LanguageSwitcher />
                <WalletBalance />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;