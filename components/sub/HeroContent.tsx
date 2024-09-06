"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { TypewriterEffectSmoothDemo, words } from "./Writer";
import { TypewriterEffect, TypewriterEffectSmooth } from "../ui/typewriter-effect";

const HeroContent = () => {
  return (
   <div className="w-full flex   container relative  pt-40">
    <motion.div initial={{opacity: 0}} animate={{opacity: 1,x:[-500,0]}} transition={{duration:3}} className="w-full lg:w-1/2 text-white">
      <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px]  px-[7px] border border-[#7042f88b] opacity-[0.9] mb-8"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] font-[Poppins] font-semibold pr-1">
          Welcome to My Portfolio
          </h1>
        </motion.div>
        <div className="pb-8">
      <TypewriterEffect words={words}/>

        </div>
      <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[500px]"
        >
          I&apos;m a Full Stack Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary px-4 font-[Poppins] text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a>
      
      </motion.div>
      <motion.div initial={{opacity: 0, rotateZ:180 }} animate={{opacity: 1,x:[500,0], rotateZ: 0}} transition={{duration:3}} className="w-1/2 h-full relative bg-red-60 flex justify-center items-center"

      >
        <div className=" min-h-[400px] min-w-[400px] md:min-h-[500px] md:min-w-[500px] rounded-full  relative   shadow-[16px_20px_16px_20px_#7042f88b]">
          <div className="absolute min-w-[410px] min-h-[410px] md:min-w-[510px] md:min-h-[510px] flex justify-center items-center  overflow-hidden  w-[410px] h-[410px]  md:w-[510px] md:h-[510px] -left-[5px] -top-[5px]  z-0 rounded-full">
            <div className="w-full h-[50%] bg-white relative  animate-avatar-spin ">
            </div>
          </div>
          <div className="w-full h-full relative">
        <motion.img src="/med.jpeg" className="object-cover w-[400px] h-[400px] md:h-[500px] md:w-[500px]  realative z-20   rounded-full"/>

          </div>

        </div>


      </motion.div>

   </div>
  );
};

export default HeroContent;
