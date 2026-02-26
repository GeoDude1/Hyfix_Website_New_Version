import { Button } from "../../../../components/ui/button";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";
import { useState, useRef, useEffect } from "react";

const slides = [
  { video: "/applications_1.webm", title: "Consumer and FPV Drones", description: "Ultra-integrated electronics and precision control for consumer and FPV drones." },
  { video: "/applications_2.webm", title: "Commercial and Industrial Drones", description: "Centimeter-level positioning and long-range video for commercial and industrial use." },
  { video: "/applications_3.webm", title: "Public Sector and Security Drones", description: "Precise positioning and camera-based AI for public safety and security operations." },
  { video: "/applications_4.webm", title: "Ground Robotics", description: "Resilient positioning and obstacle avoidance for ground robots in any environment." },
];

export const DronesAndRoboticsOverviewSection = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const titleRef = useScrollAnimation();
  const subtitleRef = useScrollAnimation();

  const goTo = (index: number) => {
    const next = (index + slides.length) % slides.length;
    setCurrentIndex(next);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.load();
    video.play().catch(() => {});
  }, [currentIndex]);

  const handleVideoEnded = () => {
    goTo(currentIndex + 1);
  };

  return (
    <section className="relative w-full min-h-[70vh] md:min-h-screen flex items-end overflow-hidden">
      {/* Full-bleed video background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted
          playsInline
          onEnded={handleVideoEnded}
        >
          <source src={slides[currentIndex].video} type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/20 pointer-events-none" />
      </div>

      {/* Arrow buttons - white, no circle */}
      <button
        type="button"
        onClick={() => goTo(currentIndex - 1)}
        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 text-white hover:text-white/90 flex items-center justify-center transition-opacity focus:outline-none focus:ring-2 focus:ring-white/50 rounded z-20"
        aria-label="Previous video"
      >
        <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => goTo(currentIndex + 1)}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-white hover:text-white/90 flex items-center justify-center transition-opacity focus:outline-none focus:ring-2 focus:ring-white/50 rounded z-20"
        aria-label="Next video"
      >
        <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide indicator dots */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === currentIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Text on the left - white */}
      <div ref={titleRef} className="relative z-10 w-full flex justify-start px-4 py-12 md:py-20 pb-28">
        <div className="w-full max-w-xl md:max-w-2xl lg:ml-12 xl:ml-24 flex flex-col gap-3 md:gap-5 items-start text-left">
          <h2 className="[font-family:'Hind',Helvetica] font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight drop-shadow-md">
            Powering the Next Generation of <span className="bg-gradient-to-r from-blue-300 to-blue-400 bg-clip-text text-transparent">Autonomous Systems</span>
          </h2>
          <p ref={subtitleRef} className="text-white/90 text-base md:text-lg">
            Advanced chip technology for drones and robotics across every industry
          </p>
          <div className="pt-2 border-t border-white/30 w-full max-w-lg">
            <p className="[font-family:'Hind',Helvetica] font-semibold text-white text-lg md:text-xl mb-1">
              {slides[currentIndex].title}
            </p>
            <p className="text-white/90 text-sm md:text-base leading-relaxed">
              {slides[currentIndex].description}
            </p>
          </div>
          <Link to="/applications" className="mt-2">
            <Button className="h-auto px-6 md:px-8 py-3 rounded-full bg-white text-gray-900 [font-family:'Hind',Helvetica] font-semibold text-base md:text-lg hover:bg-gray-100 transition-all duration-300 border-0 shadow-lg">
              Explore Applications
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
