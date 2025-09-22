import React from 'react';

const CrownNavigation = () => {
  return (
    <nav className="bg-primary text-primary-foreground p-4">
      <div className="container-custom flex justify-between items-center">
        <h1 className="text-2xl font-display font-bold">Crown of Caledon</h1>
        <div className="space-x-6">
          <a href="#home" className="hover:text-accent">Home</a>
          <a href="#properties" className="hover:text-accent">Properties</a>
          <a href="#amenities" className="hover:text-accent">Amenities</a>
          <a href="#contact" className="hover:text-accent">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default CrownNavigation;