"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import profile from "../public/profile.jpg";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0 ">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <Image
              src={profile}
              alt="Satyum-portrait"
              width="100"
              height="100"
              quality="95"
              priority={true}
              className="rounded-full
              border-[0.35rem] border-white object-cover
              shadow-lg
            "
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              delay: 0.6,
              duration: 0.5,
            }}
            className="absolute bottom-0 
            text-3xl right-0 tracking-tighter
          "
          >
            👋
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              delay: 0.4,
              duration: 0.5,
            }}
            className="absolute bottom-0 
            text-lg -right-5 tracking-tighter
          "
          >
            😊
          </motion.span>
        </div>
      </div>

      <motion.p
        className="mb-10 mt-12 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Satyum.</span> I'm a{" "}
        <span className="font-bold">Designer and Web Developer</span> and am
        currently pursuing <span className="font-bold">Computer Science</span>.
        I enjoy designing and building{" "}
        <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.5,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
      >
        <Link
          href="#contact"
          className=" group bg-gray-900 text-white px-7 
          py-3 flex items-center gap-3 rounded-full 
          outline-none focus:scale-110 transition duration-300 ease-in-out
          hover:scale-110 hover:bg-gray-950 active:scale-105 cursor-pointer
          "
        >
          Contact me Here
          <BsArrowRight className=" opacity-70 group-hover:translate-x-1 transition group-hover:scale-105  group-hover:opacity-100" />{" "}
        </Link>
        <a
          className="group bg-white px-7 
          py-3 flex items-center gap-3 rounded-full
          outline-none focus:scale-110 transition duration-300 ease-in-out
          hover:scale-110  active:scale-105 cursor-pointer border border-black/10
          "
          href="/resume.pdf"
          download
        >
          Download Resume{" "}
          <HiDownload
            className="opacity-60
             transition group-hover:scale-110  group-hover:opacity-90
          "
          />{" "}
        </a>
        <a
          href="https://www.linkedin.com/in/satyum-singh-pathania/"
          className="bg-white px-14 py-3 text-gray-700 flex items-center gap-3 text-[1.35rem] rounded-full sm:p-4 outline-none focus:scale-[1.15] transition duration-300 ease-in-out
          hover:scale-[1.15] hover:text-gray-950 active:scale-105 cursor-pointer border border-black/10"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/Satyum-Singh"
          className="bg-white px-14 py-3 text-gray-700 flex items-center gap-3 text-[1.35rem] rounded-full sm:p-4 outline-none focus:scale-[1.15] transition duration-300 ease-in-out
          hover:scale-[1.15] hover:text-gray-950 active:scale-105 cursor-pointer border border-black/10"
          target="_blank"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
}
