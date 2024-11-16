"use client";
import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { MeteorsDemo } from "@/components/sub/MetroDemo";
import './globals.css'
import { Project } from "@/components/main/Project";
import { ProjectBase } from "@/components/main/ProjectBase";
import Eperience from "@/components/main/Experience";
import About from "@/components/main/About";
export default function Home() {
  return (
    <main className=" w-screen">
      <div className="flex flex-col gap-20">
        <Hero />
        <About/>
        <Eperience/>
        <Skills />
        <Encryption />
        {/* <Project/> */}
        <ProjectBase/>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: [-800, 0] }}
          transition={{ duration: 2 }}
          className="container relative z-40"
        >
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
