/** @format */

import Image from "next/image";
import React from "react";

const Mission = ({ tilte, image, desc }) => {
  return (
    <div className="flex flex-1 rounded-lg flex-col py-5 px-1 md:px-5 justify-center items-start">
      <div>
        <Image src={image} width={50} />
      </div>
      <br />
      <span className="font-bold text-white text-xl">{tilte}</span>
      <span className="text-gray-100 font-semibold text-left text-[14px] mt-4">
        {desc}
      </span>
    </div>
  );
};

export default Mission;
