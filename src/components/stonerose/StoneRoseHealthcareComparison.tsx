import { Check, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const StoneRoseHealthcareComparison = () => {
  const comparisons = [
    {
      benefit: "Commute Time to Hospital",
      nearHospital: "11 minutes",
      elsewhere: "45+ minutes",
      isAdvantage: true
    },
    {
      benefit: "Annual Commute Cost Savings",
      nearHospital: "$3,000+ saved",
      elsewhere: "$0",
      isAdvantage: true
    },
    {
      benefit: "Emergency Call Response",
      nearHospital: "Quick return to hospital",
      elsewhere: "Lengthy travel time",
      isAdvantage: true
    },
    {
      benefit: "Sleep Between Shifts",
      nearHospital: "More time for rest",
      elsewhere: "Less rest time",
      isAdvantage: true
    },
    {
      benefit: "Work-Life Balance",
      nearHospital: "Better quality of life",
      elsewhere: "Long commutes impact wellness",
      isAdvantage: true
    },
    {
      benefit: "Property Investment",
      nearHospital: "Hospital-driven appreciation",
      elsewhere: "Standard market growth",
      isAdvantage: true
    }
  ];

  return (
    <section className="py-12">
      <Card className="border-2 border-primary/20 bg-gradient-to-br from-background to-primary/5">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl text-center">
            Living Near Hospital vs. Living Elsewhere
          </CardTitle>
          <p className="text-center text-muted-foreground mt-2">
            See the real difference for healthcare professionals
          </p>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-primary/20">
                  <th className="text-left p-4 font-semibold text-foreground">Benefit</th>
                  <th className="text-center p-4 font-semibold text-primary">Living Near Hospital</th>
                  <th className="text-center p-4 font-semibold text-muted-foreground">Living Elsewhere</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((item, index) => (
                  <tr 
                    key={index} 
                    className="border-b border-border hover:bg-primary/5 transition-colors"
                  >
                    <td className="p-4 font-medium text-foreground">{item.benefit}</td>
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{item.nearHospital}</span>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <X className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                        <span className="text-muted-foreground">{item.elsewhere}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile-Friendly Cards View */}
          <div className="md:hidden space-y-4 mt-4">
            {comparisons.map((item, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-foreground mb-3">{item.benefit}</h4>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-medium text-primary mb-1">Near Hospital</p>
                        <p className="text-sm text-foreground">{item.nearHospital}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-medium text-muted-foreground mb-1">Elsewhere</p>
                        <p className="text-sm text-muted-foreground">{item.elsewhere}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default StoneRoseHealthcareComparison;
