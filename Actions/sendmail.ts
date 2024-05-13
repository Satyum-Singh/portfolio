"use server";
import React from "react";
import { contactSchema } from "../validations/contact";
import { Resend } from "resend";
import { getErrorMessage, validateString } from "@/lib/utils";
import ContactFormEmail from "@/emails/contact-form";

const resend = new Resend(process.env.RESEND_API_KEY);

export const contactUser = async (formData:FormData) => {
  const senderEmail = formData.get("email");
  const message = formData.get("message");

  if (!validateString(senderEmail)) {
    return {
      error: " Invalid sender email",
    };
  }

  if (!validateString(message)) {
    return {
      error: " Invalid message",
    };
  }

  const isValid = await contactSchema.isValid(formData);
  try {
    await resend.emails.send({
      from: "Contact Form onboarding@resend.dev",
      to: "satyumspathania@gmail.com",
      subject: "Portfolio Visitor",
      reply_to: senderEmail as string,
      // text: `Email: ${senderEmail}\n Message: ${message} `,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }
};
