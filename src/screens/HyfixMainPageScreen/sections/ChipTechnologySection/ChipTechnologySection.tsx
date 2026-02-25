import { Button } from "../../../../components/ui/button";
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";

const chipFeatures = [
  "Application CPU",
  "Flight Controller",
  "GNSS/RTK",
  "Radio Processor",
  "Security Encryption",
];

export const ChipTechnologySection = (): JSX.Element => {
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="relative w-full py-14 md:py-24 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-12">
          <h2 ref={titleRef} className={`[font-family:'Hind',Helvetica] font-bold text-black text-3xl md:text-4xl lg:text-5xl text-center tracking-tight leading-[1.1] max-w-4xl transition-all duration-1000 ${titleVisible ? 'opacity-100 animate-fade-in-right' : 'opacity-0'}`}>
            A Chip Built for Precision and Resilience
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            {/* Image with floating animation */}
            <div ref={imageRef} className={`flex justify-center lg:justify-end transition-all duration-1000 ${imageVisible ? 'opacity-100 animate-zoom-in' : 'opacity-0'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full animate-glow"></div>
                <img
                  className="relative w-full max-w-[400px] h-auto object-contain animate-float"
                  alt="Chip dime"
                  src="https://c.animaapp.com/mlqxi4snA5QXFn/img/h1-chip-dime-v04-1.png"
                />
              </div>
            </div>


            {/* Features */}
            <div ref={featuresRef} className="flex flex-col gap-8">
              <ul className="flex flex-col gap-6">
                {chipFeatures.map((feature, index) => (
                  <li 
                    key={index}
                    className={`[font-family:'Hind',Helvetica] flex items-center gap-4 text-xl md:text-2xl font-semibold text-black transition-all duration-700 ${featuresVisible ? 'opacity-100 animate-fade-in-left' : 'opacity-0'}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-fit px-6 py-4 rounded-full bg-black text-white [font-family:'Hind',Helvetica] font-semibold text-base hover:bg-gray-800 transition-all duration-300 hover:scale-105 ${featuresVisible ? 'opacity-100 animate-fade-in-left' : 'opacity-0'}`}
                style={{ animationDelay: '500ms' }}
                onClick={() => window.location.href = "mailto:info@hyfix.ai?subject=Request%20Info"}
              >
                Request Info
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
