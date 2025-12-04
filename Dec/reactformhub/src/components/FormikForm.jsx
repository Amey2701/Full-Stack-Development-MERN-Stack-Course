import { Formik, Form, Field, ErrorMessage } from "formik";
import { signupSchema } from "../utils/validationSchema";

const FormikForm = () => {
  return (
    <Formik
      initialValues={{ name: "", email: "" }}
      validationSchema={signupSchema}
      onSubmit={(values) => alert(JSON.stringify(values))}
    >
      <Form>
        <h2>Formik & Yup Form</h2>

        <Field name="name" placeholder="Enter name" />
        <ErrorMessage name="name" />

        <br /><br />

        <Field name="email" placeholder="Enter email" />
        <ErrorMessage name="email" />

        <br /><br />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
