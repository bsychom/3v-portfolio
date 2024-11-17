'use client'
import React from "react";
import HeroContent from "../sub/HeroContent";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/utils/utils";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

const Hero = () => {
  return (
    // <div className="relative flex flex-col h-full w-full " id="about-me ">
      
    //   <motion.div
    //     initial={{  opacity: 0 }}
    //     animate={{ opacity: 1 }}
    //     transition={{ ease: "easeOut",duration: 2 }}
    //   >
    //   <video
    //     autoPlay
    //     muted
    //     loop
    //     className="w-full rotate-180 absolute xl:-top-[450px] lg:-top-[300px] md:-top-[270px] sm:-top-[200px] -top-[170px] shadow-2xl 2xl:hidden shadow-black"
    //   >
    //     <source src="/blackhole.webm" type="video/webm" />
    //   </video>
        
    //   </motion.div>

    //   <HeroContent />
    // </div>
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[1] object-cover lg:object-contain "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;



