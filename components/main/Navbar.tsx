'use client'
import React from "react";
import {motion} from "framer-motion"

const Navbar = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1, y:[-70,0]}} transition={{ease: "easeIn", duration:1.5 }}  className="w-full  bg-black/40 fixed z-50">
    <div className="w-full flex justify-around text-white font-[Poppins] py-5">
    <div>Mhaddaou</div>
    <div>second</div>
    <div>contact</div>

    </div>

    </motion.div>
    
  );
};

export default Navbar;
