import React from 'react';
import { Button } from '@/components/ui/button';

const CrownHeroSection = () => {
  return (
    <section className="hero-gradient text-primary-foreground py-24">
      <div className="container-custom text-center">
        <h1 className="text-5xl lg:text-6xl font-display font-bold mb-6">
          Crown of Caledon
        </h1>
        <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
          Luxury townhomes and estate homes starting from $730K in beautiful Caledon
        </p>
        <div className="space-x-4">
          <Button className="cta-primary">
            View Homes
          </Button>
          <Button variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
            Schedule Tour
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CrownHeroSection;