/** @format */

import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import DemoCall from "@/components/DemoCall";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OurMission from "@/components/OurMission";
import Socials from "@/components/Socials";
import WorkExperience from "@/components/WorkExperience";
import Head from "next/head";
import { useRef } from "react";

export default function Home() {
  const missionRef = useRef();
  const scrollToMission = () => {
    missionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const aboutRef = useRef();
  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const contactRef = useRef();
  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Head>
        <title>The SH Marketing</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div>
        <Header
          scrollToMission={scrollToMission}
          scrollToAbout={scrollToAbout}
          scrollToContact={scrollToContact}
        />
        <div className="relative z-10">
          <Hero scrollToContact={scrollToContact} />
        </div>
        <div ref={missionRef}>
          <OurMission />
        </div>
        <br />
        <br />
        <br />
        <div>
          <WorkExperience />
        </div>
        <div ref={aboutRef}>
          <AboutUs />
        </div>
        <div>
          <DemoCall />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
        <br />
        <Socials />
      </div>
    </>
  );
}
