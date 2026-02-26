import { ScrollToTop } from "../components/ScrollToTop";
import { ChipTechnologySection } from "./HyfixMainPageScreen/sections/ChipTechnologySection";
import { DronesAndRoboticsOverviewSection } from "./HyfixMainPageScreen/sections/DronesAndRoboticsOverviewSection/DronesAndRoboticsOverviewSection";
import { FooterWrapperSection } from "./HyfixMainPageScreen/sections/FooterWrapperSection";
import { HeroImageSection } from "./HyfixMainPageScreen/sections/HeroImageSection";
import { HyfixBrandingSection } from "./HyfixMainPageScreen/sections/HyfixBrandingSection/HyfixBrandingSection";
import { NavigationWrapperSection } from "./HyfixMainPageScreen/sections/NavigationWrapperSection";
import { NewsUpdatesSection } from "./HyfixMainPageScreen/sections/NewsUpdatesSection/NewsUpdatesSection";
import { KeyAccomplishmentsSection } from "./HyfixMainPageWrapper/sections/KeyAccomplishmentsSection/KeyAccomplishmentsSection";
import { ApplicationsIntroSection } from "./HyfixMainPage/sections/ApplicationsIntroSection";
import { CommercialIndustrialDronesSection } from "./HyfixMainPage/sections/CommercialIndustrialDronesSection";
import { ConsumerFpvDronesSection } from "./HyfixMainPage/sections/ConsumerFpvDronesSection";
import { GroundRoboticsSection } from "./HyfixMainPage/sections/GroundRoboticsSection";
import { PublicSectorSecurityDronesSection } from "./HyfixMainPage/sections/PublicSectorSecurityDronesSection";

const investorLogos = [
  { src: "https://c.animaapp.com/mlqxi4snA5QXFn/img/craft-logo-2.png", alt: "Craft logo" },
  { src: "https://c.animaapp.com/mlqxi4snA5QXFn/img/catapult-logo-black-1.png", alt: "Catapult logo black" },
  { src: "https://c.animaapp.com/mlqxi4snA5QXFn/img/multicoin-capital-logo-black-1.png", alt: "Multicoin capital" },
  { src: "https://c.animaapp.com/mlqxi4snA5QXFn/img/finality-logo-black-1.png", alt: "Finality logo black" },
];

export const HyfixSinglePage = (): JSX.Element => {
  return (
    <div className="overflow-hidden w-full min-w-0 min-h-screen relative bg-gray-700 pt-0">
      <ScrollToTop />
      <NavigationWrapperSection />

      {/* HOME */}
      <div id="home">
        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <HeroImageSection />
        </div>
        <div className="translate-y-[-1rem] animate-reveal opacity-0 [--animation-delay:400ms]">
          <ChipTechnologySection />
        </div>
        <div className="bg-gray-50 translate-y-[-1rem] animate-fade-up opacity-0 [--animation-delay:600ms]">
          <DronesAndRoboticsOverviewSection />
        </div>
        <div className="bg-white translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
          <HyfixBrandingSection />
        </div>
        <div className="bg-gradient-to-b from-gray-600 to-gray-700 translate-y-[-1rem] animate-reveal opacity-0 [--animation-delay:1000ms]">
          <NewsUpdatesSection />
        </div>

      {/* APPLICATIONS */}
      <div id="applications">
        <div className="bg-gray-50">
          <ApplicationsIntroSection />
        </div>
        <div className="bg-white">
          <ConsumerFpvDronesSection />
        </div>
        <div className="bg-gray-50">
          <CommercialIndustrialDronesSection />
        </div>
        <div className="bg-white">
          <PublicSectorSecurityDronesSection />
        </div>
        <div className="bg-gray-50">
          <GroundRoboticsSection />
        </div>
      </div>

      {/* ABOUT */}
      <div id="about">
        <section className="w-full relative pt-20 pb-8 md:pt-32 md:pb-12 px-6 bg-gradient-to-b from-gray-50 to-white translate-y-[-1rem] animate-fade-up opacity-0 [--animation-delay:200ms]">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 mb-5 md:mb-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 border border-gray-100">
      </div>
                <h3 className="[font-family:'Hind',Helvetica] text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">Headquarters</h3>
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-5" />
                <p className="text-base md:text-lg text-gray-700 text-center mb-2">Santa Clara, CA</p>
                <p className="text-base md:text-lg text-gray-700 text-center">Founded January 2022</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 border border-gray-100">
                <h3 className="[font-family:'Hind',Helvetica] text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">Industry</h3>
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-5" />
                <p className="text-base md:text-lg text-gray-700 text-center">Semiconductors for autonomous systems + geospatial technology</p>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 border border-gray-100">
                <h3 className="[font-family:'Hind',Helvetica] text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">Built in U.S.</h3>
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-5" />
                <p className="text-base md:text-lg text-gray-700 text-center">Building a domestic drone supply chain</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 border border-gray-100">
                <h3 className="[font-family:'Hind',Helvetica] text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">Team</h3>
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-5" />
                <p className="text-base md:text-lg text-gray-700 text-center">20 person team with decades of experience in autonomy and IC design</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full relative pt-8 pb-20 md:pt-12 md:pb-32 px-6 bg-white translate-y-[-1rem] animate-reveal opacity-0 [--animation-delay:300ms]">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-5 md:gap-6 items-start">
                <img src="/mike.png" alt="Mike Horton" className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-lg bg-gray-200 flex-shrink-0" />
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
        <section className="w-full relative py-12 md:py-20 px-6 bg-gradient-to-b from-gray-900 to-black translate-y-[-1rem] animate-fade-up opacity-0 [--animation-delay:400ms]">
          <div className="max-w-5xl mx-auto">
            <h2 className="[font-family:'Hind',Helvetica] font-bold text-white text-2xl md:text-4xl lg:text-5xl text-center tracking-tight leading-[1.1] mb-8 md:mb-12">
              Investors
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto items-center justify-items-center">
              {investorLogos.map((logo, index) => (
                <div key={index} className="flex items-center justify-center w-full translate-y-[-1rem] animate-scale-in opacity-0 group hover:scale-105 transition-transform duration-300" style={{ animationDelay: `${200 + index * 100}ms` }}>
                  <img className="w-full max-w-[200px] sm:max-w-[220px] md:max-w-[260px] h-auto object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity duration-300" alt={logo.alt} src={logo.src} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full relative translate-y-[-1rem] animate-fade-up opacity-0 [--animation-delay:500ms]">
          <KeyAccomplishmentsSection />
        </section>
      </div>

      <div className="translate-y-[-1rem] animate-fade-up opacity-0 [--animation-delay:600ms]">
        <FooterWrapperSection />
      </div>
    </div>
  );
};
