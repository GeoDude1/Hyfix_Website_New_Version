import { ScrollToTop } from "../../components/ScrollToTop";
import { ChipTechnologySection } from "../HyfixMainPageScreen/sections/ChipTechnologySection";
import { DronesAndRoboticsOverviewSection } from "../HyfixMainPageScreen/sections/DronesAndRoboticsOverviewSection/DronesAndRoboticsOverviewSection";
import { FooterWrapperSection } from "../HyfixMainPageScreen/sections/FooterWrapperSection";
import { HeroImageSection } from "../HyfixMainPageScreen/sections/HeroImageSection";
import { HyfixBrandingSection } from "../HyfixMainPageScreen/sections/HyfixBrandingSection/HyfixBrandingSection";
import { NavigationWrapperSection } from "../HyfixMainPageScreen/sections/NavigationWrapperSection";
import { NewsUpdatesSection } from "../HyfixMainPageScreen/sections/NewsUpdatesSection/NewsUpdatesSection";
import { ApplicationsIntroWrapperSection } from "../HyfixMainPageWrapper/sections/ApplicationsIntroWrapperSection/ApplicationsIntroWrapperSection";
import { ContentDividerSection } from "../HyfixMainPageWrapper/sections/ContentDividerSection/ContentDividerSection";
import { KeyAccomplishmentsSection } from "../HyfixMainPageWrapper/sections/KeyAccomplishmentsSection/KeyAccomplishmentsSection";
import { SectionNodeComponentSection } from "../HyfixMainPageWrapper/sections/SectionNodeComponentSection/SectionNodeComponentSection";
import { ApplicationsIntroSection } from "./sections/ApplicationsIntroSection";
import { CommercialIndustrialDronesSection } from "./sections/CommercialIndustrialDronesSection";
import { ConsumerFpvDronesSection } from "./sections/ConsumerFpvDronesSection";
import { FooterSection } from "./sections/FooterSection";
import { GroundRoboticsSection } from "./sections/GroundRoboticsSection";
import { NavigationMenuSection } from "./sections/NavigationMenuSection";
import { PublicSectorSecurityDronesSection } from "./sections/PublicSectorSecurityDronesSection";

export const HyfixMainPage = (): JSX.Element => {
  return (
    <div className="overflow-hidden w-full min-w-0 min-h-screen relative bg-gray-50 pt-24">
      <ScrollToTop />
      {/* Navigation - fixed so it follows on screen when scrolling */}
      <NavigationWrapperSection />

      {/* Hero Section */}
      <div className="bg-gray-50">
        <ApplicationsIntroSection />
      </div>

      {/* Consumer Drones */}
      <div className="bg-white">
        <ConsumerFpvDronesSection />
      </div>

      {/* Commercial Drones */}
      <div className="bg-gray-50">
        <CommercialIndustrialDronesSection />
      </div>

      {/* Public Sector */}
      <div className="bg-white">
        <PublicSectorSecurityDronesSection />
      </div>

      {/* Ground Robotics */}
      <div className="bg-gray-50">
        <GroundRoboticsSection />
      </div>

      <FooterWrapperSection />
    </div>
  );
};
