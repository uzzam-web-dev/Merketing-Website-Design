/** @format */

import React from "react";
import Image from "next/image";
import arrowImage from "../assets/arrow.png";

const Contact = () => {
  return (
    <div className="px-4 lg:px-32 bg-slate-200 py-20 flex flex-col justify-center items-center w-full">
      <span className="text-center text-2xl font-bold">Contact Us</span>
      <div className="w-16 h-[4px] mt-2 bg-[#603FBA]"></div>
      <div className="bg-white rounded-xl w-[95%] lg:w-[75%] flex flex-col justify-center items-center mt-6 px-4 lg:px-20 py-10">
        <span className="font-bold text-lg text-start w-[90%] lg:w-[70%]">
          Email
        </span>
        <input
          type="text"
          placeholder="Type your Email"
          className=" border-gray-500 border w-[90%] lg:w-[70%] px-4 py-1 outline-none mt-2"
        />
        <span className="font-bold text-lg mt-4 text-start w-[90%] lg:w-[70%]">
          Phone No
        </span>
        <input
          type="text"
          placeholder="Type your Phone No (optional)"
          className=" border-gray-500 border w-[90%] lg:w-[70%] px-4 py-1 outline-none mt-2"
        />
        <span className="font-bold text-lg mt-4 text-start w-[90%] lg:w-[70%]">
          Message
        </span>
        <textarea
          placeholder="Type your Message"
          className=" border-gray-500 border w-[90%] lg:w-[70%] px-4 py-1 outline-none mt-2"
        />
        <br />
        <div className="w-[90%] lg:w-[70%]">
          <div className="flex w-[45%] lg:w-[26%] flex-row gap-2 justify-between items-center bg-[#603FBA] py-1 px-4 rounded-md cursor-pointer">
            <span className="font-semibold text-white">Submit</span>
            <div className="animate-left-right">
              <Image src={arrowImage} width={30} />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
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

export default Contact;
