/** @format */

import React from "react";
import Image from "next/image";
import heroImage from "../assets/heroImage.jpg";
import arrowImage from "../assets/arrow.png";

const Hero = ({ scrollToContact }) => {
  return (
    <div className="z-10 flex flex-col justify-between px-6 my-10 lg:px-32 lg:flex-row">
      <div className="flex flex-col items-start justify-center flex-1">
        <span className="text-3xl font-bold uppercase lg:text-5xl">
          Stay ahead in <br /> the <span className="text-[#603FBA]">GAME</span>
        </span>
        <span className="mt-4 font-semibold text-gray-700">
          Our team specializes in SEO and ads, helping businesses improve their
          online visibility and drive more traffic to their websites. With our
          expertise, we can create customized strategies tailored to your unique
          needs, ensuring that you reach the right audience and see measurable
          results
        </span>
        <br />
        <div
          onClick={() => {
            scrollToContact();
          }}
          className="flex flex-row gap-2 justify-between items-center bg-[#603FBA] py-2 px-4 rounded-md cursor-pointer"
        >
          <span className="text-sm font-semibold text-white lg:text-base">
            Free demo call
          </span>
          <div className="animate-left-right">
            <Image src={arrowImage} className="w-6 lg:w-8" />
          </div>
        </div>
      </div>
      <div className="flex-1 mt-8 md:mt-0">
        <Image src={heroImage} />
      </div>
      <style jsx>{`
        canvas {
          position: fixed;
          top: 0;
          left: 0;
          z-index: -10;
        }
        @keyframes left-right {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(5px);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-left-right {
          animation: left-right 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;
