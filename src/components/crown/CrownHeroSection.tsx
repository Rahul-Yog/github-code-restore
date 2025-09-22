import React from 'react';
import { Button } from '@/components/ui/button';

const CrownHeroSection = () => {
  return (
    <section className="bg-muted py-24">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-lg font-medium text-muted-foreground mb-2">Where Caledon Meets Brampton</h2>
            <h1 className="text-4xl lg:text-5xl font-display font-bold text-primary mb-4">
              FREEHOLD TOWNHOMES<br />
              38' & 60' SINGLES
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
              Crown of Caledon is a great new real estate opportunity located conveniently on the Caledon and Brampton border.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
              Request Info
            </Button>
          </div>
          <div className="relative">
            <div className="bg-background rounded-lg shadow-lg p-8">
              <div className="aspect-[4/3] bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground">Home Image Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrownHeroSection;