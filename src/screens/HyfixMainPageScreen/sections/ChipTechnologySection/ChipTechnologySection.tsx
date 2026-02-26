import { Button } from "../../../../components/ui/button";
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";

export const ChipTechnologySection = (): JSX.Element => {
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="relative w-full py-16 md:py-28 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <h2 ref={titleRef} className={`[font-family:'Hind',Helvetica] font-bold text-black text-3xl sm:text-4xl md:text-5xl text-center tracking-tight leading-[1.15] max-w-3xl mx-auto mb-14 md:mb-20 transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Introducing Our Integrated System-on-Chip Solution
        </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            {/* Image with floating animation */}
            <div ref={imageRef} className={`flex justify-center lg:justify-end transition-all duration-1000 ${imageVisible ? 'opacity-100 animate-zoom-in' : 'opacity-0'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full animate-glow"></div>
                <img
                  className="relative w-full max-w-[400px] h-auto object-contain animate-float"
                  alt="HYFIX integrated system-on-chip"
                  src="/chip_image.png"
                />
              </div>
            </div>


            {/* Features */}
            <div ref={featuresRef} className="flex flex-col gap-8">
              <p className={`[font-family:'Hind',Helvetica] text-lg md:text-xl text-gray-700 leading-relaxed transition-all duration-700 ${featuresVisible ? 'opacity-100 animate-fade-in-left' : 'opacity-0'}`}>
                Our compact 7&nbsp;mm&nbsp;×&nbsp;7&nbsp;mm chip integrates an application CPU, flight controller, GNSS/RTK positioning, radio, and security in a single package under 3&nbsp;g—enabling next-generation autonomous systems with minimal size and power.
              </p>

              <Button 
                className={`w-fit px-6 py-4 rounded-full bg-black text-white [font-family:'Hind',Helvetica] font-semibold text-base hover:bg-gray-800 transition-all duration-300 hover:scale-105 ${featuresVisible ? 'opacity-100 animate-fade-in-left' : 'opacity-0'}`}
                style={{ animationDelay: '200ms' }}
                onClick={() => window.location.href = "mailto:info@hyfix.ai?subject=Request%20Info"}
              >
                Request Info
              </Button>
            </div>
          </div>
      </div>
    </section>
  );
};
