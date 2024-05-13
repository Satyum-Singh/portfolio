"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import useSectionInView from "@/lib/hooks";
import { contactUser } from "../Actions/sendmail";
import { useFormStatus } from "react-dom";
import SubmitBtn from "./submitBtn";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const { pending } = useFormStatus();

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:">
          satyumspathania@gmail.com
        </a>{" "}
        or through this form
      </p>
      <form
        action={async (formData) => {
          await contactUser(formData);
        }}
        className="mt-10 flex flex-col"
      >
        <input
          name="email"
          className="h-14 px-4 rounded-lg borderBlack"
          placeholder="Your email"
          type="email"
          maxLength={500}
        />
        <textarea
          name="message"
          className="h-52 my-3 rounded-lg borderBlack p-4"
          placeholder="Your message"
          cols={30}
          rows={10}
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
