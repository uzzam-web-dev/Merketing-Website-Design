/** @format */

import React from "react";
import Mission from "./Mission";
import mrImage from "../assets/mr.png";
import uxImage from "../assets/ux.png";
import ivImage from "../assets/iv.png";

const OurMission = () => {
  return (
    <div className="px-4 lg:px-32 flex flex-col justify-center items-center w-full py-10">
      <span className="text-center text-2xl font-bold">Our Mission</span>
      <div className="w-16 h-[4px] mt-2 bg-[#603FBA]"></div>
      <br />
      <br />
      <div className="w-full flex gap-8 rounded-t-2xl flex-col lg:flex-row justify-around bg-[#603FBA] py-10 md:py-20 px-10">
        <Mission
          tilte="Increased visibility"
          desc="Our primary goal of our seo and ads agency is to increase our clients online visibility.By improving our clients search engine ranking through effective SEO strategies and targeting the right audience with ads,we can help you reach a wider audience and generate more leads and sales"
          image={ivImage}
        />
        <Mission
          tilte="Improved user experience"
          desc="Providing a seamless and user-friendly experience on our clients website is crucial to keeping their customers engaged and satisfied.By optimizing their website for search engine and creating targeted ads that appeal to their audience,We can enhance the user experience and increase customer satisfaction"
          image={uxImage}
        />
        <Mission
          tilte="Measureable results"
          desc="I know every client wants to see tangible results from the investment they make in SEO and ads. By setting clear objectives, measuring key performance indicators,and regularly reporting on progress, you can demonstrate the value of your services and keep our clients informed and satisfied with their ROI"
          image={mrImage}
        />
      </div>
    </div>
  );
};

export default OurMission;
