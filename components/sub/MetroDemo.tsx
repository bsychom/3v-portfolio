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
          </motion.div>
          <div className="px-4 flex flex-col gap-3">
            <h3 className=" font-semibold text-slate-400 text-lg">
              Hello! I&apos;m Haddaoui Mohamed
            </h3>

            <p className="font-normal font-[Poppins] text-sm md:text-base text-slate-400 mb-4 relative  z-50 text-justify">
              I am passionate software engineer specializing in both web and
              mobile development. I have expertise in React Native, Angular, and
              Next.js for frontend, and Node.js, NestJS, and MongoDB for
              backend. With experience building scalable applications using REST
              APIs and GraphQL, I focus on creating seamless user experiences.
            </p>
            <p className="font-normal font-[Poppins] text-sm md:text-base text-slate-400 mb-4 relative  z-50 text-justify">
              I&apos;m always exploring new technologies like Redux, Tailwind CSS,
              and TypeScript to stay ahead of industry trends. Driven by
              curiosity, adaptability, and a commitment to writing efficient,
              high-quality code, I am eager to contribute to innovative projects
              and solve complex challenges in collaborative environments.
            </p>
            <p className="font-normal font-[Poppins] text-sm md:text-base text-slate-400 mb-4 relative  z-50 text-justify">
              I believe in continuous growth and constantly seek out
              opportunities to expand my knowledge and skill set. My passion for
              innovation drives me to not only improve existing systems but also
              create new solutions that make a meaningful impact.
            </p>

            
          </div>

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
