import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const quickLinks = [
    { label: 'Home', sectionId: 'hero' },
    { label: 'Destinations', sectionId: 'destinations' },
    { label: 'Packages', sectionId: 'packages' },
    { label: 'Testimonials', sectionId: 'testimonials' }
  ];

  const companyLinks = [
    { label: 'About Us', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">WanderLust</h3>
            <p className="text-primary-foreground/80 text-sm">
              Creating unforgettable travel experiences since 2014. 
              We're passionate about connecting you with the world's most amazing destinations.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  className="hover:bg-primary-foreground/10 text-primary-foreground"
                  asChild
                >
                  <a 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.sectionId}>
                  <button
                    onClick={() => scrollToSection(link.sectionId)}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Mail className="w-4 h-4" />
                <span>info@wanderlust.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Phone className="w-4 h-4" />
                <span>+919552388484</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>
                  123 Adventure Street,Ranchi,<br />
                  Zarkhand,India 834002
                </span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
          <div>
            © 2025 WanderLust Travel Agency. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-foreground transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;