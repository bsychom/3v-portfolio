"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../ui/layout-grid";

export function LayoutGridDemo() {
  return (
    <div className="h-screen py-20 w-full relative">
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
      <p className="font-bold md:text-4xl text-xl text-white">
      Full Stack Development
        </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
       
      </p>
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
      "/frontend.jpeg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "/fullstack.jpeg",
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
    className: "md:col-span-2",
    thumbnail:
      "/mobile.avif",
  },
];
