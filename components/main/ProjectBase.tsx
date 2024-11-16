import { HoverEffect } from "../ui/card-hover-effect";
import { motion } from "framer-motion";
export function ProjectBase() {
  return (
    <div className="w-screen  px-8 container relative z-30 pt-20">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ y: [500, 0], opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="text-[40px] font-medium text-center text-gray-200 bg-[url('/text.jpeg')] bg-contain bg-clip-text text-transparent  animate-text-slide uppercase pb-14"
      >
        My Projects
      </motion.h1>
      <div>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ x: [-500, 0], opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="text-[22px] font-semibold  text-gray-200  bg-[url('/text.jpeg')] bg-contain bg-clip-text text-transparent  animate-text-slide uppercase"
        >
          web projects
        </motion.h2>
        <HoverEffect items={webProjects} />
      </div>
      <div>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ x: [-500, 0], opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="text-[22px] font-semibold  text-gray-200  bg-[url('/text.jpeg')] bg-contain bg-clip-text text-transparent  animate-text-slide uppercase"
        >
          Design projects
        </motion.h2>
        <HoverEffect items={designProjects} />
      </div>
      <div>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ x: [-500, 0], opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="text-[22px] font-semibold  text-gray-200  bg-[url('/text.jpeg')] bg-contain bg-clip-text text-transparent  animate-text-slide uppercase"
        >
          System Administration & Infrastructure Projects:
        </motion.h2>
        <HoverEffect items={systemAdminProjects} />
      </div>
    </div>
  );
}
// export const projects = [
//   {
//     title: "Financial App",
//     img: '/financial.png',
//     description:
//       "This project is a sleek and user-friendly financial app built entirely on the front end. Leveraging the power of Next.js 13, Tailwind CSS, TypeScript, and DeasyUI, this app delivers a seamless financial management experience",
//     link: "https://financial-gray.vercel.app/",
//   },
//   {
//     title: "IRC : Internet Relay Chat",
//     img: '/irc.jpeg',
//     description:
//       "This project is about creating your own IRC server, Developed in C++ it delivers real-time and customizable text-based interactions through multiple channels, private messaging, and many IRC command support.",
//     link: "https://github.com/mhaddaou/ft_irc-",
//   },
//   {
//     img: '/mern.png',
//     title: "Google",
//     description:
//       "A multinational technology company that specializes in Internet-related services and products.",
//     link: "https://google.com",
//   },
//   {
//     title: "Inception",
//     img: '/inception.png',

//     description:
//       "This project from 42 school focuses on expanding your system administration knowledge through Docker. You'll create and manage Docker images in a personal virtual machine",
//     link: "https://github.com/mhaddaou/inception-42",
//   },
//   {
//     title: "Product Management System",
//     img: '/crud.png',

//     description:
//       "Developed a dynamic CRUD and static search application using HTML, CSS, and JavaScript. Efficiently managed product data using client-side storage., User-friendly interface for seamless product management and quick searches, enhancing user experience.",
//     link: "https://cruds0.netlify.app/",
//   },

//   {
//     title: "Ft_transcendence",
//     img: '/transcendence.jpg',

//     description:
//       "This project consists of creating a website for the mighty Pong contest including the user accounts, chatting in channels and playing the game pong features.",
//     link: "https://github.com/mhaddaou/ft_transcendence",
//   },

//   {
//     title: "Recipes Blog",
//     img: '/recipestate (1).png',

//     description:
//       "A responsive blog website built with Next.js and styled using Tailwind CSS for a sleek frontend, powered by a scalable NestJS backend and MongoDB for efficient data management.",
//     link: "https://recipestate.com",
//   },
//   {
//     title: "KS Tecknologie",
//     img: '/ksteck.png',

//     description:
//       "A modern website built with Next.js, highlighting network cabling and telecommunication services, with a focus on performance, responsiveness, and user-friendly navigation. The project is not yet completed.",
//     link: "https://v2-kstech.vercel.app/",
//   },
//   {
//     title: "HyperTube",
//     img: '/hyper.jpeg',

//     description:
//       "A clean and user-friendly design for Hypertube, a streaming platform for movies and TV shows. The design focuses on easy navigation, allowing users to browse, search, and stream content seamlessly. With visually appealing movie thumbnails, detailed information pages, and smooth playback, the interface ensures an enjoyable viewing experience",
//     link: "https://www.figma.com/design/CUaeCNjmwdUK63bphOh5Ce/HyperTube?node-id=0-1&node-type=canvas",
//   },
//   {
//     title: "HyperTube",
//     img: '/hyper.jpeg',

//     description:
//       "I am collaborating with a team on the frontend development for Hypertube, a streaming platform, which is not yet complete. We are focused on creating a seamless and user-friendly interface for browsing and watching content",
//     link: "https://github.com/mhaddaou/hypertube",
//   },
//   {
//     title: "Matcha",
//     img: '/matcha.png',

//     description:
//       "A sleek and user-friendly dating app design focused on connection and engagement. It features intuitive navigation, personalized profile layouts, and modern visuals to enhance the user experience while exploring matches and building relationships",
//     link: "https://www.figma.com/design/CgpQUhZRWCUDLCCO0zqtpf/Matcha?node-id=204-14&t=qR6U4kg60VSnT1rr-1",
//   },
//   {
//     title: "Cards & Contacts, Email Signature",
//     img: '/cards.png',

//     description:
//       "A modern and intuitive web app design for creating customizable business cards, professional email signatures, and managing contacts. The design emphasizes simplicity, allowing users to personalize templates, generate email-compatible signatures, and easily add or organize their contact lists",
//     link: "https://microsoft.com",
//   },
//   {
//     title: "Contaxly",
//     img: '/contacxly.png',

//     description:
//       "I am working on a full-stack application with Next.js and Prisma, implementing CRUD functionality for managing contacts. The app allows users to sign up and sign in with JWT authentication, create, update, and search contacts easily, managed using Docker Compose for a streamlined and isolated development setup.",
//     link: "https://microsoft.com",
//   },
//   {
//     title: "Cloud-1",
//     img: '/cloud.png',

//     description:
//       "This project involves automating the deployment of a WordPress site using Docker Compose and Ansible on three Vagrant-hosted virtual machines. The Ansible script manages all aspects, ensuring automatic restarts, data persistence, secure access, and TLS integration. The setup uses separate containers for each service (WordPress, MySQL, PhpMyAdmin) and allows parallel deployment across multiple servers",
//     link: "https://github.com/mhaddaou/cloud-1",
//   },
// ];

export const webProjects = [
  {
    title: "Recipes Blog",
    img: "/recipestate (1).png",
    description:
      "A responsive blog website built with Next.js and styled using Tailwind CSS for a sleek frontend, powered by a scalable NestJS backend and MongoDB for efficient data management.",
    link: "https://recipestate.com",
  },
  {
    title: "Financial App",
    img: "/financial.png",
    description:
      "This project is a sleek and user-friendly financial app built entirely on the front end. Leveraging the power of Next.js 13, Tailwind CSS, TypeScript, and DeasyUI, this app delivers a seamless financial management experience",
    link: "https://financial-gray.vercel.app/",
  },
  {
    title: "HyperTube",
    img: "/hyper.jpeg",

    description:
      "I am collaborating with a team on the frontend development for Hypertube, a streaming platform, which is not yet complete. We are focused on creating a seamless and user-friendly interface for browsing and watching content",
    link: "https://github.com/mhaddaou/hypertube",
  },
  {
    title: "KS Tecknologie",
    img: "/ksteck.png",
    description:
      "A modern website built with Next.js, highlighting network cabling and telecommunication services, with a focus on performance, responsiveness, and user-friendly navigation. The project is not yet completed.",
    link: "https://v2-kstech.vercel.app/",
  },
  {
    title: "Contaxly",
    img: "/contacxly.png",

    description:
      "I am working on a full-stack application with Next.js and Prisma, implementing CRUD functionality for managing contacts. The app allows users to sign up and sign in with JWT authentication, create, update, and search contacts easily, managed using Docker Compose for a streamlined and isolated development setup.",
    link: "https://microsoft.com",
  },
  {
    title: "Ft_transcendence",
    img: "/transcendence.jpg",

    description:
      "This project consists of creating a website for the mighty Pong contest including the user accounts, chatting in channels and playing the game pong features.",
    link: "https://github.com/mhaddaou/ft_transcendence",
  },
  {
    title: "Product Management System",
    img: "/crud.png",
    description:
      "Developed a dynamic CRUD and static search application using HTML, CSS, and JavaScript. Efficiently managed product data using client-side storage. User-friendly interface for seamless product management.",
    link: "https://cruds0.netlify.app/",
  },
  {
    img: "/mern.png",
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
];

export const designProjects = [
  {
    title: "HyperTube",
    img: "/hyper.jpeg",
    description:
      "A clean and user-friendly design for Hypertube, a streaming platform for movies and TV shows. The design focuses on easy navigation, allowing users to browse, search, and stream content seamlessly.",
    link: "https://www.figma.com/design/CUaeCNjmwdUK63bphOh5Ce/HyperTube?node-id=0-1&node-type=canvas",
  },
  {
    title: "Matcha",
    img: "/matcha.png",
    description:
      "A sleek and user-friendly dating app design focused on connection and engagement. It features intuitive navigation, personalized profile layouts, and modern visuals to enhance the user experience while exploring matches and building relationships.",
    link: "https://www.figma.com/design/CgpQUhZRWCUDLCCO0zqtpf/Matcha?node-id=204-14&t=qR6U4kg60VSnT1rr-1",
  },
  {
    title: "Cards & Contacts, Email Signature",
    img: "/cards.png",
    description:
      "A modern and intuitive web app design for creating customizable business cards, professional email signatures, and managing contacts. The design emphasizes simplicity, allowing users to personalize templates, generate email-compatible signatures, and easily add or organize their contact lists.",
    link: "https://microsoft.com",
  },
];

export const systemAdminProjects = [
  {
    title: "Cloud-1",
    img: "/cloud.png",
    description:
      "This project involves automating the deployment of a WordPress site using Docker Compose and Ansible on three Vagrant-hosted virtual machines. The Ansible script manages all aspects, ensuring automatic restarts, data persistence, secure access, and TLS integration.",
    link: "https://github.com/mhaddaou/cloud-1",
  },
  {
    title: "Inception",
    img: "/inception.png",
    description:
      "This project from 42 school focuses on expanding your system administration knowledge through Docker. You'll create and manage Docker images in a personal virtual machine.",
    link: "https://github.com/mhaddaou/inception-42",
  },
  {
    title: "IRC : Internet Relay Chat",
    img: "/irc.jpeg",
    description:
      "This project is about creating your own IRC server, Developed in C++ it delivers real-time and customizable text-based interactions through multiple channels, private messaging, and many IRC command support.",
    link: "https://github.com/mhaddaou/ft_irc-",
  },
];
