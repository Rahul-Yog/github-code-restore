import { Calendar, Home, Building2, Hospital, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const StoneRoseTimeline = () => {
  const timelineEvents = [
    {
      year: "2025",
      quarter: "Q4",
      title: "Pre-Construction Phase",
      description: "Secure your home now at pre-construction pricing. Lock in today's rates.",
      icon: Home,
      status: "current",
      value: "Starting Mid-$500Ks"
    },
    {
      year: "2026",
      quarter: "Summer",
      title: "Construction Begins",
      description: "Ground breaking and foundation work commences. Your investment grows.",
      icon: Building2,
      status: "upcoming",
      value: "Value Rising"
    },
    {
      year: "2027",
      quarter: "Spring",
      title: "First Occupancy",
      description: "Move into your brand new home. Get settled before the hospital opens.",
      icon: Calendar,
      status: "upcoming",
      value: "Move-In Ready"
    },
    {
      year: "2028",
      quarter: "Summer",
      title: "Hospital Opens",
      description: "$3.6B South Niagara Hospital welcomes its first patients. Your commute begins.",
      icon: Hospital,
      status: "future",
      value: "11-Min Commute"
    },
    {
      year: "2029+",
      quarter: "",
      title: "Property Appreciation",
      description: "Hospital infrastructure drives long-term value growth in the area.",
      icon: TrendingUp,
      status: "future",
      value: "Strong ROI"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "current":
        return "bg-primary text-primary-foreground border-primary";
      case "upcoming":
        return "bg-accent text-accent-foreground border-accent";
      case "future":
        return "bg-muted text-muted-foreground border-muted-foreground/30";
      default:
        return "bg-muted";
    }
  };

  return (
    <section className="py-12">
      <div className="text-center mb-10">
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
          Hospital Development Timeline
        </h3>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Strategic timing: Buy pre-construction now, move in 2027, hospital opens 2028
        </p>
      </div>

      {/* Desktop Timeline */}
      <div className="hidden md:block relative">
        {/* Timeline Line */}
        <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-muted" />

        <div className="grid grid-cols-5 gap-4">
          {timelineEvents.map((event, index) => {
            const Icon = event.icon;
            return (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className={`absolute top-16 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full border-4 ${getStatusColor(event.status)} flex items-center justify-center z-10`}>
                  <Icon className="w-5 h-5" />
                </div>

                {/* Event Card */}
                <Card className={`mt-32 border-2 ${event.status === 'current' ? 'border-primary shadow-lg' : 'border-border'}`}>
                  <CardContent className="p-4 text-center">
                    <div className="text-sm font-semibold text-primary mb-1">
                      {event.year} {event.quarter}
                    </div>
                    <h4 className="text-base font-bold text-foreground mb-2">
                      {event.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-3">
                      {event.description}
                    </p>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${event.status === 'current' ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>
                      {event.value}
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Timeline */}
      <div className="md:hidden space-y-6">
        {timelineEvents.map((event, index) => {
          const Icon = event.icon;
          return (
            <div key={index} className="relative pl-12">
              {/* Timeline Line */}
              {index < timelineEvents.length - 1 && (
                <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-muted" />
              )}

              {/* Timeline Dot */}
              <div className={`absolute left-0 top-2 w-10 h-10 rounded-full border-4 ${getStatusColor(event.status)} flex items-center justify-center`}>
                <Icon className="w-5 h-5" />
              </div>

              {/* Event Card */}
              <Card className={`border-2 ${event.status === 'current' ? 'border-primary shadow-lg' : 'border-border'}`}>
                <CardContent className="p-4">
                  <div className="text-sm font-semibold text-primary mb-1">
                    {event.year} {event.quarter}
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">
                    {event.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    {event.description}
                  </p>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${event.status === 'current' ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>
                    {event.value}
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>

      {/* Call-to-Action */}
      <Card className="mt-8 bg-primary/5 border-2 border-primary/20">
        <CardContent className="p-6 text-center">
          <p className="text-lg font-semibold text-foreground mb-2">
            ⏰ Limited Time: Pre-Construction Pricing Available
          </p>
          <p className="text-muted-foreground">
            Lock in your home now before construction begins in Summer 2026 and prices increase
          </p>
        </CardContent>
      </Card>
    </section>
  );
};

export default StoneRoseTimeline;
