import { Card, CardContent } from "../../../../components/ui/card";
import { useCountUp } from "../../../../hooks/useCountUp";
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";

export const KeyAccomplishmentsSection = (): JSX.Element => {
  const fundingAmount = useCountUp(15, 2000, 400);
  const stationCount = useCountUp(20000, 2500, 600);
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.15 });

  const accomplishments = [
    {
      text: (
        <>
          <span className="font-light">Development of the </span>
          <span className="font-bold">Autonomous Systems Chip</span>
        </>
      ),
      delay: "200ms",
    },
    {
      text: (
        <>
          <span className="font-bold">${fundingAmount}M Series Seed</span>
          <span className="font-light"> funding lead by&nbsp;&nbsp;</span>
          <span className="font-bold">Craft Ventures</span>
          <span className="font-light"> and leading investors</span>
        </>
      ),
      delay: "400ms",
    },
    {
      text: (
        <>
          <span className="font-light">Produced over </span>
          <span className="font-bold">{stationCount.toLocaleString()} GEODNET RTK</span>
          <span className="font-light"> base stations deployed globaly</span>
        </>
      ),
      delay: "600ms",
    },
    {
      text: (
        <>
          <span className="font-light">Live tracking of new </span>
          <span className="font-bold">low Earth orbit (LEO) satellites</span>
          <span className="font-light"> for anti-jam/spoof</span>
        </>
      ),
      delay: "800ms",
    },
  ];

  return (
    <section className="relative w-full py-12 md:py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto">
        <h2 ref={titleRef} className={`[font-family:'Hind',Helvetica] font-bold text-black text-2xl md:text-4xl lg:text-5xl text-center tracking-tight leading-[1.1] mb-8 md:mb-12 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0 animate-reveal' : 'opacity-0 translate-y-4'}`}>
          Key Accomplishments
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {accomplishments.map((item, index) => (
            <Card
              key={index}
              style={{ ["--animation-delay" as string]: item.delay }}
              className="translate-y-[-1rem] animate-scale-in opacity-0 rounded-2xl border-0 shadow-lg bg-white backdrop-blur-xl min-h-[140px] md:min-h-[160px] hover:scale-[1.02] hover:shadow-xl transition-all duration-500 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="relative flex items-center justify-center p-5 md:p-8 h-full">
                {item.text ? (
                  <p className="[font-family:'Hind',Helvetica] font-normal text-black text-base md:text-lg tracking-tight leading-relaxed text-center">
                    {item.text}
                  </p>
                ) : (
                  <img
                    className="max-w-full h-auto rounded-xl"
                    alt={item.alt}
                    src={item.image}
                  />
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
