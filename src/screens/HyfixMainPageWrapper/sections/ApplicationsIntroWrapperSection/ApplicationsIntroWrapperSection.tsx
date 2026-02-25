import React from 'react';
import { useScrollAnimation } from '../../../../hooks/useScrollAnimation';

export const ApplicationsIntroWrapperSection: React.FC = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: descRef, isVisible: descVisible } = useScrollAnimation();

  return (
    <div className="w-full bg-white py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:gap-12 lg:gap-16">
          <h2 ref={titleRef} className={`flex-shrink-0 [font-family:'Hind',Helvetica] font-bold text-black text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            About HYFIX
          </h2>
          <div ref={descRef} className={`[font-family:'Hind',Helvetica] font-normal text-black text-lg md:text-xl tracking-tight leading-relaxed transition-all duration-700 delay-100 ${descVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="font-bold text-black">
              HYFIX Spatial Intelligence, Inc.
            </span>
            <span className="font-light text-black">&nbsp;</span>
            <span className="text-black">
              is a U.S.-based semiconductor company focused on Autonomous Systems Chips for drones and robotics.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
