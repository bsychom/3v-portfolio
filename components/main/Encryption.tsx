"use client";
import React from "react";

import { motion } from "framer-motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <div className="flex flex-row relative  items-center justify-center  w-full md:h-[600px] h-[400px] mt-28 lg:mt-10 ">
      <div className="absolute w-auto h-auto -top-7 sm:-top-1 xl:-top-8  2xl:-top-11  z-[5]  ">
        <motion.div
        initial={{opacity:0}} whileInView={{opacity: 1, x:[500,0]}} transition={{duration: 2}} viewport={{once: true}}
          className="text-[40px] font-bold 2xl:font-medium text-center text-gray-200 bg-[url('/text.jpeg')] bg-contain bg-clip-text text-transparent  animate-text-slide uppercase "
        >
          Performance
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            &{" "}
          </span>
          Security
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/LockTop.png"
            alt="Lock top"
            width={50}
            height={50}
            className="w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <Image
            src="/LockMain.png"
            alt="Lock Main"
            width={70}
            height={70}
            className=" z-10"
          />
        </div>

        <div className="Welcome-box px-[15px] py-[4px] z-[20] brder my-[20px] border-[#7042f88b] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px]">Encryption</h1>
        </div>
      </div>
      <div className="absolute z-[20] bottom-[10px] px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          Secure your data with end-to-end encryption
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
          src="/encryption.webm/"
        />
      </div>
    </div>
  );
};

export default Encryption;
