import React from 'react';

const CrownAmenities = () => {
  const amenities = [
    'Modern Kitchen Designs',
    'Premium Finishes',
    'Energy Efficient Features',
    'Spacious Layouts',
    'Beautiful Landscapes',
    'Community Features'
  ];

  return (
    <section className="section-spacing">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-primary mb-4">
            Premium Amenities
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every detail designed for luxury living.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {amenities.map((amenity, index) => (
            <div key={index} className="trust-indicator justify-center">
              {amenity}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CrownAmenities;