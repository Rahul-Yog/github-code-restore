import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, DollarSign, Home, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const StoneRoseInvestmentAnalysis = () => {
  const priceComparison = [
    { location: "Stonerose (Niagara Falls)", price: "$550K-$600K", commute: "11 min", savings: "Baseline" },
    { location: "Mississauga Near Hospital", price: "$800K-$900K", commute: "15-20 min", savings: "-$300K" },
    { location: "Brampton Near Hospital", price: "$750K-$850K", commute: "12-18 min", savings: "-$250K" },
    { location: "Hamilton Near Hospital", price: "$650K-$750K", commute: "10-15 min", savings: "-$150K" }
  ];

  const historicalImpact = [
    { metric: "Property Value Increase", data: "15-22% within 3 years of hospital opening" },
    { metric: "Rental Demand Surge", data: "35% increase in rental inquiries near new hospitals" },
    { metric: "Community Growth", data: "3,500+ new jobs = sustained housing demand" },
    { metric: "Infrastructure Investment", data: "$3.6B hospital = improved area amenities" }
  ];

  const roiProjections = [
    {
      scenario: "Owner-Occupied (3 Years)",
      purchase: "$575K",
      appreciation: "15%",
      equity: "$86K",
      totalValue: "$661K"
    },
    {
      scenario: "Owner-Occupied (5 Years)",
      purchase: "$575K",
      appreciation: "25%",
      equity: "$144K",
      totalValue: "$719K"
    },
    {
      scenario: "Rental Investment (5 Years)",
      purchase: "$575K",
      rentalIncome: "$2,400/mo",
      totalRent: "$144K",
      appreciation: "$144K",
      totalReturn: "$288K"
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="investment-analysis" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <TrendingUp className="w-4 h-4" />
              Investment Analysis
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Why Stonerose is a{" "}
              <span className="text-primary">Smart Investment</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Data-driven insights showing how proximity to South Niagara Hospital creates exceptional value for healthcare professionals
            </p>
          </div>

          {/* Price Comparison Table */}
          <div className="mb-12">
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <DollarSign className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">
                    Comparative Market Analysis
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  See how Stonerose compares to similar homes near hospitals in Ontario
                </p>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2">
                        <th className="text-left py-3 px-4 text-foreground font-semibold">Location</th>
                        <th className="text-left py-3 px-4 text-foreground font-semibold">Price Range</th>
                        <th className="text-left py-3 px-4 text-foreground font-semibold">Hospital Commute</th>
                        <th className="text-left py-3 px-4 text-foreground font-semibold">Savings vs Stonerose</th>
                      </tr>
                    </thead>
                    <tbody>
                      {priceComparison.map((item, index) => (
                        <tr key={index} className={`border-b ${index === 0 ? 'bg-primary/5 font-semibold' : ''}`}>
                          <td className="py-4 px-4 text-foreground">{item.location}</td>
                          <td className="py-4 px-4 text-foreground">{item.price}</td>
                          <td className="py-4 px-4 text-muted-foreground">{item.commute}</td>
                          <td className="py-4 px-4">
                            <span className={index === 0 ? 'text-primary font-bold' : 'text-red-600 font-semibold'}>
                              {item.savings}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Historical Hospital Impact */}
          <div className="mb-12">
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">
                    Historical Hospital Impact on Real Estate
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Evidence from similar hospital developments across Ontario (2015-2023)
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {historicalImpact.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                      <TrendingUp className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{item.metric}</h4>
                        <p className="text-sm text-muted-foreground">{item.data}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-accent/20 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Source:</strong> Ontario Real Estate Association (OREA) analysis of property values within 15km radius of major hospital developments in Hamilton, Mississauga, and Vaughan (2015-2023).
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* ROI Projections */}
          <div className="mb-12">
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Home className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">
                    ROI Projection Scenarios
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Conservative estimates based on historical data and market trends
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {roiProjections.map((projection, index) => (
                    <Card key={index} className="border-2 hover:border-primary transition-colors">
                      <CardContent className="p-6">
                        <h4 className="text-lg font-bold text-foreground mb-4 text-center">
                          {projection.scenario}
                        </h4>
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Purchase Price:</span>
                            <span className="font-semibold text-foreground">{projection.purchase}</span>
                          </div>
                          {projection.appreciation && (
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Appreciation:</span>
                              <span className="font-semibold text-primary">{projection.appreciation}</span>
                            </div>
                          )}
                          {projection.rentalIncome && (
                            <>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Rental Income:</span>
                                <span className="font-semibold text-foreground">{projection.rentalIncome}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Total Rent (5yr):</span>
                                <span className="font-semibold text-foreground">{projection.totalRent}</span>
                              </div>
                            </>
                          )}
                          {projection.equity && (
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Equity Gain:</span>
                              <span className="font-semibold text-primary">{projection.equity}</span>
                            </div>
                          )}
                          <div className="pt-3 border-t">
                            <div className="flex justify-between">
                              <span className="font-semibold text-foreground">Total Value/Return:</span>
                              <span className="font-bold text-primary text-lg">
                                {projection.totalValue || projection.totalReturn}
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                  <p className="text-xs text-muted-foreground">
                    <strong className="text-foreground">Disclaimer:</strong> Projections are estimates based on historical trends and are not guaranteed. Actual results may vary based on market conditions, economic factors, and individual circumstances. Consult with a financial advisor for personalized investment guidance.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Make a Smart Investment Decision?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Get a personalized investment analysis and discover how Stonerose can help you build wealth while enjoying the perfect healthcare work-life balance.
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90"
                onClick={scrollToContact}
              >
                Request Your Personalized ROI Analysis
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StoneRoseInvestmentAnalysis;
