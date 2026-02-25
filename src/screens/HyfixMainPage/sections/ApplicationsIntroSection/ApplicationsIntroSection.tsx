import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";

export const ApplicationsIntroSection = (): JSX.Element => {
  const titleRef = useScrollAnimation();
  const textRef = useScrollAnimation();

  return (
    <section className="w-full py-8 md:py-16 px-4 relative overflow-hidden bg-gray-50">
      {/* Animated background gradient - subtle on light */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/70 via-blue-50/50 to-blue-100/50"></div>
      
      <div className="max-w-6xl mx-auto text-center space-y-4 md:space-y-8 relative z-10">
        <h1 ref={titleRef} className="[font-family:'Hind',Helvetica] font-bold text-black text-3xl sm:text-4xl md:text-7xl tracking-tight leading-tight">
          Applications
        </h1>

        <p ref={textRef} className="[font-family:'Hind',Helvetica] font-light text-gray-800 text-lg sm:text-xl md:text-3xl tracking-wide leading-relaxed max-w-5xl mx-auto">
          From tiny micro drones to safety critical autonomous systems, the HYFIX Autonomous Systems Chip enables a new level of integration and performance.
        </p>
      </div>
    </section>
  );
};
