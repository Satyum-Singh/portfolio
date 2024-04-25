"use client";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import useSectionInView from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a multi-skilled{" "}
        <span className="font-semibold">full-stack developer and designer</span>
        , I pride myself on blending creativity with technical prowess to
        develop elegant, user-centric digital experiences learned{" "}
        <span className="font-semibold">
          develop elegant, user-centric digital experiences learned
        </span>
        . <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-semibold">
          React, Next.js, Node.js, Express.js and MongoDB
        </span>
        . I am also familiar with TypeScript. Also, I'm an avid learner of new
        musical instruments and design using tools like{" "}
        <span className="font-semibold"> Figma, Spline, and Framer</span>
        for design work. I am currently looking for a{" "}
        <span className="font-semibold">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not immersed in tech,</span>you'll
        find me enjoying football, video games, traveling, and calisthenics, all
        of which keep me{" "}
        <span className="font-semibold">energized and active.</span>With a
        passion for{" "}
        <span className="font-semibold">prompt engineering and AI,</span> I'm
        enthusiastic about innovation and collaboration to make a meaningful
        impact in the tech industry.
        <span className="font-semibold">
          Feel free to explore my work and journey!
        </span>
      </p>
    </motion.section>
  );
}
