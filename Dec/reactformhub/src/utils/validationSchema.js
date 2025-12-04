import * as Yup from "yup";

export const signupSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid Email").required("Required"),
});
