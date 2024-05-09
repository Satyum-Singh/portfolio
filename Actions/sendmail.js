"use server";
import { contactSchema } from "../validations/contact";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const contactUser = async (formData) => {
  const senderEmail = formData.get("email");
  const message = formData.get("message");
  const isValid = await contactSchema.isValid(formData);
  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "satyumspathania@gmail.com",
    subject: "Portfolio Visitor",
    text: `Email: ${senderEmail}\n Message: ${message} `,
  });
};
