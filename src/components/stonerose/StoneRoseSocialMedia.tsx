import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Linkedin, Twitter, Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const StoneRoseSocialMedia = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const socialPosts = [
    {
      platform: "Instagram",
      icon: Instagram,
      post: `🏥 Healthcare Professionals: Your Dream Home Awaits! 🏡

📍 Just 11 minutes from South Niagara Hospital
💰 Pre-Construction Pricing from Mid-$500Ks
🔑 Move in 2027, Hospital Opens 2028
⚡ 3 minutes to QEW - Perfect for shift work!

Lock in today's prices before construction begins Summer 2026. Your morning commute just became a dream! ☕

📲 DM us or visit link in bio to schedule your private tour

#NiagaraFalls #PreConstructionHomes #HealthcareProfessionals #NurseLife #DoctorLife #SouthNiagaraHospital #NewHomes #TownhomesForSale #NiagaraRealEstate #InvestmentProperty #HomesForSaleNiagaraFalls #MedicalProfessionals #NiagaraLiving #PreConstruction #RealEstateInvestment #HealthcareWorkers #DreamHome #TownhomeLife #NiagaraHomes #FutureHome`,
      color: "bg-gradient-to-br from-purple-600 to-pink-600"
    },
    {
      platform: "Facebook",
      icon: Facebook,
      post: `🏥 Pre-Construction Homes Near South Niagara Hospital - Perfect for Healthcare Professionals! 🏡

Are you a healthcare professional tired of long commutes? We have the perfect solution!

✨ What Makes This Special:
🏥 Only 11 minutes from the new $3.6B South Niagara Hospital
💰 Starting from Mid-$500Ks with Pre-Construction Pricing
📅 Move in 2027, Hospital Opens 2028 - Perfect Timing!
🚗 3 minutes to QEW for easy highway access
🏘️ Beautiful townhomes by Treasure Hill Homes (20+ years, 100% delivery)

🎯 Ideal for:
👨‍⚕️ Doctors & Nurses
🚑 Emergency Response Teams
💼 Hospital Administrators
🏥 All Healthcare Professionals

⚡ Special Benefits for Healthcare Workers:
• Minimize your daily commute
• More time for rest between shifts
• Quick response for emergency calls
• Long-term investment as hospital opens

📞 Don't miss out on pre-construction pricing! Contact us today to learn more and schedule your private tour.

🔗 Visit: caledonhome.ca/niagara-falls-homes-near-hospital

#NiagaraFalls #PreConstructionHomes #HealthcareProfessionals #SouthNiagaraHospital #NewHomes #RealEstate #Townhomes #NiagaraRealEstate #HomesForSale #InvestmentProperty #HealthcareWorkers #NurseLife #DoctorLife #PreConstruction #TreasureHillHomes`,
      color: "bg-blue-600"
    },
    {
      platform: "LinkedIn",
      icon: Linkedin,
      post: `Strategic Real Estate Opportunity for Healthcare Professionals 🏥

The new $3.6B South Niagara Hospital represents more than healthcare infrastructure—it's a unique real estate opportunity for medical professionals.

Stone Rose Development offers pre-construction townhomes just 11 minutes from the hospital site, with move-in dates strategically timed for Spring 2027, one year before the hospital's 2028 opening.

Key Investment Highlights:
• Pre-construction pricing from Mid-$500Ks
• 11-minute commute to South Niagara Hospital
• 3-minute access to QEW (Highway 420)
• Developed by Treasure Hill Homes (20+ years experience, 100% delivery record)
• Strategic timing: Secure now, move in 2027, hospital opens 2028

For Healthcare Professionals:
✓ Minimize daily commute time
✓ Enhanced work-life balance
✓ Quick emergency response capability
✓ Property value appreciation potential as hospital infrastructure develops

This development addresses the critical need for quality housing near major healthcare facilities, offering both lifestyle benefits and investment potential.

Interested in learning more? Visit: caledonhome.ca/niagara-falls-homes-near-hospital

#RealEstate #HealthcareRealEstate #PreConstruction #NiagaraFalls #InvestmentOpportunity #HealthcareProfessionals #MedicalProfessionals #RealEstateInvestment #PropertyInvestment #SouthNiagaraHospital #NewDevelopment #TownhomesForSale`,
      color: "bg-blue-700"
    },
    {
      platform: "Twitter/X",
      icon: Twitter,
      post: `🏥 Healthcare pros: Your dream home is 11 min from South Niagara Hospital!

✅ Pre-construction from Mid-$500Ks
✅ Move in 2027, hospital opens 2028
✅ 3 min to QEW
✅ Perfect for shift work

Lock in today's pricing before Summer 2026! 🏡

Learn more: caledonhome.ca/niagara-falls-homes-near-hospital

#NiagaraFalls #PreConstruction #HealthcareHomes #RealEstate #Nurses #Doctors #Investment`,
      color: "bg-black"
    }
  ];

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      toast.success("Copied to clipboard!");
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      toast.error("Failed to copy");
    }
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Social Media Promotion Kit
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready-to-use posts optimized for each platform. Click to copy and share!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {socialPosts.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className={`${item.color} text-white p-2 rounded-lg`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    {item.platform} Post
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted/50 p-4 rounded-lg max-h-64 overflow-y-auto">
                    <pre className="whitespace-pre-wrap text-sm text-foreground font-sans">
                      {item.post}
                    </pre>
                  </div>
                  <Button
                    onClick={() => copyToClipboard(item.post, index)}
                    className="w-full"
                    variant={copiedIndex === index ? "default" : "outline"}
                  >
                    {copiedIndex === index ? (
                      <>
                        <Check className="w-4 h-4 mr-2" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-2" />
                        Copy {item.platform} Post
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="mt-8 max-w-4xl mx-auto bg-primary/5 border-2 border-primary/20">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-foreground mb-3">
              📸 Pro Tips for Social Media Success
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>✓ Use high-quality images of the townhomes and surrounding area</li>
              <li>✓ Post during peak engagement times (7-9 AM, 12-1 PM, 5-7 PM)</li>
              <li>✓ Tag relevant healthcare groups and Niagara Falls location pages</li>
              <li>✓ Engage with comments within the first hour for better reach</li>
              <li>✓ Consider running targeted ads to healthcare professionals in the region</li>
              <li>✓ Share testimonials from healthcare professionals who've registered</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default StoneRoseSocialMedia;
