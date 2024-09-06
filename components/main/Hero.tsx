'use client'
import React from "react";
import HeroContent from "../sub/HeroContent";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/utils/utils";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full " id="about-me">
      
      <motion.div
        initial={{  opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut",duration: 2 }}
      >
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute lg:top-[-363px] md:top-[-550px] ms:top-[-600px] top-[-700px]    h-full w-full left-0 z-[1] object-cover "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
        
      </motion.div>

      <HeroContent />
    </div>
    // <div className="h-96 relative w-full overflow-hidden  flex flex-col items-center justify-center rounded-lg">
    //   <div className="absolute inset-0 w-full h-full  z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
 
    //   <Boxes />
      
    // </div>
  );
};

export default Hero;



