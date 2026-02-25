import { Button } from "../../../../components/ui/button";
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";

const latestNewsBullets = [
  "American-made chip technology",
  "High-precision autonomous systems",
  "Next-generation spatial intelligence",
];

export const NewsUpdatesSection = (): JSX.Element => {
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation({ threshold: 0.15 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="relative w-full py-16 md:py-24 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          {/* Left: Latest News card */}
          <div
            ref={cardRef}
            className={`rounded-3xl p-8 md:p-10 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-blue-700/80 border border-white/5 transition-all duration-700 ${cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/90 text-white text-xs font-semibold tracking-widest uppercase mb-4">
              Latest News
            </span>
            <p className="text-white/80 text-sm font-medium mb-2">February 2025</p>
            <h3 className="[font-family:'Hind',Helvetica] font-bold text-white text-2xl md:text-3xl tracking-tight leading-tight mb-3">
              $15M Seed Round Announced
            </h3>
            <div className="w-16 h-0.5 bg-blue-400 rounded-full mb-6" />
            <ul className="space-y-3 [font-family:'Hind',Helvetica] text-white/90 text-base md:text-lg leading-relaxed">
              {latestNewsBullets.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Headline, description, buttons */}
          <div
            ref={contentRef}
            className={`flex flex-col justify-center space-y-6 transition-all duration-700 delay-150 ${contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <h2 className="[font-family:'Hind',Helvetica] font-bold text-white text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight">
              Building the Future of
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                Autonomous Flight
              </span>
            </h2>
            <p className="[font-family:'Hind',Helvetica] text-white/90 text-base md:text-lg leading-relaxed max-w-xl">
              HYFIX Spatial Intelligence, Inc., a U.S.-based semiconductor company,
              today announced a $15 million seed round to build and manufacture a
              new class of American-made chips designed to power high-precision
              drones and autonomous robots.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                className="h-auto px-6 md:px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-600 text-white font-semibold text-base hover:shadow-lg hover:shadow-blue-500/30 transition-all border-0"
                onClick={() => window.open("https://hyfix.ai/news", "_blank")}
              >
                Full News Release
              </Button>
              <Button
                variant="outline"
                className="h-auto px-6 md:px-8 py-3 rounded-xl bg-gray-800 border border-gray-600 text-white font-semibold text-base hover:bg-gray-700 transition-all"
                onClick={() => window.open("https://hyfix.ai/media", "_blank")}
              >
                Media Kit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
