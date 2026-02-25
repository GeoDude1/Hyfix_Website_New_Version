import { Button } from "../../../../components/ui/button";
import { Link } from "react-router-dom";

const features = [
  "U.S.-designed and manufactured",
  "Fabricated at trusted foundry",
  "High-volume mature process node",
  "NDAA compliant",
];

export const HyfixBrandingSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden bg-white">
      <div className="w-full max-w-7xl mx-auto pl-12 pr-6 md:pl-24 md:pr-10 lg:pl-32 lg:pr-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-x-16 gap-y-12 items-start">
          {/* Left: title at top + list + CTA */}
          <div className="lg:col-span-5 flex flex-col gap-8 order-2 lg:order-1">
            <h2 className="[font-family:'Hind',Helvetica] font-bold text-black text-2xl md:text-3xl lg:text-4xl text-left tracking-tight leading-tight max-w-lg translate-y-[-1rem] animate-reveal opacity-0 [--animation-delay:200ms]">
              Fixing a Broken Drone Supply Chain
            </h2>
            <ul className="space-y-4 [font-family:'Hind',Helvetica] font-medium text-gray-800 text-lg md:text-xl leading-relaxed text-left translate-y-[-1rem] animate-fade-up opacity-0 [--animation-delay:400ms]">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 translate-y-2 opacity-0 animate-fade-in" style={{ animationDelay: `${500 + index * 80}ms`, animationFillMode: 'forwards' }}>
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-2.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="translate-y-2 opacity-0 animate-fade-in [--animation-delay:900ms] w-fit">
              <Button 
                className="h-auto px-6 md:px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-600 text-white [font-family:'Hind',Helvetica] font-semibold text-base md:text-lg tracking-tight leading-normal hover:shadow-xl hover:scale-105 transition-all duration-300 border-0"
              >
                About HYFIX
              </Button>
            </Link>
          </div>
          {/* Right: image */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <img
              className="w-full max-w-xl h-auto object-contain block transition-transform duration-500 hover:scale-105"
              alt="HYFIX building"
              src="/building.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
