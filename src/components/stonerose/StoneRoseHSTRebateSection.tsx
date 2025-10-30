import { DollarSign, TrendingDown, CheckCircle, Calculator } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const StoneRoseHSTRebateSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const homeExamples = [
    {
      name: "R2-INT",
      price: 569900,
      provincial: 45592,
      federal: 28495,
      total: 74087,
      effective: 495813
    },
    {
      name: "R2-END",
      price: 589900,
      provincial: 47192,
      federal: 29495,
      total: 76687,
      effective: 513213
    },
    {
      name: "R2-COR",
      price: 599900,
      provincial: 47992,
      federal: 29995,
      total: 77987,
      effective: 521913
    }
  ];

  const comparisons = [
    {
      aspect: "HST Rebate Eligibility",
      newHome: "Full 8% provincial + 5% federal HST rebated",
      resale: "No HST rebate (HST doesn't apply)"
    },
    {
      aspect: "Maximum Savings",
      newHome: "Up to $130,000",
      resale: "$0 in HST rebates"
    },
    {
      aspect: "Policy Goal",
      newHome: "Boost new construction & support first-time buyers",
      resale: "Existing support unchanged"
    },
    {
      aspect: "Example: $570K Home",
      newHome: "Save $74,087 in HST",
      resale: "No HST savings"
    }
  ];

  return (
    <section id="hst-rebate" className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Banner */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full mb-6 animate-pulse">
              <TrendingDown className="w-5 h-5" />
              <span className="font-bold text-lg">NEW 2025 Policy</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              First-Time Home Buyers Save Up to{" "}
              <span className="text-primary">$130,000</span> in HST
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ontario's groundbreaking HST rebate policy makes homeownership more affordable than ever. 
              Only NEW homes qualify – resale buyers save $0.
            </p>
          </div>

          {/* Main Calculator Card */}
          <Card className="border-2 border-primary/20 mb-12 bg-card shadow-2xl">
            <CardHeader className="bg-primary/5 border-b">
              <div className="flex items-center gap-3">
                <Calculator className="w-8 h-8 text-primary" />
                <div>
                  <CardTitle className="text-2xl">Real Savings Calculator</CardTitle>
                  <p className="text-muted-foreground mt-1">See exactly how much you save on Stonerose homes</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6">
                {homeExamples.map((home) => (
                  <div key={home.name} className="space-y-4 p-6 rounded-lg bg-background border-2 border-primary/10 hover:border-primary/30 transition-all">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-foreground mb-1">{home.name} Unit</h3>
                      <p className="text-sm text-muted-foreground">Purchase Price</p>
                      <p className="text-3xl font-bold text-foreground">${home.price.toLocaleString()}</p>
                    </div>
                    
                    <div className="space-y-2 py-4 border-y border-border">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Provincial HST (8%)</span>
                        <span className="font-semibold text-foreground">${home.provincial.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Federal HST (5%)</span>
                        <span className="font-semibold text-foreground">${home.federal.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <div className="text-center">
                        <p className="text-sm font-semibold text-primary mb-1">Total HST Rebate</p>
                        <p className="text-4xl font-bold text-primary">${home.total.toLocaleString()}</p>
                      </div>
                    </div>
                    
                    <div className="text-center pt-2">
                      <p className="text-sm text-muted-foreground mb-1">Your Effective Price</p>
                      <p className="text-2xl font-bold text-foreground">${home.effective.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <Button onClick={scrollToContact} size="lg" className="text-lg px-8">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Get Pre-Approved for HST Rebate
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Comparison Table */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center text-foreground mb-8">
              New Home vs. Resale: The HST Advantage
            </h3>
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary/10">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Comparison Factor</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-primary">New Home (First-Time Buyer)</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Resale Home (First-Time Buyer)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisons.map((row, index) => (
                      <tr key={index} className="border-b border-border hover:bg-muted/50">
                        <td className="px-6 py-4 text-sm font-medium text-foreground">{row.aspect}</td>
                        <td className="px-6 py-4 text-sm text-primary font-semibold">{row.newHome}</td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">{row.resale}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          {/* Eligibility Requirements */}
          <Card className="bg-background border-2 border-primary/20 mb-12">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-primary" />
                Eligibility Requirements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">First-Time Home Buyer</p>
                    <p className="text-sm text-muted-foreground">You haven't owned a home in the past 4 years</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">New or Substantially Renovated Home</p>
                    <p className="text-sm text-muted-foreground">Stonerose homes qualify as brand new construction</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Agreement Date</p>
                    <p className="text-sm text-muted-foreground">Signed on or after May 27, 2025</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Primary Residence</p>
                    <p className="text-sm text-muted-foreground">Property must be your principal place of residence</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">5</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Home Value</p>
                    <p className="text-sm text-muted-foreground">Full rebate up to $1M (phase-out to $1.5M)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">6</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Perfect Timing</p>
                    <p className="text-sm text-muted-foreground">Stonerose Spring 2027 occupancy qualifies!</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Final CTA */}
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-2 border-primary">
            <CardContent className="p-8 text-center">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Lock In Your $74K+ Savings Today
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                This is a limited-time opportunity. With agreements signed after May 27, 2025 qualifying for 
                the full HST rebate and Stonerose occupancy in Spring 2027, now is the perfect time to secure 
                your pre-construction home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={scrollToContact} size="lg" className="text-lg px-8">
                  Contact Our Relocation Specialist
                </Button>
                <Button 
                  onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8"
                >
                  Learn More (FAQ)
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StoneRoseHSTRebateSection;
