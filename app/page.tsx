"use client";
import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import { words } from "@/components/sub/Writer";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import Image from "next/image";
import Lottie from "lottie-react";
import anim from "../public/Animation - 1721896417600.json";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
import { MeteorsDemo } from "@/components/sub/MetroDemo";
import { LayoutGridDemo } from "@/components/sub/LayoutGridDemo";
export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <section className="w-full h-screen" id="aboutme">
          <div className="relative">
            <div className="absolute  z-50 h-full w-full bg-black/80 ">
              <div className="flex container w-full h-full items-center">
                <div className="w-full md:w-[65%] mx-auto  text-white rounded-md  py-10">
                <motion.div
          variants={slideInFromTop}>

      <MeteorsDemo/>
          </motion.div>
              

                </div>
              </div>
            </div>

            <Lottie  animationData={anim} />
          </div>
        </section>
        <section className="container text-white relative">
          <div className="w-full flex flex-col items-center justify-center pt-10">

        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-8"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] font-[Poppins] font-semibold pr-2">
          What I Will Do For You
          </h1>
        </motion.div >
        <div className="">

        <h2 className="text-xl  font-[Poppins] font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-cyan-800">Services</h2>
        </div>
        <div className="relative w-full h-[80vh]">
          <div className="w-full absolute z-40 ">

        <LayoutGridDemo/>
        {/* <Image src='/mobile.avif' alt="" width={100} height={500}/> */}
          </div>

        </div>
          </div>
          
        </section>

        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
