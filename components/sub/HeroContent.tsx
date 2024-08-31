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
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-16 w-full z-[20] "
    >
      <div className="w-1/2 text-white">
      <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-8"
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
          className="text-lg text-gray-400 my-5 max-w-[600px]"
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
      
      </div>
      <motion.div className="w-1/2 flex justify-center items-center" 
      variants={slideInFromRight(0.5)}
      >
      <Image
        className="scale-90  relative"
          src="/me.png"
          alt="work icons"
          width={410}
          height={300}
        />

      </motion.div>
  
    </motion.div>
  );
};

export default HeroContent;
