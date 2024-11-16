import {motion} from 'framer-motion'
import Lottie from 'lottie-react'
import anim from "../../public/Animation - 1721896417600.json";
import { MeteorsDemo } from '../sub/MetroDemo';

export default function About(){
    return (
        <motion.section className="w-full   pt-24" id="aboutme">
          <motion.div className="relative w-full  min-h-[380px] sm:min-h-[100px]">
            <motion.div
              className="hidden sm:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: [-800, 0], rotate: 0 }}
              transition={{ duration: 2 }}
            >
              <Lottie animationData={anim} />
            </motion.div>
            <motion.div className=" absolute w-full h-full z-50 sm:bg-black/80  top-0 left-0">
              <div className="relative flex w-full h-full  justify-center items-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, x: [800, 0], y: [-600, 0], rotate: 0 }}
                  transition={{ duration: 2 }}
                  className="w-full  md:w-[65%] mx-auto realtive  text-white rounded-md  py-10"
                >
                  <MeteorsDemo />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>
    )
}