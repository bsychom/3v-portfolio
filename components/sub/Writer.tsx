"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

export const words = [
   {
     text: "Providing",
   },
   {
     text: "the ",
     className: "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
   },
   {
     text: "best",
     className: "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
   },
   {
     text: "project",
   },
   {
     text: "exprience",
    //  className: "text-blue-500 dark:text-blue-500",
   },
 ];
export function TypewriterEffectSmoothDemo() {
  return (
    <div className="flex flex-col items-center justify-center   ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base text-center  ">
        {/* The road to freedom starts from here */}
      </p>
      <TypewriterEffectSmooth words={words} />
      
    </div>
  );
}
