import Image from "next/image";
import Link from "next/link";
import {
  IconMailFilled,
  IconPhoneFilled,
  IconMapPinFilled,
  IconBrandHackerrank,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { ContactForm } from "./FormContact";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div
      className="w-screen    2xl:pt-[180px] relative z-40 text-white mb-10 pt-16  "
      id="contact"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ y: [200, 0], opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="text-[40px] font-bold 2xl:font-medium text-center text-gray-200 bg-[url('/text.jpeg')]  bg-contain bg-clip-text text-transparent  animate-text-slide uppercase 2xl:pb-14"
      >
        Contact Me
      </motion.h1>
      <div className="md:w-full w-[90%]  container h-full flex flex-col   items-center  gap-6  rounded-lg overflow-hidden ">
        <div className="w-full flex flex-col lg:flex-row  lg:gap-8   ">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ x: [-400, 0], opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="w-full  mx-auto  lg:w-[40%] bg-light  relative  lg:py-10 "
          >
            <div className="w-[80%] mx-auto relative flex flex-col  justify-between   gap-4 py-10 lg:py-8  lg:gap-7  h-full">
              <div className="flex flex-col gap-1 ">
                <h2 className="capitalize font-poppins font-semibold text-xl text-dark/70 pl-4">
                  Let&apos;s Talk
                </h2>

                <p className="font-roboto font-light  text-dark/70 pl-4 text-sm">
                  Feel free to reach out to me for any inquiries,
                  collaborations, or just to say hello. I&apos;m always excited
                  to connect with new people!
                </p>
              </div>
              <div className="flex flex-col gap-1 font-poppins ">
                <div className="p-4 flex gap-3">
                  <IconMailFilled className="" />
                  <p>mhaddaou@gmail.com</p>
                </div>
                <div className="color-primary flex gap-3 p-4 rounded-lg">
                  <IconPhoneFilled className="text-violet-600" />
                  <p className="text-violet-600">+212 699 848 024</p>
                </div>
                <div className="p-4 flex gap-3">
                  <IconMapPinFilled />
                  <p>Khouribga</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 pl-4 ">
                <ul className="flex  gap-4">
                  <li className="bg-dark/50 w-fit group text-light transition-colors cursor-pointer duration-300 button-primary relative rounded-full flex justify-center items-center p-2">
                    <Link
                      href="https://www.linkedin.com/in/mohamed-haddaoui-26b28423a/"
                      target="_blank"
                    >
                      <IconBrandLinkedin className="object-cover group-hover:text-violet-600 w-6 h-6 transition-all duration-300 " />
                    </Link>
                  </li>
                  <li className="bg-dark/50 w-fit group text-light transition-colors cursor-pointer duration-300 button-primary relative rounded-full flex justify-center items-center p-2">
                    <Link href="https://github.com/mhaddaou" target="_blank">
                      <IconBrandGithub className="object-cover group-hover:text-violet-600 w-6 h-6 transition-all duration-300 " />
                    </Link>
                  </li>
                  <li className="bg-dark/50 w-fit group text-light transition-colors cursor-pointer duration-300 button-primary   relative rounded-full flex justify-center items-center p-2">
                    <Link
                      href="https://www.hackerrank.com/profile/medo19981602"
                      target="_blank"
                    >
                      <IconBrandHackerrank className="object-cover w-6 h-6 transition-all  duration-300 group-hover:text-violet-600" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ x: [400, 0], opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className=" w-full mx-auto h-full lg:w-[60%] py-16 "
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
