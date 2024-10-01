"use client";
import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Lottie from "lottie-react";
import anim from "../public/Animation - 1721896417600.json";
import { motion } from "framer-motion";
import { MeteorsDemo } from "@/components/sub/MetroDemo";
import { LayoutGridDemo } from "@/components/sub/LayoutGridDemo";
export default function Home() {
  return (
    <main className=" w-screen">
      <div className="flex flex-col gap-20">
        <Hero />
        <motion.section className="w-full   pt-24" id="aboutme">
          <motion.div className="relative w-full  min-h-[380px] sm:min-h-[100px]">
            <motion.div
              className="hidden sm:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: [-800, 0], rotate: 0 }}
              transition={{ duration: 2 }}
            >
              <Lottie animationData={anim} />
            </motion.div>
            <motion.div className=" absolute w-full h-full z-50 sm:bg-black/80  top-0 left-0">
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
        {/* <Projects /> */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: [-800, 0] }}
          transition={{ duration: 2 }}
          className="container relative z-40"
        >
        <LayoutGridDemo/>
    </motion.div>
    {/* <div className="w-screen  relative z-[500]  text-white flex h-screen mb-28" id="contactme">
      <div className="flex flex-col justify-center">
    <Image src='talk.svg' alt="" width={400} height={100}/>
    <Image src='contactdec.svg' alt="" width={500} height={100}/>

      </div>
     


    </div> */}
      </div>
    </main>
  );
}
