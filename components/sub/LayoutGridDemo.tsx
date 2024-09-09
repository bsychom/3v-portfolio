"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../ui/layout-grid";
import Image from "next/image";
import {motion} from 'framer-motion'
import Link from "next/link";
export function LayoutGridDemo() {
  return (
    <div className="min-h-screen  py-20 w-full relative">
      <h1 className="text-[40px] font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 font-[Poppins] px-2 italic">
        My Projects
      </h1>
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      Frontend Development
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white font-lemonada">
      Financial App
        </p>
      <p className="font-medium  w-[70%] pt-5 font-lexend-deca text-[#B7AEAE] text-sm">
This project is a sleek and user-friendly financial app built entirely on the front end. Leveraging the power of Next.js 13, Tailwind CSS, TypeScript, and DeasyUI, this app delivers a seamless financial management experience .     

      </p>
        <div className="flex justify-end pr-12 gap-5 py-9">
        <motion.button className="shadow-2xl shadow-white   rounded-lg"
          whileHover={{scale: 1.1,transition:{duration: 1} }} whileTap={{ scale: 0.9 }}
          >
        <Link href="https://github.com/mhaddaou/App_Financial" target="_blank"
          className="py-3.5 text-sm  relative button-primary gap-3  px-4 border-[0.1px] capitalize flex border-[#7042f8] font-lemonada font-bold tracking-wider text-center  shadow-2xl shadow-white text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          code base
          <Image src='/git.svg' alt="" width={20} height={12}/>
        </Link>

          </motion.button>
          <motion.button className="shadow-2xl shadow-white   rounded-xl"
          whileHover={{scale: 1.1,transition:{duration: 1} }} whileTap={{ scale: 0.9 }}
          >
        <Link href="https://financial-gray.vercel.app/" target="_blank" 
          className="py-3.5 relative button-primary px-4 border-[0.1px] capitalize border-[#7042f88b] font-lemonada font-bold tracking-wider  flex gap-3 text-center text-white cursor-pointer text-sm  rounded-lg max-w-[200px]"
        >
          quick view <Image src='/redirect.png' alt="" width={20} height={12}/>
        </Link>

          </motion.button>
          
        </div>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white pb-6 font-[Poppins]">
      Backend Development
      </p>
      <div className="flex flex-col gap-2 ">
      <p className="font-medium text-sm text-slate-200 font-[Poppins]">Developing robust backend systems with Node.js, Express.js, and Nest.js.</p>
      <p className="font-medium text-sm text-slate-200 font-[Poppins]">Creating and managing APIs with GraphQL for efficient data querying.</p>
      <p className="font-medium text-sm text-slate-200 font-[Poppins]">Database design and management with MongoDB, Mongoose, MySQL, PostgreSQL, and Neo4j.
      </p>

      </div>
      
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white pb-6 font-[Poppins]">
      Mobile App Development
      </p>
      <div className="flex flex-col gap-2 ">
      <p className="font-medium text-sm text-slate-200 font-[Poppins]">Crafting cross-platform mobile applications using React Native and Expo</p>
      <p className="font-medium text-sm text-slate-200 font-[Poppins]">Integrating native functionalities and optimizing performance for a smooth user experience</p>
      <p className="font-medium text-sm text-slate-200 font-[Poppins]">Ensuring responsive design and efficient styling with frameworks like Tailwind CSS and NativeWind</p>

      </div>
      
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "/irc.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "/financial.png",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "/backend.jpeg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "",
    thumbnail:
      "/mobile.avif",
  },
  {
    id: 5,
    content: <SkeletonFour />,
    className: "",
    thumbnail:
      "/mobile.avif",
  },
  {
    id: 6,
    content: <SkeletonFour />,
    className: "",
    thumbnail:
      "/mobile.avif",
  },
  {
    id: 7,
    content: <SkeletonFour />,
    className: "",
    thumbnail:
      "/mobile.avif",
  },
  {
    id: 8,
    content: <SkeletonFour />,
    className: "",
    thumbnail:
      "/mobile.avif",
  },
  {
    id: 9,
    content: <SkeletonFour />,
    className: "",
    thumbnail:
      "/mobile.avif",
  },
  {
    id: 10,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "/mobile.avif",
  },
 
];
