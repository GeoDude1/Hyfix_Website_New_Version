import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";

const consumerParagraph = "Consumer and FPV drones benefit from ultra‑integrated electronics, precise localization and control, and low‑power operation that extends battery life. Their lightweight design further enhances performance and agility.";

export const ConsumerFpvDronesSection = (): JSX.Element => {
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
          <source src="/applications_1.webm" type="video/webm" />
        </video>
        {/* Gradient so text is readable: dark on the left where text sits */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/20 pointer-events-none" />
      </div>

      {/* Text overlay on the left */}
      <div ref={contentRef} className="relative z-10 w-full flex justify-start px-4 py-12 md:py-20">
        <div className="w-full max-w-md md:max-w-lg lg:ml-12 xl:ml-24 flex flex-col gap-3 md:gap-4">
          <h2 className="[font-family:'Hind',Helvetica] font-bold text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight drop-shadow-md">
            Consumer and FPV Drones
          </h2>

          <p className="[font-family:'Hind',Helvetica] text-white/95 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg">
            {consumerParagraph}
          </p>
        </div>
      </div>
    </section>
  );
};
