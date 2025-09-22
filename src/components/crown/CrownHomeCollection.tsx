import React from 'react';
import { Card } from '@/components/ui/card';

const CrownHomeCollection = () => {
  return (
    <section className="section-spacing bg-background-muted">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-primary mb-4">
            Home Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our carefully curated collection of luxury homes.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="luxury-card">
            <h3 className="text-2xl font-display font-semibold text-primary mb-4">The Monarch Collection</h3>
            <p className="text-muted-foreground">Townhomes starting from $730K featuring modern designs and premium finishes.</p>
          </Card>
          
          <Card className="luxury-card">
            <h3 className="text-2xl font-display font-semibold text-primary mb-4">The Royal Collection</h3>
            <p className="text-muted-foreground">Estate homes with spacious layouts and luxury amenities.</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CrownHomeCollection;