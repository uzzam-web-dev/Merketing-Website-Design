/** @format */

import React, { useEffect, useState } from "react";
import Script from "next/script";

const Socials = () => {
  const [screenWidth, setScreenWidth] = useState(null);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize(); // Set initial screen width

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center w-full lg:px-32">
      <span className="text-2xl font-bold text-center">Socials</span>
      <div className="w-16 h-[4px] mt-2 bg-[#603FBA]"></div>
      <div className="flex flex-col items-center justify-center gap-8 mt-10 lg:flex-row">
        <Script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v16.0"
          nonce="EZlPRUv6"
        ></Script>
        <div>
          <div
            className="fb-page"
            data-href="https://www.facebook.com/profile.php?id=100091355390595&amp;mibextid=ZbWKwL"
            data-width="499"
            data-tabs="timeline"
            data-small-header="true"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
          >
            <blockquote
              cite="https://www.facebook.com/profile.php?id=100091355390595&amp;mibextid=ZbWKwL"
              className="fb-xfbml-parse-ignore"
            >
              <a href="https://www.facebook.com/profile.php?id=100091355390595&amp;mibextid=ZbWKwL">
                SHM
              </a>
            </blockquote>
          </div>
        </div>
        <div className="w-[250px] lg:w-[510px] h-96 lg:h-[500px]">
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
