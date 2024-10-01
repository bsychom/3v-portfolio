"use client";

import React from "react";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { words } from "./Writer";
import { TypewriterEffect} from "../ui/typewriter-effect";
import Link from "next/link";

const HeroContent = () => {
  return (
   <div className="w-full flex flex-col-reverse items-center lg:flex-row gap-16 mb-5 md:mb-0 md:gap-0  container relative  pt-40">
    <motion.div  className="w-[90%] mx-auto lg:w-1/2 text-white flex flex-col gap-12  relative z-20  ">
     {/* welcom text */}
      <motion.div
  initial={{opacity: 0}} animate={{opacity: 1,x:[-500,0]}} transition={{duration:0.5}}
          className="Welcome-box py-[8px]  px-[7px] border border-[#7042f88b] opacity-[0.9] self-center md:self-start"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] font-[Poppins] font-semibold pr-1">
          Welcome to My Portfolio
          </h1>
        </motion.div>
        {/* writer lib */}
        <motion.div 
        initial={{opacity: 0}} animate={{opacity: 1,x:[-500,0]}} transition={{duration:0.5}}
        className="">
          
          
      <TypewriterEffect words={words}/>

        </motion.div>
        {/* text */}
      <motion.p
      initial={{opacity: 0}} animate={{opacity: 1, x:[-500,0]}}  transition={{duration:2}}
          className="text-lg text-gray-400  w-[90%]  md:max-w-[500px]"
        >
          Im a Full Stack Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
        </motion.p>
        {/* buttons */}
        <motion.div className="flex gap-5"
      initial={{opacity: 0}} animate={{opacity: 1,x:[-500,0]}} transition={{duration:2.5}}

        
        >
          <motion.button
          whileHover={{scale: 1.1,transition:{duration: 1} }} whileTap={{ scale: 0.9 }}
          >
        <Link href='/#aboutme'
          className="py-3 relative button-primary px-4 font-lemonada font-bold tracking-wider text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </Link>

          </motion.button>
        <motion.button whileHover={{scale: 1.1,transition:{duration: 1} }} whileTap={{ scale: 0.9 }}>
        <motion.a href="Mohamed_Haddaoui_FullStack_cv.pdf" target="_blank"
          className="py-3 relative button-primary px-4 font-lemonada font-bold tracking-wider text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Download CV
        </motion.a>

        </motion.button>
        
        </motion.div>
        
      
      </motion.div>
      <motion.div initial={{opacity: 0, rotateZ:180 }} animate={{opacity: 1,x:[500,0], rotateZ: 0}} transition={{duration:3}} className="w-1/2   h-full relative bg-red-60 flex justify-center items-center"

      >
        <div className=" min-h-[300px] min-w-[300px]  md:min-h-[400px] md:min-w-[400px] rounded-full  relative   shadow-[16px_20px_16px_20px_#7042f88b]">
          <div className="absolute min-w-[310px] min-h-[310px] md:min-w-[410px] md:min-h-[410px] flex justify-center items-center  overflow-hidden  w-[310px] h-[310px]  md:w-[410px] md:h-[410px] -left-[5px] -top-[5px]  z-0 rounded-full">
            <div className="w-full h-[50%] bg-white relative  animate-avatar-spin ">
            </div>
          </div>
          <div className="w-full h-full relative">
        <motion.img src="/mhaddaou.png" className="object-cover w-[300px] h-[300px] md:h-[400px] md:w-[400px] object-top  realative z-20   rounded-full"/>

          </div>

        </div>


      </motion.div>

   </div>
  );
};

export default HeroContent;
