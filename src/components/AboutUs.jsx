/** @format */

import Image from "next/image";
import React from "react";
import aboutImage from "../assets/abus.png";

const AboutUs = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <span className="text-center text-2xl font-bold">About Us</span>
      <div className="w-16 h-[4px] mt-2 bg-[#603FBA]"></div>
      <br />
      <br />
      <div className="bg-[#603FBA] py-20 w-full flex flex-col lg:flex-row justify-start items-start">
        <div className="flex-1 flex justify-center">
          <div className="w-[82%] lg:w-[60%] py-8 px-8 bg-white rounded-3xl flex flex-col">
            <Image src={aboutImage} />
          </div>
        </div>
        <div className="flex-1 mt-8 md:mt-0 flex flex-col pl-8 text-white justify-start pr-10 md:pr-20">
          <span className="font-bold text-xl">
            We can provide our clients benefits such as:
          </span>
          <br />
          <span className="font-semibold">
            1: Improving their online visibility through strategic SEO and Ads
          </span>
          <span className="font-semibold">
            2: Generating more leads and sales through targeted advertising
            campaigns
          </span>
          <span className="font-semibold">
            3: Increasing ROI by providing measurable results and regular
            reporting.
          </span>
          <br />
          <span className="font-semibold">
            Our Ads services are designed to help our clients reach their target
            audience through highly targeted advertising campaigns. We use a
            variety of platforms, including Google Ads, Facebook Ads, and
            LinkedIn Ads, to create ads that are designed to reach the right
            audience at the right time. By targeting specific keywords,
            demographics, and behaviors, we can help our clients reach their
            ideal customer and generate more leads and sales.
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
