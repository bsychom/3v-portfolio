"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../ui/layout-grid";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
export function LayoutGridDemo() {
  return (
    <div className="min-h-screen  py-20 w-full relative">
      <h1 className="text-[40px] font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 font-[Poppins] px-2 italic">
        My Projects
      </h1>
      <LayoutGrid cards={Cards} />
    </div>
  );
}

interface Data {
  title: string;
  desc: string;
  git?: string;
  view?: string;
  figma?: string;
  className: string;
  thumbnail: string;
}

interface Card {
  id: number;
  content: JSX.Element;
  className: string;
  thumbnail: string;
}

const data: Data[] = [
  {
    title: "IRC",
    desc: "This project is about creating your own IRC server, Developed in C++ it delivers real-time and customizable text-based interactions through multiple channels, private messaging, and many IRC command support.",
    git: "https://github.com/mhaddaou/ft_irc-",
    className: "md:col-span-2",
    thumbnail: "/irc.jpg",
  },
  {
    title: "Financial App",
    desc: "This project is a sleek and user-friendly financial app built entirely on the front end. Leveraging the power of Next.js 13, Tailwind CSS, TypeScript, and DeasyUI, this app delivers a seamless financial management experience . ",
    git: "https://github.com/mhaddaou/App_Financial",
    view: "https://financial-gray.vercel.app/",
    className: "col-span-1",
    thumbnail: "/financial.png",
  },

  {
    title: "Financial App",
    desc: "This project is a sleek and user-friendly financial app built entirely on the front end. Leveraging the power of Next.js 13, Tailwind CSS, TypeScript, and DeasyUI, this app delivers a seamless financial management experience . ",
    git: "https://github.com/mhaddaou/App_Financial",
    view: "https://financial-gray.vercel.app/",
    className: "col-span-1",
    thumbnail: "/backend.jpeg",
  },
  {
    title: "Financial App",
    desc: "This project is a sleek and user-friendly financial app built entirely on the front end. Leveraging the power of Next.js 13, Tailwind CSS, TypeScript, and DeasyUI, this app delivers a seamless financial management experience . ",
    git: "https://github.com/mhaddaou/App_Financial",
    view: "https://financial-gray.vercel.app/",
    className: "col-span-1",
    thumbnail: "/mobile.avif",
  },
  {
    title: "Financial App",
    desc: "This project is a sleek and user-friendly financial app built entirely on the front end. Leveraging the power of Next.js 13, Tailwind CSS, TypeScript, and DeasyUI, this app delivers a seamless financial management experience . ",
    git: "https://github.com/mhaddaou/App_Financial",
    view: "https://financial-gray.vercel.app/",
    className: "col-span-1",
    thumbnail: "/mobile.avif",
  },
  {
    title: "Financial App",
    desc: "This project is a sleek and user-friendly financial app built entirely on the front end. Leveraging the power of Next.js 13, Tailwind CSS, TypeScript, and DeasyUI, this app delivers a seamless financial management experience . ",
    git: "https://github.com/mhaddaou/App_Financial",
    view: "https://financial-gray.vercel.app/",
    className: "col-span-1",
    thumbnail: "/mobile.avif",
  },
  {
    title: "Financial App",
    desc: "This project is a sleek and user-friendly financial app built entirely on the front end. Leveraging the power of Next.js 13, Tailwind CSS, TypeScript, and DeasyUI, this app delivers a seamless financial management experience . ",
    git: "https://github.com/mhaddaou/App_Financial",
    view: "https://financial-gray.vercel.app/",
    className: "col-span-1",
    thumbnail: "/mobile.avif",
  },
  {
    title: "Financial App",
    desc: "This project is a sleek and user-friendly financial app built entirely on the front end. Leveraging the power of Next.js 13, Tailwind CSS, TypeScript, and DeasyUI, this app delivers a seamless financial management experience . ",
    git: "https://github.com/mhaddaou/App_Financial",
    view: "https://financial-gray.vercel.app/",
    className: "col-span-1",
    thumbnail: "/mobile.avif",
  },
  {
    title: "Financial App",
    desc: "This project is a sleek and user-friendly financial app built entirely on the front end. Leveraging the power of Next.js 13, Tailwind CSS, TypeScript, and DeasyUI, this app delivers a seamless financial management experience . ",
    git: "https://github.com/mhaddaou/App_Financial",
    view: "https://financial-gray.vercel.app/",
    className: "col-span-1",
    thumbnail: "/mobile.avif",
  },
  {
    title: "Financial App",
    desc: "This project is a sleek and user-friendly financial app built entirely on the front end. Leveraging the power of Next.js 13, Tailwind CSS, TypeScript, and DeasyUI, this app delivers a seamless financial management experience . ",
    git: "https://github.com/mhaddaou/App_Financial",
    view: "https://financial-gray.vercel.app/",
    className: "col-span-2",
    thumbnail: "/mobile.avif",
  },
];

const Skeleton = ({ item }: { item: Data }) => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white font-lemonada">
        {item.title}
      </p>
      <p className="font-medium  w-[70%] pt-5 font-lexend-deca text-[#B7AEAE] text-sm">
        {item.desc}
      </p>
      <div className="flex justify-end pr-12 gap-5 py-9">
        {item.git && (
          <motion.button
            className="shadow-2xl shadow-white   rounded-lg"
            whileHover={{ scale: 1.1, transition: { duration: 1 } }}
            whileTap={{ scale: 0.9 }}
          >
            <Link
              href={item.git}
              target="_blank"
              className="py-3.5 text-sm  relative button-primary gap-3  px-4 border-[0.1px] capitalize flex border-[#7042f8] font-lemonada font-bold tracking-wider text-center  shadow-2xl shadow-white text-white cursor-pointer rounded-lg max-w-[200px]"
            >
              code base
              <Image src="/git.svg" alt="" width={20} height={12} />
            </Link>
          </motion.button>
        )}
        {item.view && (
          <motion.button
            className="shadow-2xl shadow-white   rounded-xl"
            whileHover={{ scale: 1.1, transition: { duration: 1 } }}
            whileTap={{ scale: 0.9 }}
          >
            <Link
              href={item.view}
              target="_blank"
              className="py-3.5 relative button-primary px-4 border-[0.1px] capitalize border-[#7042f88b] font-lemonada font-bold tracking-wider  flex gap-3 text-center text-white cursor-pointer text-sm  rounded-lg max-w-[200px]"
            >
              quick view{" "}
              <Image src="/redirect.png" alt="" width={20} height={12} />
            </Link>
          </motion.button>
        )}
      </div>
    </div>
  );
};

const Cards: Card[] = data.map((item, index) => {
  return {
    id: index,
    content: <Skeleton item={item} />,
    className: item.className,
    thumbnail: item.thumbnail,
  };
});
