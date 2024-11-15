import { slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { Meteors } from "../ui/meteors";

export default function Eperience() {
  return (
    // <div className="w-screen container flex flex-col items-center">
    //   <motion.div
    //     variants={slideInFromTop}
    //     className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-8 w-full flex "
    //   >
    //     <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
    //     <h1 className="Welcome-text text-[13px] font-[Poppins] font-semibold pr-2 tracking-wider">
    //       My Experience
    //     </h1>
    //   </motion.div>
    //   <div className="w-full  text-white max-w-lg">
    //     <h1>Software Engineer | Thinkable</h1>
    //     <h2>United States (Remote)</h2>
    //     <p>
    //       At Thinkable, I worked remotely as a software engineer, focusing on
    //       both frontend and backend development. I utilized Angular to create
    //       dynamic, responsive user interfaces and NestJS for building scalable
    //       backend systems. I also worked with MongoDB to manage data
    //       efficiently, ensuring smooth integration via GraphQL.
    //     </p>
    //     <h3>Key responsibilities:</h3>
    //     <ul>
    //       <li>
    //         Developing and maintaining frontend applications using Angular.
    //       </li>
    //       <li>
    //         Building backend systems with NestJS, integrating with GraphQL.
    //       </li>
    //       <li>Managing and optimizing databases with MongoDB.</li>
    //       <li>
    //         Collaborating with cross-functional teams remotely to deliver
    //         high-quality projects.
    //       </li>
    //     </ul>
    //     <div className="pt-8 flex justify-end relative z-20">
    //     <motion.button whileHover={{scale: 1.1,transition:{duration: 1} }} whileTap={{ scale: 0.9 }}>
    //     <motion.a href="Mohamed Haddaoui (LOR).pdf" target="_blank"
    //       className="py-3 relative button-primary px-4 font-lemonada font-bold tracking-wider text-center text-white cursor-pointer rounded-lg max-w-[200px]"
    //     >
    //       Download (LOR)
    //     </motion.a>

    //     </motion.button>
    //     </div>
    //   </div>
    // </div>
    <div className=" pt-32 lg:pt-10 text-white">
    <div className=" w-full relative max-w-4xl container  px-5 md:px-0">
      <div className="  h-full w-full  rounded-full blur-3xl" />
      <div className="relative shadow-xl bg-black/50 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl ">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-8"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <p className="Welcome-text text-[13px] font-[Poppins] font-semibold pr-2">
            My Experience
          </p>
        </motion.div>
        <div className="px-4 flex flex-col gap-3 ont-normal font-[Poppins] text-sm md:text-base text-slate-400 mb-4 relative  z-50 text-justify">
          <h1 className=" font-semibold text-slate-400 text-lg">
          Software Engineer | Thinkable
          </h1>
         <h2>United States (Remote)</h2>
          


          <p className="font-normal font-[Poppins] text-sm md:text-base text-slate-400 mb-4 relative  z-50 text-justify">
          At Thinkable, I worked remotely as a software engineer, focusing on
           both frontend and backend development. I utilized Angular to create
           dynamic, responsive user interfaces and NestJS for building scalable
           backend systems. I also worked with MongoDB to manage data
           efficiently, ensuring smooth integration via GraphQL.
          </p>
        <h3>Key responsibilities:</h3>
        <ul>
           <li>
             Developing and maintaining frontend applications using Angular.
           </li>
           <li>
             Building backend systems with NestJS, integrating with GraphQL.
           </li>
           <li>Managing and optimizing databases with MongoDB.</li>
           <li>
             Collaborating with cross-functional teams remotely to deliver
             high-quality projects.
           </li>
         </ul>
         <div className="pt-8 flex justify-end relative z-20">
         <motion.button whileHover={{scale: 1.1,transition:{duration: 1} }} whileTap={{ scale: 0.9 }}>
         <motion.a href="Mohamed Haddaoui (LOR).pdf" target="_blank"
           className="py-3 relative button-primary px-4 font-lemonada font-bold tracking-wider text-center text-white cursor-pointer rounded-lg max-w-[200px]"
         >
           Download (LOR)
         </motion.a>

         </motion.button>
         </div>
         

          
        </div>

        {/* Meaty part - Meteor effect */}
        <Meteors number={20} />
      </div>
    </div>
  </div>
  );
}
