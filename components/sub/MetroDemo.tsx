import React from "react";
import { Meteors } from "../ui/meteors";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";


export function MeteorsDemo() {
  return (
    <div className="">
      <div className=" w-full relative max-w-5xl container  px-5 md:px-0">
        <div className="  h-full w-full  rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-black/50 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl ">
        

          <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-8"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] font-[Poppins] font-semibold pr-2">
          Aboute Me
          </h1>
        </motion.div >

          <p className="font-normal font-[Poppins] text-sm md:text-base text-slate-400 mb-4 relative px-4 z-50 text-justify">
            
            Hello! I'm Haddaoui Mohamed, a full stack software engineer with a
                  strong passion for IT and new technologies. Currently a
                  student at 1337, I've honed my skills in both frontend and
                  backend development, working with tools like Angular, Nest.js,
                  GraphQL, and more. I thrive on creating seamless and
                  user-friendly applications, whether it's a travel app like
                  "TravelEase" or an AI-powered scriptwriting software like
                  PlotDot. My adaptability and rigorous approach make me a
                  valuable team player, always eager to learn and contribute to
                  innovative projects. Recently, I worked as a freelancer on a
                  website for structured cabling and telephonic services,
                  showcasing my ability to tackle diverse and technical
                  challenges. My journey includes an internship at Thinkable. I
                  believe in continuous growth and am excited to keep developing
                  my skills and collaborating on exciting ventures. Let's
                  connect and create something amazing together!
          </p>

          

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
