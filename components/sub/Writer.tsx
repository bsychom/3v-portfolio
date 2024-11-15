"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

export const words = [
   {
     text: "Providing",
     className: "bg-[url('/text.jpeg')] bg-contain bg-clip-text text-transparent  animate-text-slide pb-1.5"
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
     className: "bg-[url('/text.jpeg')] bg-contain bg-clip-text text-transparent  animate-text-slide pb-1.5"

   },
   {
     text: "exprience",
     className: "bg-[url('/text.jpeg')] bg-contain bg-clip-text text-transparent  animate-text-slide b-1.5"
    //  className: "text-blue-500 dark:text-blue-500",
   },
 ];
export function TypewriterEffectSmoothDemo() {
  return (
    <div className="flex flex-col items-center justify-center    ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base text-center  ">
        {/* The road to freedom starts from here */}
      </p>
      <TypewriterEffectSmooth words={words} />
      
    </div>
  );
}
