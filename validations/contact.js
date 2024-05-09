import * as yup from "yup";

export const contactSchema = yup.object().shape({
  email: yup.string().email().required(),
  textarea: yup.string().required(),
});
