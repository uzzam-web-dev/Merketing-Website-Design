/** @format */

import React from "react";
import gymImage from "../assets/gym.jpg";
import rsImage from "../assets/realestate.jpg";
import Image from "next/image";

const WorkExperience = () => {
  return (
    <div className="px-4 lg:px-32 py-20 flex flex-col justify-center items-center w-full">
      <span className="text-center text-2xl font-bold">Work Experience</span>
      <div className="w-16 h-[4px] mt-2 bg-[#603FBA]"></div>

      <div className="px-4 lg:px-32 gap-4 py-10 flex items-center justify-center flex-col lg:flex-row">
        <div className="flex-1">
          <Image src={gymImage} className="rounded-lg" />
        </div>
        <div className="flex-1 text-gray-50 py-4 flex flex-col bg-[#603FBA] rounded-lg px-4">
          <span className="font-bold text-3xl">Fitness</span>
          <span className="font-semibold leading-tight mt-4">
            As a seasoned SEO and ads expert, I have worked extensively with
            fitness brands and gyms in the United States, Australia, France, and
            Italy. My team and I have a track record of achieving top rankings
            for fitness-related keywords and driving targeted traffic to our
            clients' websites. With a deep understanding of the fitness industry
            and the latest digital marketing trends, we've helped numerous
            fitness brands achieve their marketing goals.
          </span>
        </div>
      </div>

      <div className="px-4 lg:px-32 gap-4 flex items-center justify-center flex-col-reverse lg:flex-row">
        <div className="flex-1 text-gray-50 py-4 flex flex-col bg-[#603FBA] rounded-lg px-4">
          <span className="font-bold text-3xl">Real Estate</span>
          <span className="font-semibold leading-tight mt-4">
            Our work in the real estate industry has included everything from
            local SEO campaigns for buying land and new houses, to international
            ad campaigns for Airbnb listings and apartments. We know how to use
            the latest digital marketing trends to get your real estate listings
            in front of the right audience, no matter what type of property
            you're selling.
          </span>
        </div>
        <div className="flex-1">
          <Image src={rsImage} className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
