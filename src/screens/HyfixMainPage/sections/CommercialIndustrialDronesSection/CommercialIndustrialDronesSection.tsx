import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";

const commercialParagraph = "Commercial and industrial drones rely on centimeter‑level positioning, long‑range digital video transmission, and support for redundant safety sensors. They also enable advanced capabilities through camera‑based AI.";

export const CommercialIndustrialDronesSection = (): JSX.Element => {
  const contentRef = useScrollAnimation();

  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[85vh] flex items-end overflow-hidden">
      {/* Full-bleed video background */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/applications_2.webm" type="video/webm" />
        </video>
        {/* Gradient so text is readable: dark on the right where text sits */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/60 pointer-events-none" />
      </div>

      {/* Text overlay on the right */}
      <div ref={contentRef} className="relative z-10 w-full flex justify-end px-4 py-12 md:py-20">
        <div className="w-full max-w-md md:max-w-lg lg:mr-12 xl:mr-24 flex flex-col gap-3 md:gap-4 items-start text-left">
          <h2 className="[font-family:'Hind',Helvetica] font-bold text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight drop-shadow-md">
            Commercial and Industrial Drones
          </h2>

          <p className="[font-family:'Hind',Helvetica] text-white/95 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg">
            {commercialParagraph}
          </p>
        </div>
      </div>
    </section>
  );
};
