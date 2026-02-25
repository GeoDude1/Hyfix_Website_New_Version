import { useRef, useEffect } from "react";

const isSafari = (): boolean => {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  return /Safari\//i.test(ua) && !/Chrome/i.test(ua) || /iPhone|iPad|iPod|Macintosh/i.test(ua);
};

export const HeroImageSection = (): JSX.Element => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isSafari()) {
      video.src = "/drone_ios_11.mov";
    } else {
      const webm = document.createElement("source");
      webm.src = "/drone_seethrough_11.webm";
      webm.type = "video/webm";
      const mov = document.createElement("source");
      mov.src = "/drone_seethrough_11.mov";
      mov.type = "video/quicktime";
      video.appendChild(webm);
      video.appendChild(mov);
    }
    video.load();
  }, []);

  return (
    <section className="relative w-full overflow-hidden min-h-0 md:min-h-screen flex items-center justify-center bg-gray-700 py-8 md:py-0">
      {/* Video: Safari/iOS/macOS use drone_ios_11.mov to avoid black background; others use webm + mov */}
      <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center pt-[6vh] md:pt-[12vh]">
        <video
          ref={videoRef}
          className="w-full max-w-[95vw] opacity-70 object-contain hero-video-mobile md:hero-video-desktop"
          autoPlay
          muted
          playsInline
          onEnded={() => videoRef.current?.pause()}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-700/40 via-transparent to-gray-700/40 pointer-events-none"></div>
      </div>

      {/* Hero Content - tighter on mobile */}
      <div className="relative z-10 w-full px-4 md:px-6 py-6 md:py-20">
        <div className="container mx-auto max-w-5xl flex flex-col items-center gap-2 md:gap-4 text-center">
          <h1 className="[font-family:'Hind',Helvetica] font-bold text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.15] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            Introducing the<br />Autonomous Systems Chip
          </h1>

          <p className="[font-family:'Hind',Helvetica] font-medium text-white/90 text-sm sm:text-lg md:text-xl tracking-tight leading-relaxed max-w-2xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            Built in the USA. Engineered for Autonomous Flight.
          </p>

          <button 
            className="mt-2 md:mt-4 px-5 py-2.5 md:px-6 md:py-3 rounded-full bg-white text-black [font-family:'Hind',Helvetica] font-semibold text-sm md:text-base hover:bg-white/90 transition-all duration-300 hover:scale-105 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
            onClick={() => window.location.href = "mailto:info@hyfix.ai?subject=Request%20Info"}
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Scroll Indicator - closer to content on mobile */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in [--animation-delay:800ms] animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white/50 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
