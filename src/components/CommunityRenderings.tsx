import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const CommunityRenderings = () => {
  const renderings = [
    {
      title: "Streetscape View",
      description: "Beautiful tree-lined streets with modern home designs"
    },
    {
      title: "Community Center",
      description: "State-of-the-art amenities for residents"
    },
    {
      title: "Park & Recreation",
      description: "Green spaces and playgrounds for families"
    },
    {
      title: "Entrance Feature",
      description: "Impressive community entrance and landscaping"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Community Renderings
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get a glimpse of what life will be like in Union Village with our 
            detailed community renderings and planned amenities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {renderings.map((rendering, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[16/10] bg-muted flex items-center justify-center border-b">
                <div className="text-center">
                  <div className="text-muted-foreground text-sm mb-1">{rendering.title}</div>
                  <div className="text-xs text-muted-foreground">Community Rendering</div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {rendering.title}
                </h3>
                <p className="text-muted-foreground">
                  {rendering.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityRenderings;