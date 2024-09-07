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
        <motion.section className="w-full   pt-24" id="aboutme">
          <motion.div className="relative w-full  min-h-[100px]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: [-800, 0], rotate: 0 }}
              transition={{ duration: 2 }}
            >
              <Lottie animationData={anim} />
            </motion.div>
            <motion.div className=" absolute w-full h-full z-50 bg-black/80  top-0 left-0">
              <div className="relative flex w-full h-full  justify-center items-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, x: [800, 0], y: [-600, 0], rotate: 0 }}
                  transition={{ duration: 2 }}
                  className="w-full  md:w-[65%] mx-auto realtive  text-white rounded-md  py-10"
                >
                  <MeteorsDemo />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
