/** @format */

import React from "react";
import demoCallImage from "../assets/democall.jpg";
import userImage from "../assets/user.png";
import tickImage from "../assets/tick.png";
import Image from "next/image";

const DemoCall = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4 py-10 lg:px-32">
      <span className="text-2xl font-bold text-center">Free Demo Call</span>
      <div className="w-16 h-[4px] mt-2 bg-[#603FBA]"></div>
      <br />
      <br />
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex-1">
          <Image src={demoCallImage} alt="demo call" />
        </div>
        <div className="flex flex-col items-center flex-1 px-4 py-16 lg:items-start lg:pr-4 lg:px-0">
          <Image src={userImage} alt="profile image" className="w-[100px]" />
          <span className="text-2xl mt-4 text-[#603FBA] font-bold">
            SCHEDULE YOUR CALL WITH AHMED
          </span>
          <span className="mt-2 text-4xl font-bold">
            Free 15-Minute Demo Call
          </span>
          <span className="mt-2 text-xl">
            By the end of this Audit call, you will have a clear understanding
            of the next steps you can take for your business to start generating
            consistent and reliable results online with Funnels & Paid
            Advertising.
          </span>
          <span className="mt-6 text-xl">
            Find a time on Ahmed's calendar to schedule your call today and we
            look forward to speaking to you soon!
          </span>
          <span className="text-2xl mt-4 mb-2 text-[#603FBA] font-bold">
            THIS AUDIT CALL IS PERFECT FOR:
          </span>
          <div className="flex items-center justify-start gap-3">
            <Image src={tickImage} alt="check mark" />
            <span className="text-lg">
              Businesses looking to convert their current website into a
              <strong> high quality & streamlined funnel format.</strong>
            </span>
          </div>
          <div className="flex items-center justify-start gap-3">
            <Image src={tickImage} alt="check mark" />
            <span className="text-lg">
              ​Businesses looking to take their offline business
              <strong> online</strong>
            </span>
          </div>
          <div className="flex items-center justify-start gap-3">
            <Image src={tickImage} alt="check mark" />
            <span className="text-lg">
              ​​Businesses looking to understand their
              <strong> increased revenue potential </strong>
              with funnels & conversion rate optimization.
            </span>
          </div>
          <div className="flex items-center justify-start gap-3">
            <Image src={tickImage} alt="check mark" />
            <span className="text-lg">
              Businesses looking to
              <strong>
                {" "}
                maximize their conversion rates & average order value.
              </strong>
            </span>
          </div>
          <div className="flex items-center justify-start gap-3">
            <Image src={tickImage} alt="check mark" />
            <span className="text-lg">
              ​Businesses looking for a reliable agency that can
              <strong> make their company a priority.</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoCall;
