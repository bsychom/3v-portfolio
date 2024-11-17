'use client'
import React from "react";
import HeroContent from "../sub/HeroContent";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/utils/utils";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

const Hero = () => {
  return (
    
    <div className="relative flex flex-col h-full w-full" id="hero">
      <HeroContent />
    </div>
  );
};

export default Hero;



