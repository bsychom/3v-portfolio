"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../ui/layout-grid";

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
      <p className="font-medium text-base w-[70%] pt-5 font-lexend-deca text-[#B7AEAE]">
This project is a sleek and user-friendly financial app built entirely on the front end. Leveraging the power of Next.js 13, Tailwind CSS, TypeScript, and DeasyUI, this app delivers a seamless financial management experience .     

      </p>
        <div  className="text-white w-full flex ">
          <button>first</button><button>second</button>
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
