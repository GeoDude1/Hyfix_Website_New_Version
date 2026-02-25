import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";

export const CommercialIndustrialDronesSection = (): JSX.Element => {
  const imageRef = useScrollAnimation();
  const contentRef = useScrollAnimation();
  const benefits = [
    "Centimeter accurate positioning",
    "Long-range digital video transmission",
    "Supports redundant safety sensors",
    "Camera-based AI support",
  ];

  return (
    <section className="relative w-full py-8 md:py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 xl:gap-32 items-center">
          <div ref={contentRef} className="flex flex-col gap-5 md:gap-8 order-2 lg:order-1">
            <h2 className="[font-family:'Hind',Helvetica] font-bold text-black text-2xl sm:text-3xl md:text-6xl leading-tight">
              Commercial and Industrial Drones
            </h2>

            <div className="[font-family:'Hind',Helvetica] text-gray-800 text-base sm:text-lg md:text-2xl leading-relaxed space-y-3 md:space-y-6">
              <p className="font-semibold text-black text-lg md:text-2xl">Benefits:</p>

              <ul className="space-y-3 md:space-y-5 font-normal">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-4 group/item">
                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-2.5 group-hover/item:scale-150 group-hover/item:shadow-lg group-hover/item:shadow-blue-400/50 transition-all duration-300"></span>
                    <span className="group-hover/item:text-black group-hover/item:translate-x-1 transition-all duration-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div ref={imageRef} className="flex justify-center items-center order-1 lg:order-2 group">
            <div className="relative w-full max-w-[280px] md:max-w-none mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-400/20 rounded-full blur-3xl group-hover:blur-2xl group-hover:scale-110 transition-all duration-700"></div>
              <img
                className="w-full max-w-[280px] md:max-w-[600px] md:h-[600px] h-auto object-contain relative z-10 transform group-hover:scale-105 transition-transform duration-700"
                alt="Commercial and Industrial Drones"
                src="https://c.animaapp.com/mlqxi4snA5QXFn/img/ag-drones.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
