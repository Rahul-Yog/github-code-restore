import React from 'react';
import { Button } from '@/components/ui/button';

const CrownLocationSection = () => {
  return (
    <section className="section-spacing bg-muted">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary mb-6">
            Prime Location – The Best of Two Worlds
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Caledon is known for its quiet, picturesque lands, hilly terrain and great community. In contrast, Brampton is a dynamic, multicultural city with access to modern amenities, excellent schools and accessibility. At Crown of Caledon, you have the best of both worlds!
          </p>
          <div className="flex justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
              Learn More About Location
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrownLocationSection;