import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Navigation, Clock } from "lucide-react";

const CommuteCalculator = () => {
  const [startLocation, setStartLocation] = useState("");
  const [showResults, setShowResults] = useState(false);

  const popularRoutes = [
    { from: "Toronto", time: "1h 30min", distance: "130 km", route: "Via QEW" },
    { from: "Mississauga", time: "1h 15min", distance: "110 km", route: "Via QEW" },
    { from: "Hamilton", time: "45min", distance: "65 km", route: "Via QEW" },
    { from: "Georgina Heights", time: "25min", distance: "22 km", route: "Via Hwy 400 S & QEW" },
    { from: "King City", time: "28min", distance: "25 km", route: "Via Hwy 400 S & QEW" },
    { from: "Bolton", time: "35min", distance: "32 km", route: "Via Hwy 400 S & QEW" }
  ];

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  const handleQuickSelect = (location: string) => {
    setStartLocation(location);
    setShowResults(true);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Navigation className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Calculate Your <span className="text-primary">Commute Time</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              See how easy it is to commute to Stonerose from your current location
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <Card className="border-2">
              <CardContent className="p-6">
                <form onSubmit={handleCalculate} className="space-y-4">
                  <div>
                    <Label htmlFor="start-location" className="text-base font-semibold">
                      Enter Your Starting Location
                    </Label>
                    <div className="relative mt-2">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="start-location"
                        type="text"
                        placeholder="e.g., Toronto, Georgina Heights, Bolton"
                        value={startLocation}
                        onChange={(e) => setStartLocation(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Calculate Commute
                  </Button>
                </form>

                <div className="mt-6">
                  <p className="text-sm font-semibold text-foreground mb-3">Quick Select:</p>
                  <div className="flex flex-wrap gap-2">
                    {["Toronto", "Mississauga", "Hamilton", "Georgina Heights", "Bolton"].map((location) => (
                      <Button
                        key={location}
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuickSelect(location)}
                      >
                        {location}
                      </Button>
                    ))}
                  </div>
                </div>

                {showResults && startLocation && (
                  <Card className="mt-6 bg-primary/5 border-primary">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-foreground mb-1">
                            Estimated Commute from {startLocation}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            For precise directions, use Google Maps or contact our team for detailed route planning
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>

            {/* Popular Routes */}
            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Popular Routes to Stonerose</h3>
                <div className="space-y-3">
                  {popularRoutes.map((route, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors cursor-pointer"
                      onClick={() => handleQuickSelect(route.from)}
                    >
                      <div className="flex-1">
                        <p className="font-semibold text-foreground">{route.from}</p>
                        <p className="text-xs text-muted-foreground">{route.route}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-primary">{route.time}</p>
                        <p className="text-xs text-muted-foreground">{route.distance}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Pro Tip:</strong> With 3-minute access to the QEW highway, 
                    Stonerose offers easy connectivity to the entire GTA region while maintaining affordable pricing.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommuteCalculator;
