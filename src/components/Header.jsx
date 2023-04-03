/** @format */

import React from "react";

const Header = ({ scrollToMission, scrollToContact, scrollToAbout }) => {
  return (
    <div className="h-20 px-10 lg:px-32 flex flex-col lg:flex-row justify-between items-center">
      <div className=" mt-4 lg:mt-0">
        <span className="font-bold text-xl">AHMarketing</span>
      </div>
      <div>
        <div className="flex flex-row gap-4 lg:gap-8 text-lg font-semibold">
          <span className="text-[#603FBA] cursor-pointer">Home</span>
          <span className="cursor-pointer" onClick={scrollToMission}>
            Mission
          </span>
          <span className="cursor-pointer" onClick={scrollToAbout}>
            About
          </span>
          <span className="cursor-pointer" onClick={scrollToContact}>
            Contact
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
