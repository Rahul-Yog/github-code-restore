import React from 'react';
import { Card } from '@/components/ui/card';

const CrownOverviewSection = () => {
  return (
    <section className="section-spacing bg-background-muted">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-primary mb-4">
            Your Crown Awaits
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover luxury living in Caledon with our collection of premium homes designed for modern families.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="luxury-card text-center">
            <h3 className="text-2xl font-display font-semibold text-primary mb-4">Townhomes</h3>
            <p className="text-muted-foreground">Starting from $730K</p>
          </Card>
          
          <Card className="luxury-card text-center">
            <h3 className="text-2xl font-display font-semibold text-primary mb-4">Estate Homes</h3>
            <p className="text-muted-foreground">Premium designs available</p>
          </Card>
          
          <Card className="luxury-card text-center">
            <h3 className="text-2xl font-display font-semibold text-primary mb-4">Luxury Living</h3>
            <p className="text-muted-foreground">Modern amenities included</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CrownOverviewSection;