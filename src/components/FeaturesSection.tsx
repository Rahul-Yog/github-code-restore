import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const FeaturesSection = () => {
  const features = [
    {
      title: "Freehold Townhomes",
      description: "Modern 3-4 bedroom townhomes with contemporary finishes and spacious layouts."
    },
    {
      title: "38' & 60' Singles",
      description: "Luxury single-family homes with premium features and elegant design."
    },
    {
      title: "Prime Location",
      description: "Conveniently located where Caledon meets Brampton for the best of both worlds."
    },
    {
      title: "Modern Amenities",
      description: "State-of-the-art features and finishes throughout every home."
    },
    {
      title: "Community Features",
      description: "Beautiful landscaping, parks, and community spaces for residents."
    },
    {
      title: "Future Value",
      description: "Investment potential in one of Ontario's fastest developing regions."
    }
  ];

  return (
    <section id="features" className="py-20 lg:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Premium Features & Amenities
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every detail designed for luxury living and modern comfort in your new Crown of Caledon home.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-background border border-border hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;