import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/discord_clone.png";
import rmtdevImg from "@/public/crypto_verse.png";
import wordanalyticsImg from "@/public/spline_project.png";
import React from "react";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Matriculation",
    location: "Sidhpur, Himachal Pradesh",
    description:
      "During my time there, I actively participated in sports, arts, or playing instruments and achieved many milestones. The supportive environment at Sacred Heart Senior Secondary School helped me grow in various areas of my interest and shaped my academic and personal journey.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Intermediate",
    location: "Sidhpur, Himachal Pradesh",
    description:
      "I completed my 12th grade in a non-medical science stream during the infamous COVID era. Picture me tackling physics, chemistry, and mathematics from home – a thrilling roller coaster ride with the occasional bout of nausea. Despite the chaos, I emerged with a solid education and some entertaining stories.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "UI/UX Designer",
    location: "Rajpura, Punjab",
    description:"Successfully led the design process, incorporating user research and usability testing to create aesthetically pleasing designs, developed interactive prototypes to demonstrate product features, optimized designs for accessibility and usability, and ensured evolving end-user needs were met, resulting in consistently positive feedback and successful project outcomes.",
    icon: React.createElement(FaReact),
    date: "2023",
  },
  {
    title: "Computer Science Student",
    location: "Rajpura, Punjab",
    description:"Hailing from Chitkara University, I am a dedicated final-year Computer Science student deeply immersed in a variety of co-curricular pursuits. I am actively expanding into the realm of 3D design and Devops. Engaging in activities such as football, hackathons, and designathons has equipped me with a robust skill set and a proactive approach to problem-solving, essential for thriving in dynamic technological landscapes.",
    icon: React.createElement(FaReact),
    date: "2021 - Present",
  },

] as const;

export const projectsData = [
  {
    title: "Discord Clone",
    description:
      "In progress Discord clone to demonstrate expertise in full-stack web development, focusing on frontend and backend functionality, real-time communication features and database management.",
    tags: ["React", "Next.js", "Socket.io", "Tailwind", "Prisma","MySQL"],
    imageUrl: corpcommentImg,
  },
  {
    title: "CryptoVerse",
    description:
      "This comprehensive React application keeps you ahead in the ever-evolving crypto world, offering real-time data, news and analysis. Cryptoverse is not just a web app, it's a PWA! ",
    tags: ["React", "Redux-Toolkit", "RestAPI", "ChartJS", "PWA","Ant-Design"],
    imageUrl: rmtdevImg,
  },
  {
    title: "3D Hero Section",
    description: "Experience a captivating introduction with a React app featuring a visually stunning Spline-powered 3D hero section, showcasing seamless integration for a visually appealing start.",
    tags: ["React", "Spline", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Figma",
  "Canva",
  "Express",
  "Spline",
  "MySQL",
  "Rest APIs",
  "Framer Motion",
] as const;