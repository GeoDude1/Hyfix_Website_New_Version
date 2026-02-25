import { Button } from "../../../../components/ui/button";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";

const droneCategories = [
  {
    image: "https://c.animaapp.com/mlqxi4snA5QXFn/img/micro-drone.png",
    title: "Consumer and FPV drones",
  },
  {
    image: "https://c.animaapp.com/mlqxi4snA5QXFn/img/commercial-drones.png",
    title: "Public-sector and security",
  },
  {
    image: "https://c.animaapp.com/mlqxi4snA5QXFn/img/ag-drones.png",
    title: "Commercial and industrial drones",
  },
  {
    image: "https://c.animaapp.com/mlqxi4snA5QXFn/img/verde-ai-mower.png",
    title: "Ground robots",
  },
];

export const DronesAndRoboticsOverviewSection = (): JSX.Element => {
  const titleRef = useScrollAnimation();
  const subtitleRef = useScrollAnimation();
  const buttonRef = useScrollAnimation();

  return (
    <section className="relative w-full py-12 md:py-20 px-4 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto max-w-[1400px]">
        <h2 ref={titleRef} className="[font-family:'Hind',Helvetica] font-bold text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center tracking-tight leading-tight mb-3 px-4">
          Powering the Next Generation of <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">Autonomous Systems</span>
        </h2>
        
        <p ref={subtitleRef} className="text-gray-600 text-center text-base md:text-lg max-w-3xl mx-auto mb-12">
          Advanced chip technology for drones and robotics across every industry
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-10">
          {droneCategories.map((category, index) => (
            <div
              key={index}
              style={{ ["--animation-delay" as string]: `${400 + index * 100}ms` }}
              className="translate-y-[-1rem] animate-fade-up opacity-0 group flex flex-col items-center"
            >
              <div className="h-[180px] md:h-[200px] flex items-center justify-center mb-3 w-full group-hover:scale-105 transition-transform duration-300">
                <img
                  className="w-full h-full object-contain"
                  alt={category.title}
                  src={category.image}
                />
              </div>
              <p className="[font-family:'Hind',Helvetica] font-semibold text-gray-900 text-sm md:text-base text-center tracking-tight leading-snug">
                {category.title}
              </p>
            </div>
          ))}
        </div>

        <div ref={buttonRef} className="flex justify-center">
          <Link to="/applications">
            <Button 
              className="h-auto w-auto px-6 md:px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white [font-family:'Hind',Helvetica] font-semibold text-base md:text-lg tracking-tight leading-normal hover:shadow-xl hover:scale-105 transition-all duration-300 border-0"
            >
              Explore Applications
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
