"use client";

import React from "react";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { words } from "./Writer";
import { TypewriterEffect } from "../ui/typewriter-effect";
import Link from "next/link";

const HeroContent = () => {
  return (
    <div className="flex gap-24 flex-col-reverse lg:flex-row container items-center pt-16 pb-36 lg:py-40  ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ x: [-500, 0], opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="w-full  lg:w-1/2  pb-20 lg:pb-0  flex  flex-col gap-10  items-center lg:items-start justify-around  "
      >
        <div className="Welcome-box py-[8px]  px-[7px]  border border-[#7042f88b] opacity-[0.9]  ">
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] font-[Poppins] font-semibold pr-1 mx-auto">
            Welcome to My Portfolio
          </h1>
        </div>
        <div className=" w-[80%] lg:w-full max-w-lg   text-center lg:text-start">
          <TypewriterEffect words={words} />
        </div>
        <div>
          <p className="text-lg text-gray-400 max-w-lg  w-[80%]  lg:w-full  mx-auto">
            I&apos;m a Full Stack Software Engineer with experience in Website,
            Mobile, and Software development. Check out my projects and skills.
          </p>
        </div>

        <div className="flex gap-5  py-4 relative z-30">
          <button type="button">
            <Link
              href="/#about"
              className="py-3 relative button-primary px-4 font-lemonada font-bold tracking-wider text-center text-white cursor-pointer rounded-lg max-w-[200px]"
            >
              Learn More!
            </Link>
          </button>
          <button type="button">
            <motion.a
              href="Mohamed_Haddaoui_Resume.pdf"
              target="_blank"
              className="py-3 relative button-primary px-4 font-lemonada font-bold tracking-wider text-center text-white cursor-pointer rounded-lg max-w-[200px]"
            >
              Download CV
            </motion.a>
          </button>
        </div>
      </motion.div>
      <div className="w-full lg:w-1/2  flex justify-center pr-6 ">
        <motion.div
          initial={{ opacity: 0, rotateZ: 180 }}
          animate={{ opacity: 1, x: [500, 0], rotateZ: 0 }}
          transition={{ duration: 3 }}
          className="w-1/2   h-full relative  flex justify-center items-center"
        >
          <div className=" min-h-[300px] min-w-[300px]  md:min-h-[400px] md:min-w-[400px] rounded-full  relative   shadow-[16px_20px_16px_20px_#7042f88b]">
            <div className="absolute min-w-[310px] min-h-[310px] md:min-w-[410px] md:min-h-[410px] flex justify-center items-center  overflow-hidden  w-[310px] h-[310px]  md:w-[410px] md:h-[410px] -left-[5px] -top-[5px]  z-0 rounded-full">
              <div className="w-full h-[50%] bg-white relative  animate-avatar-spin "></div>
            </div>
            <div className="w-full h-full relative">
              <motion.img
                src="/mhaddaou.png"
                className="object-cover w-[300px] h-[300px] md:h-[400px] md:w-[400px] object-top  realative z-20   rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroContent;
