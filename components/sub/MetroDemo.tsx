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
              I am a dedicated software engineer with a passion for developing
              innovative web and mobile applications. My expertise spans both
              frontend and backend development, with a focus on creating
              seamless, user-friendly experiences. Proficient in technologies
              such as React Native, Angular, and Next.js on the frontend, and
              Node.js, NestJS, and MongoDB on the backend, I have successfully
              built scalable solutions leveraging REST APIs and GraphQL.
            </p>
            <p className="font-normal font-[Poppins] text-sm md:text-base text-slate-400 mb-4 relative  z-50 text-justify">
              With professional experience as a software engineer at Thinkable
              in the United States, I have worked exclusively in remote
              environments. This experience has refined my ability to
              communicate effectively, collaborate across time zones, and manage
              projects independently, ensuring high-quality deliverables and
              timely results.
            </p>
            <p className="font-normal font-[Poppins] text-sm md:text-base text-slate-400 mb-4 relative  z-50 text-justify">
              I have a solid understanding of modern web development practices,
              utilizing technologies like Tailwind CSS, TypeScript, and Docker
              to deliver robust and maintainable systems. As a developer, I am
              constantly exploring new technologies, such as Redux for state
              management, and improving my skills to stay ahead of industry
              trends.
            </p>

            <p className="font-normal font-[Poppins] text-sm md:text-base text-slate-400 mb-4 relative  z-50 text-justify">
              Driven by curiosity, adaptability, and a commitment to
              high-quality, efficient code, I thrive in remote collaborative
              environments, always eager to contribute to innovative projects
              and solve complex challenges.
            </p>
          </div>

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
