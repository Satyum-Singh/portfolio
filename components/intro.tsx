"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import profile from "../public/profile.jpg";

export default function Intro() {
  return (
    <section>
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
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, Satyum.</span> I'm a{" "}
        <span className="font-bold">Designer and Web Developer</span> and I am currently pursuing{" "}
        <span className="font-bold">Computer Science</span>. I enjoy
        designing and building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.p>
    </section>
  );
}
