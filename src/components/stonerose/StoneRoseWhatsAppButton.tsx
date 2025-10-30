import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

const StoneRoseWhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const phoneNumber = "14169038026"; // +1 416-903-8026
  const message = "Hi Rahul, I'm interested in Stonerose homes near South Niagara Hospital. Can you share more information about the HST rebate and available units?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className={`fixed bottom-6 left-6 z-40 transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative group">
        {/* Tooltip */}
        <div className="absolute bottom-full left-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-foreground text-background px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg">
            Chat with us on WhatsApp
            <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-foreground"></div>
          </div>
        </div>

        {/* WhatsApp Button */}
        <button
          onClick={handleClick}
          aria-label="Chat with us on WhatsApp"
          className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[hsl(var(--accent-green))] text-white shadow-2xl hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[hsl(var(--accent-green))]/30"
        >
          {/* Pulse Animation Ring */}
          <span className="absolute inset-0 rounded-full bg-[hsl(var(--accent-green))] animate-ping opacity-30"></span>
          
          {/* WhatsApp Icon */}
          <MessageCircle className="w-7 h-7 md:w-8 md:h-8 relative z-10" strokeWidth={2} />
          
          {/* Online Badge */}
          <span className="absolute top-0 right-0 w-3 h-3 md:w-4 md:h-4 bg-red-500 border-2 border-white rounded-full"></span>
        </button>

        {/* Extended Label on Desktop */}
        <div className="hidden md:block absolute left-full ml-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-[hsl(var(--accent-green))] text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg">
            Need help? Message Rahul
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoneRoseWhatsAppButton;
