import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Download, MapIcon } from "lucide-react";
import sitePlanImage from "@/assets/stonerose-site-plan-enhanced.png";

const StoneRoseSitePlanSection = () => {
  const handleDownload = () => {
    window.open("/stonerose-site-plan.pdf", "_blank");
  };

  return (
    <section id="site-plan" className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Stonerose Site Plan
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore the thoughtfully designed layout of our modern townhome community in Niagara Falls
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Site Plan Preview */}
          <Dialog>
            <DialogTrigger asChild>
              <div className="relative cursor-pointer group overflow-hidden rounded-lg shadow-xl">
                <img
                  src={sitePlanImage}
                  alt="Stonerose Site Plan - Community layout showing townhomes, green spaces, and amenities"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <MapIcon className="w-16 h-16 text-white" />
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Stonerose Site Plan</DialogTitle>
              </DialogHeader>
              <img
                src={sitePlanImage}
                alt="Stonerose Site Plan Full View"
                className="w-full h-auto"
              />
            </DialogContent>
          </Dialog>

          {/* Site Plan Details */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Discover Your Future Community</h3>
              <p className="text-muted-foreground">
                Stonerose features a carefully planned layout with modern townhomes designed for comfortable living. 
                Our community is strategically located with easy access to major highways, the new South Niagara Hospital, 
                and local amenities.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-card rounded-lg border">
                <p className="text-2xl font-bold text-primary">140+</p>
                <p className="text-sm text-muted-foreground">Modern Townhomes</p>
              </div>
              <div className="p-4 bg-card rounded-lg border">
                <p className="text-2xl font-bold text-primary">8km</p>
                <p className="text-sm text-muted-foreground">To Hospital</p>
              </div>
              <div className="p-4 bg-card rounded-lg border">
                <p className="text-2xl font-bold text-primary">3 min</p>
                <p className="text-sm text-muted-foreground">To Highway QEW</p>
              </div>
              <div className="p-4 bg-card rounded-lg border">
                <p className="text-2xl font-bold text-primary">2026</p>
                <p className="text-sm text-muted-foreground">Occupancy</p>
              </div>
            </div>

            <div className="space-y-3">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="w-full">
                    <MapIcon className="mr-2 h-5 w-5" />
                    View Full Site Plan
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Stonerose Site Plan</DialogTitle>
                  </DialogHeader>
                  <img
                    src={sitePlanImage}
                    alt="Stonerose Site Plan Full View"
                    className="w-full h-auto"
                  />
                </DialogContent>
              </Dialog>

              <Button
                size="lg"
                variant="outline"
                className="w-full"
                onClick={handleDownload}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Site Plan PDF
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoneRoseSitePlanSection;
