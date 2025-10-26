import { MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const StoneRoseGoogleMap = () => {
  const propertyAddress = "3770 Montrose Rd, Niagara Falls, ON";
  const encodedAddress = encodeURIComponent(propertyAddress);
  const mapEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dN1dTYvKEoYZvE&q=${encodedAddress}&zoom=13`;
  const mapDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;

  const nearbyAmenities = [
    { name: "Golf Courses", icon: "⛳", color: "bg-green-500" },
    { name: "Dining & Shopping", icon: "🍽️", color: "bg-orange-500" },
    { name: "Healthcare", icon: "🏥", color: "bg-red-500" },
    { name: "Parks & Recreation", icon: "🌳", color: "bg-emerald-500" },
  ];

  return (
    <div className="space-y-4">
      <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden border-2 border-border shadow-lg">
        <iframe
          title="Stonerose Location Map"
          src={mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 bg-muted/30 rounded-lg border border-border">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm font-medium">
            <MapPin className="h-4 w-4 text-primary" />
            <span>Nearby Amenities</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {nearbyAmenities.map((amenity, index) => (
              <div
                key={index}
                className="flex items-center gap-1.5 px-2 py-1 bg-background rounded-md border border-border text-xs"
              >
                <span className="text-base">{amenity.icon}</span>
                <span>{amenity.name}</span>
              </div>
            ))}
          </div>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="shrink-0"
          onClick={() => window.open(mapDirectionsUrl, '_blank')}
        >
          <ExternalLink className="h-4 w-4 mr-2" />
          Get Directions
        </Button>
      </div>
    </div>
  );
};

export default StoneRoseGoogleMap;
