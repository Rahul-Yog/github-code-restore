import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const OverviewSection = () => {
  const highlights = [
    {
      title: "Prime Location",
      description: "Strategically located with easy access to major highways, shopping, and amenities.",
    },
    {
      title: "Modern Design",
      description: "Contemporary architecture with premium finishes and thoughtful layouts.",
    },
    {
      title: "Community Living", 
      description: "Beautifully landscaped neighborhoods designed for families and professionals.",
    },
    {
      title: "Investment Value",
      description: "Exceptional value proposition in one of the area's most desirable locations.",
    }
  ];

  return (
    <section id="overview" className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Why Choose Union Village?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our community offers everything you need for modern living, from premium amenities 
            to convenient location and exceptional value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-primary">
                  {highlight.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;