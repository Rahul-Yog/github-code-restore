import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const StoneRoseFAQSection = () => {
  const faqs = [
    {
      question: "What is the 2025 Ontario HST rebate for first-time home buyers?",
      answer: "Ontario's new HST rebate policy provides first-time home buyers purchasing NEW homes with a full rebate of both provincial (8%) and federal (5%) HST—totaling 13% savings. This means up to $130,000 in savings on eligible homes. The rebate applies to newly constructed homes valued up to $1 million. Agreements signed on or after May 27, 2025 qualify. The property must be your primary residence. Resale homes do NOT qualify since HST doesn't apply to resale transactions."
    },
    {
      question: "How much can I save with the HST rebate on a Stonerose home?",
      answer: "Stonerose first-time buyers save substantial amounts through the HST rebate: R2-INT ($569,900): Save $74,087 → Effective price $495,813. R2-END ($589,900): Save $76,687 → Effective price $513,213. R2-COR ($599,900): Save $77,987 → Effective price $521,913. This is a MASSIVE advantage over resale homes, where buyers save $0 in HST rebates."
    },
    {
      question: "When does the Ontario HST rebate take effect?",
      answer: "The HST rebate applies to purchase agreements signed on or after May 27, 2025. Stonerose is PERFECTLY timed—with Spring 2027 occupancy, your purchase qualifies for the full rebate. You'll move in before the South Niagara Hospital opens in Summer 2028."
    },
    {
      question: "Do I qualify as a first-time home buyer for the HST rebate?",
      answer: "You're considered a first-time home buyer if you haven't owned a home in the past 4 years. Both you and your spouse must meet this requirement if purchasing jointly. You'll need to complete CRA forms to claim the rebate. The property must be your primary residence."
    },
    {
      question: "Why is buying new at Stonerose better than resale for first-time buyers?",
      answer: "New homes at Stonerose offer overwhelming advantages: 1) HST REBATE: Save $74K-$78K through 13% HST rebate. Resale buyers save $0. 2) PRE-CONSTRUCTION PRICING: Lock in today's prices. 3) HOSPITAL PROXIMITY: 11 minutes to hospital opening 2028. 4) MODERN FEATURES: Brand new construction with warranties. 5) FLEXIBLE DEPOSITS: $60K over 300 days."
    },
    {
      question: "How far is Stonerose from South Niagara Hospital?",
      answer: "Stonerose townhomes are located approximately 11 minutes from the $3.6 billion South Niagara Hospital, offering a short and convenient commute. This proximity is ideal for healthcare professionals working various shifts at the state-of-the-art facility opening Summer 2028."
    },
    {
      question: "Are there special mortgage incentives for healthcare workers?",
      answer: "We provide information about flexible deposit plans and potential financing options designed to assist healthcare professionals. We work with mortgage specialists who understand the unique financial situations of healthcare workers and can help structure appropriate financing solutions."
    },
    {
      question: "What's the commute like for shift workers?",
      answer: "Stonerose is strategically located just 11 minutes from the $3.6B South Niagara Hospital with 3-minute QEW access, making it ideal for healthcare professionals working various shifts. With reduced traffic during night shifts, commute times are even faster. The route via Montrose Road is well-lit and safe for early morning or late-night commutes."
    },
    {
      question: "Can I move in before the hospital opens?",
      answer: "Yes! First occupancy at Stonerose is Spring 2027, giving you over a year to settle into your new home before the South Niagara Hospital opens in Summer 2028. You can secure your home now at pre-construction pricing, move in when ready, and be perfectly positioned when the hospital opens. Construction commences Summer 2026."
    },
    {
      question: "What deposit structure does Stonerose offer?",
      answer: "Stonerose offers an attractive and flexible deposit structure: $10,000 on signing, then $5,000 every 30 days for 10 payments, totaling $60,000 spread over 300 days. This extended payment schedule is designed to make homeownership accessible for healthcare professionals while giving you time to save and plan your investment."
    },
    {
      question: "How does Niagara Falls compare to GTA pricing?",
      answer: "Stonerose offers significant savings compared to GTA markets. Similar homes in Mississauga, Brampton, or Oakville typically cost $200,000-$300,000 more. With Stonerose starting from the mid-$500Ks, healthcare professionals can own a modern, spacious townhome for substantially less while enjoying the same or better quality of life."
    },
    {
      question: "What amenities are near Stonerose?",
      answer: "Stonerose is situated in a family-friendly area with excellent amenities nearby. Within a short drive, you'll find major shopping centers, quality schools, parks and recreational facilities, restaurants and entertainment, and easy QEW access for GTA connections. The location balances suburban tranquility with urban convenience."
    },
    {
      question: "Is this a good investment opportunity?",
      answer: "Yes, for several reasons: 1) Pre-construction pricing locks in today's rates before appreciation, 2) The South Niagara Hospital opening in 2028 will drive long-term demand and property values, 3) Healthcare infrastructure historically boosts surrounding real estate markets, and 4) Niagara's growing healthcare sector ensures sustained demand. Plus, you'll benefit from potential equity growth during the construction period."
    },
    {
      question: "What home designs are available?",
      answer: "Stonerose Phase 1 features modern townhomes with up to 5 bedrooms and 2-car garages, starting from the mid-$500Ks. Homes include 9ft smooth ceilings on main floor, vinyl flooring, kitchen appliance package plus washer & dryer, air conditioning, and designer-curated packages. The Genius Package features Napoleon electric fireplace and quartz countertops throughout. Bonus: 2-year free POTL fee and $0 development charges!"
    },
    {
      question: "How do I get started?",
      answer: "Getting started is easy! You can: 1) Download our free Healthcare Relocation Guide above, 2) Schedule a private tour to see the sales center and model homes, 3) Speak with our healthcare relocation specialist who understands your unique needs, or 4) Complete the contact form below and we'll reach out within 24 hours with all the information you need."
    },
    {
      question: "What types of healthcare professionals are buying at Stonerose?",
      answer: "We've helped a diverse range of healthcare professionals: registered nurses, physicians and specialists, medical residents, healthcare administrators, paramedics and emergency medical technicians, and allied health professionals (physiotherapists, respiratory therapists, etc.). All find the location and pricing ideal for their needs."
    },
    {
      question: "Can I customize my Stonerose home for healthcare needs?",
      answer: "Yes! During the pre-construction phase, you can work with our design center to customize features. Popular healthcare professional upgrades include: home office spaces for telehealth, enhanced soundproofing for shift workers, upgraded blackout window treatments, and additional parking for on-call vehicles. Our team can guide you through available customizations."
    },
    {
      question: "How does the South Niagara Hospital opening affect property values?",
      answer: "Historical data from similar hospital developments shows property values within 15km typically appreciate 15-22% within 3 years of opening. The $3.6B investment in South Niagara Hospital, combined with 3,500+ new jobs, creates sustained demand. By purchasing now at pre-construction pricing, you lock in today's rates before this appreciation occurs."
    },
    {
      question: "Is public transit available to the hospital from Stonerose?",
      answer: "Yes! Niagara Region Transit serves the area with multiple routes. Routes 113, 109, 213, and 60/65 provide connections throughout Niagara Falls. The Niagara Falls GO Station is 10-12 minutes away, offering connections to the broader GTA. New transit routes will likely be added to serve the hospital when it opens in 2028."
    },
    {
      question: "What if I need to relocate before the hospital opens?",
      answer: "Your Stonerose home maintains strong resale value thanks to pre-construction pricing and growing demand. If you need to relocate before occupancy, assignment sales are typically permitted (subject to builder approval and fees). Many buyers also choose to rent their homes to other healthcare professionals, creating rental income while building equity."
    },
    {
      question: "Are there other hospitals near Stonerose for employment?",
      answer: "Yes! While South Niagara Hospital is the closest (11 minutes), you're also near: Greater Niagara General Hospital (15 minutes), Niagara Health - St. Catharines Site (20 minutes), and Hamilton Health Sciences (45 minutes). This gives you flexibility for career opportunities throughout the region."
    },
    {
      question: "What about parking for healthcare workers with multiple vehicles?",
      answer: "Every Stonerose home includes a 2-car garage, with additional driveway parking. This is ideal for healthcare professionals who may have personal vehicles plus on-call vehicles, or households where both partners work in healthcare. Guest parking is also available throughout the community."
    },
    {
      question: "How do Stonerose homes near hospital compare in energy efficiency?",
      answer: "All Stonerose homes meet or exceed Ontario Building Code energy standards, featuring modern insulation, energy-efficient HVAC systems, and Energy Star appliances. This means lower utility bills—important for healthcare professionals managing variable income during residency or saving for the future."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Frequently Asked{" "}
              <span className="text-primary">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about living near Niagara's new hospital 
              and purchasing a pre-construction home at Stonerose.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Card className="border-2">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left px-6 hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>

          {/* Additional Help */}
          <Card className="mt-8 bg-primary/5 border-2 border-primary/20">
            <div className="p-6 text-center">
              <p className="text-foreground mb-4">
                <strong>Still have questions?</strong> Our healthcare relocation specialists 
                are here to help you navigate every step of your home buying journey.
              </p>
              <p className="text-sm text-muted-foreground">
                Contact us anytime at{" "}
                 <a href="tel:+14169038026" className="text-primary hover:underline font-semibold">
                  416-903-8026
                </a>
                {" "}or{" "}
                <a href="mailto:info@rahuljindal.ca" className="text-primary hover:underline font-semibold">
                  info@rahuljindal.ca
                </a>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StoneRoseFAQSection;
