import Image from "next/image";
import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandXFilled,
  IconMailFilled,
  IconPhoneFilled,
  IconMapPinFilled,
  IconBrandHackerrank,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp
} from "@tabler/icons-react";
import { ContactForm } from "./FormContact";
import {motion} from 'framer-motion'

export default function Contact() {
  return (
    <div className="w-screen   pt-[2.5rem] lg:pt-[180px] relative z-40 text-white mb-10   ">
      <motion.h1

initial={{ opacity: 0 }}
whileInView={{ y: [500, 0], opacity: 1 }}
transition={{ duration: 2 }}
viewport={{once: true}}
className="text-[40px] font-medium text-center text-gray-200 bg-[url('/text.jpeg')] bg-contain bg-clip-text text-transparent  animate-text-slide uppercase pb-14"
>
  Contact Me
</motion.h1>
      <div className="md:w-full w-[90%]  container h-full flex flex-col   items-center  gap-6  rounded-lg overflow-hidden">

        
        <div className="w-full flex flex-col lg:flex-row  gap-8   ">
          <div className="w-full  mx-auto  lg:w-[40%] bg-light  relative  py-10">
            {/* <Image
              src="/icons/contact.svg"
              alt=""
              width={50}
              height={50}
              className="absolute w-72 h-56 lg:h-96   right-0 bottom-0"
            /> */}

            <div className="w-[80%] mx-auto relative flex flex-col  justify-between   gap-4 py-10 lg:py-8  lg:gap-7  h-full">
              
              <div className="flex flex-col gap-1 ">
                <h2 className="capitalize font-poppins font-semibold text-xl text-dark/70 pl-4">
                Let's Talk
                </h2>

                <p className="font-roboto font-light  text-dark/70 pl-4 text-sm">
                Feel free to reach out to me for any inquiries, collaborations, or just to say hello. I'm always excited to connect with new people!
                </p>
              </div>
              <div className="flex flex-col gap-1 font-poppins ">
                <div className="p-4 flex gap-3">
                <IconMailFilled className=""/>
                <p>mhaddaou@gmail.com</p>
                </div>
                <div className="button-primary flex gap-3 p-4 rounded-lg">
                <IconPhoneFilled />
                <p>+212 699 848 024</p>

                </div>
                <div className="p-4 flex gap-3">
                <IconMapPinFilled/>
                <p>
                  Khouribga
                </p>

                </div>
              </div>
              <div className="flex flex-col gap-4 pl-4 ">
                <ul className="flex  gap-4">
                  <li className="bg-dark/50 w-fit group text-light transition-colors cursor-pointer duration-300 button-primary relative rounded-full flex justify-center items-center p-2">
                    <Link href="https://www.linkedin.com/in/mohamed-haddaoui-26b28423a/" target="_blank">
                      <IconBrandLinkedin className="object-cover group-hover:text-dark/70 w-6 h-6 transition-all duration-300" />
                    </Link>
                  </li>
                  <li className="bg-dark/50 w-fit group text-light transition-colors cursor-pointer duration-300 button-primary relative rounded-full flex justify-center items-center p-2">
                    <Link href="https://github.com/mhaddaou" target="_blank">
                      <IconBrandGithub className="object-cover group-hover:text-dark/70 w-6 h-6 transition-all duration-300" />
                    </Link>
                  </li>
                  <li className="bg-dark/50 w-fit group text-light transition-colors cursor-pointer duration-300 button-primary   relative rounded-full flex justify-center items-center p-2">
                    <Link href="https://www.hackerrank.com/profile/medo19981602" target="_blank">
                      <IconBrandHackerrank className="object-cover w-6 h-6 transition-all group-hover:text-dark/70 duration-300" />
                    </Link>
                  </li>
                  {/* <li className="bg-dark/50 w-fit group text-light transition-colors cursor-pointer duration-300 button-primary   relative rounded-full flex justify-center items-center p-2">
                    <Link href="https://www.hackerrank.com/profile/medo19981602" target="_blank">
                      <IconBrandWhatsapp className="object-cover w-6 h-6 transition-all group-hover:text-dark/70 duration-300" />
                    </Link>
                  </li> */}
                </ul>
              </div>
              
            </div>
          </div>
          <div className=" w-full mx-auto h-full lg:w-[60%] py-16 ">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}