'use client'
import React from "react";
import {motion} from "framer-motion"
import Image from "next/image";

const Navbar = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1, y:[-70,0]}} transition={{ease: "easeIn", duration:1.5 }}  className="w-full backdrop-blur-3xl    fixed z-[999]">
    <div className="w-full flex justify-around text-white items-center  font-[Poppins] ">
    <div>
      <Image src="/logo.png" width={80} height={10} className="pt-2" alt="logo"/>
    </div>
    <div>second</div>
    <div>contact</div>

    </div>

    </motion.div>
    
  );
};

export default Navbar;
