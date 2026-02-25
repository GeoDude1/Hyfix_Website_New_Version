import { ScrollToTop } from "../../components/ScrollToTop";
import { ApplicationsIntroWrapperSection } from "./sections/ApplicationsIntroWrapperSection/ApplicationsIntroWrapperSection";
import { ContentDividerSection } from "./sections/ContentDividerSection/ContentDividerSection";
import { KeyAccomplishmentsSection } from "./sections/KeyAccomplishmentsSection/KeyAccomplishmentsSection";
import { FooterWrapperSection } from "../HyfixMainPageScreen/sections/FooterWrapperSection";
import { NavigationWrapperSection } from "../HyfixMainPageScreen/sections/NavigationWrapperSection";

const investorLogos = [
  {
    src: "https://c.animaapp.com/mlqxi4snA5QXFn/img/craft-logo-2.png",
    alt: "Craft logo",
    className: "w-full max-w-[320px] h-auto object-contain",
  },
  {
    src: "https://c.animaapp.com/mlqxi4snA5QXFn/img/catapult-logo-black-1.png",
    alt: "Catapult logo black",
    className: "w-full max-w-[420px] h-auto object-contain",
  },
  {
    src: "https://c.animaapp.com/mlqxi4snA5QXFn/img/multicoin-capital-logo-black-1.png",
    alt: "Multicoin capital",
    className: "w-full max-w-[520px] h-auto object-contain",
  },
  {
    src: "https://c.animaapp.com/mlqxi4snA5QXFn/img/finality-logo-black-1.png",
    alt: "Finality logo black",
    className: "w-full max-w-[300px] h-auto object-contain",
  },
];

export const HyfixMainPageWrapper = (): JSX.Element => {
  return (
    <div className="overflow-hidden w-full min-w-0 min-h-screen relative bg-white pt-24">
      <ScrollToTop />
      {/* Navigation - fixed so it follows on screen when scrolling */}
      <NavigationWrapperSection />

      {/* Applications Section - White Background */}
      <section className="w-full relative bg-white [--animation-delay:200ms] translate-y-[-1rem] animate-fade-up opacity-0">
        <ApplicationsIntroWrapperSection />
      </section>

      {/* Company Info Cards - Light Background */}
      <section className="w-full relative pt-20 pb-8 md:pt-32 md:pb-12 px-6 bg-gradient-to-b from-gray-50 to-white translate-y-[-1rem] animate-fade-up opacity-0 [--animation-delay:300ms]">
        <div className="max-w-5xl mx-auto">
          {/* Top Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 mb-5 md:mb-6">
            {/* Headquarters Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 border border-gray-100">
              <h3 className="[font-family:'Hind',Helvetica] text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">Headquarters</h3>
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-5"></div>
              <p className="text-base md:text-lg text-gray-700 text-center mb-2">Santa Clara, CA</p>
              <p className="text-base md:text-lg text-gray-700 text-center">Founded January 2022</p>
            </div>

            {/* Industry Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 border border-gray-100">
              <h3 className="[font-family:'Hind',Helvetica] text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">Industry</h3>
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-5"></div>
              <p className="text-base md:text-lg text-gray-700 text-center">Semiconductors for autonomous systems + geospatial technology</p>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
            {/* Built in U.S. Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 border border-gray-100">
              <h3 className="[font-family:'Hind',Helvetica] text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">Built in U.S.</h3>
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-5"></div>
              <p className="text-base md:text-lg text-gray-700 text-center">Building a domestic drone supply chain</p>
            </div>

            {/* Team Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 border border-gray-100">
              <h3 className="[font-family:'Hind',Helvetica] text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">Team</h3>
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-5"></div>
              <p className="text-base md:text-lg text-gray-700 text-center">20 person team with decades of experience in autonomy and IC design</p>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Quote Section - White Background */}
      <section className="w-full relative pt-8 pb-20 md:pt-12 md:pb-32 px-6 bg-white translate-y-[-1rem] animate-reveal opacity-0 [--animation-delay:400ms]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-5 md:gap-6 items-start">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <img
                  src="/mike.png"
                  alt="Mike Horton"
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-lg bg-gray-200"
                />
              </div>

              {/* Quote Content */}
              <div className="flex-1 min-w-0">
                <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-4">
                  "Whether you're building a palm-sized consumer drone or a heavy-lift autonomous system, the underlying problems are the same—power, precision, reliability, and security. We're giving builders a single silicon foundation that scales across use cases instead of forcing them to stitch together fragile systems from dozens of suppliers."
                </p>
                <p className="text-sm md:text-base text-gray-700">
                  Mike Horton, CEO, <a href="https://www.linkedin.com/in/mikehorton/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">LinkedIn</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investors Section - Dark Background */}
      <section className="w-full relative py-12 md:py-20 px-6 bg-gradient-to-b from-gray-900 to-black translate-y-[-1rem] animate-fade-up opacity-0 [--animation-delay:600ms]">
        <div className="max-w-5xl mx-auto">
          <h2 className="[font-family:'Hind',Helvetica] font-bold text-white text-2xl md:text-4xl lg:text-5xl text-center tracking-tight leading-[1.1] mb-8 md:mb-12 opacity-0 animate-reveal [--animation-delay:0ms]">
            Investors
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto items-center justify-items-center">
            {investorLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-full translate-y-[-1rem] animate-scale-in opacity-0 group hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <img
                  className="w-full max-w-[200px] sm:max-w-[220px] md:max-w-[260px] h-auto object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  alt={logo.alt}
                  src={logo.src}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Accomplishments - Gradient Background (built into component) */}
      <section className="w-full relative translate-y-[-1rem] animate-fade-up opacity-0 [--animation-delay:800ms]">
        <KeyAccomplishmentsSection />
      </section>

      {/* Footer Section - same as other pages */}
      <section className="w-full relative translate-y-[-1rem] animate-fade-up opacity-0 [--animation-delay:1000ms]">
        <FooterWrapperSection />
      </section>
    </div>
  );
};
