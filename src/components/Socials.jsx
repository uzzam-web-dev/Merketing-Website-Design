/** @format */

import React, { useEffect, useState } from "react";
import Script from "next/script";

const Socials = () => {
  const [screenWidth, setScreenWidth] = useState(null);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
      console.log(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);

    handleResize(); // Set initial screen width

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center w-full lg:px-32">
      <span className="text-2xl font-bold text-center">Socials</span>
      <div className="w-16 h-[4px] mt-2 bg-[#603FBA]"></div>
      <div className="flex flex-col items-start justify-center gap-8 mt-10 lg:flex-row">
        {screenWidth > 620 ? (
          <div className="h-[900px]">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100091355390595%26mibextid%3DZbWKwL&tabs=timeline&width=500&height=900&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="500"
              height="900"
              style={{
                border: "none",
                overflow: "hidden",
                display: "flex",
                flex: "1",
              }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        ) : (
          <div className="h-[600px]">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100091355390595%26mibextid%3DZbWKwL&tabs=timeline&width=300&height=600&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="300"
              height="600"
              style={{
                border: "none",
                overflow: "hidden",
                display: "flex",
                flex: "1",
              }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        )}
        <div className="w-[275px] lg:w-[510px]">
          <a
            className="twitter-timeline"
            href="https://twitter.com/Shmarketing13?ref_src=twsrc%5Etfw"
          >
            Tweets by Shmarketing13
          </a>
          <Script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          ></Script>
        </div>
      </div>
    </div>
  );
};

export default Socials;
