import React from 'react';

const CrownNavigation = () => {
  return (
    <nav className="bg-background border-b border-border shadow-sm p-4">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="text-primary font-display font-bold text-xl">FIELDGATE</div>
          <div className="border-l border-border h-6"></div>
          <h1 className="text-2xl font-display font-bold text-primary">Crown of Caledon</h1>
        </div>
        <div className="space-x-6">
          <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
          <a href="#properties" className="text-foreground hover:text-primary transition-colors">Properties</a>
          <a href="#amenities" className="text-foreground hover:text-primary transition-colors">Amenities</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default CrownNavigation;