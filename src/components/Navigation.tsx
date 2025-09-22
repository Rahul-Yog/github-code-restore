import React from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  return (
    <nav className="bg-background border-b border-border shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <div className="text-sm font-medium text-muted-foreground">FIELDGATE</div>
            <div className="h-6 w-px bg-border"></div>
            <div className="text-xl font-bold text-primary">Crown of Caledon</div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#overview" className="text-foreground hover:text-primary transition-colors">
              Overview
            </a>
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#location" className="text-foreground hover:text-primary transition-colors">
              Location
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <Button className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground">
            Request Info
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;