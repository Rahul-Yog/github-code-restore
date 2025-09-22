import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const EnhancedHomeCollection = () => {
  const homeTypes = [
    {
      name: "60' Family Singles",
      type: "Detached Homes",
      size: "2,800 - 3,500 sq ft",
      bedrooms: "4-5 Bedrooms",
      price: "From $1.4M",
      features: ["Double Car Garage", "Premium Finishes", "Open Concept", "Master Ensuite"]
    },
    {
      name: "38' Family Singles",
      type: "Detached Homes",
      size: "2,200 - 2,800 sq ft", 
      bedrooms: "3-4 Bedrooms",
      price: "From $1.1M",
      features: ["Double Car Garage", "Modern Kitchen", "Finished Basement", "Private Yard"]
    },
    {
      name: "Freehold Townhomes",
      type: "Townhomes",
      size: "1,800 - 2,400 sq ft",
      bedrooms: "3-4 Bedrooms", 
      price: "From $900K",
      features: ["Attached Garage", "Contemporary Design", "Walk-in Closets", "Premium Finishes"]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Crown of Caledon Home Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover exceptional freehold townhomes and family singles by award-winning Fieldgate Homes, 
            each designed to maximize comfort and luxury in Caledon's newest master-planned community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homeTypes.map((home, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] bg-muted flex items-center justify-center border-b">
                <div className="text-center">
                  <div className="text-muted-foreground text-sm">{home.name}</div>
                  <div className="text-xs text-muted-foreground">Exterior Rendering</div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-primary">{home.name}</CardTitle>
                <div className="text-sm text-muted-foreground">{home.type}</div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-medium">{home.size}</div>
                    <div className="text-muted-foreground">Square Footage</div>
                  </div>
                  <div>
                    <div className="font-medium">{home.bedrooms}</div>
                    <div className="text-muted-foreground">Layout</div>
                  </div>
                </div>
                
                <div className="text-2xl font-bold text-primary">{home.price}</div>
                
                <div className="space-y-2">
                  <div className="text-sm font-medium">Key Features:</div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {home.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>• {feature}</li>
                    ))}
                  </ul>
                </div>
                
                <Button variant="outline" className="w-full">
                  View Floor Plan
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnhancedHomeCollection;