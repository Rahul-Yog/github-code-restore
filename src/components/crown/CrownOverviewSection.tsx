import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CrownOverviewSection = () => {
  return (
    <section className="section-spacing bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-muted rounded-lg shadow-lg p-8">
              <div className="aspect-[4/3] bg-background rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground">Home Image Placeholder</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary mb-6">
              Discover Crown of Caledon – Your Gateway to the Best of Caledon and Brampton
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              <strong>Crown of Caledon</strong> is a great new real estate opportunity located conveniently on the Caledon and Brampton border. This upcoming community is designed with families, professionals and investors in mind who want the best of both worlds, being close to urban amenities while enjoying nature.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
              Request Info
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrownOverviewSection;