/** @format */

import Image from "next/image";
import React from "react";
import logo from "../assets/logo.png";

const Header = ({ scrollToMission, scrollToContact, scrollToAbout }) => {
  return (
    <div className="flex flex-col items-center justify-between px-10 lg:px-32 lg:flex-row">
      <div className="mt-4 lg:mt-0">
        <Image src={logo} width={100} />
        {/* <span className="text-xl font-bold">AHMarketing</span> */}
      </div>
      <div>
        <div className="flex flex-row gap-4 text-lg font-semibold lg:gap-8">
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
