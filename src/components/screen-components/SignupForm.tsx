import { useEffect, useState } from "react";
import { SignupFormProps } from "../../types/forms";
import { PrimaryButton } from "../buttons/Buttons";
import RegularInputs, { PasswordInputs } from "../inputs/Inputs";
import { useFormik } from "formik";
import { SignupSchema } from "../../schemas";
import axios from "axios";

export default function SignupForm({
  customWrapperStyles,
  customFormStyles,
  submitBtnStyles,
}: SignupFormProps) {
  const [isDisabled, setIsDisabled] = useState(true);

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      msisdn: "",
    },
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
      const response = await axios.post("https://test.quups.app/api/create-account", values);
      console.log(response.data.message);
    },
  });

  useEffect(() => {
    if (values.email !== "" && values.password !== "" && values.name !== "" && values.msisdn !== "") {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [values]);

  return (
    <div className={`${customWrapperStyles}`}>
      <h1>Hello user</h1>
      <p>Sign up to manage your Campaigns</p>
      <form method="post" className={`${customFormStyles}`}>
        <RegularInputs
          label="Email address"
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChangeEvt={handleChange}
          onBlurEvt={handleBlur}
          customStyles={errors.email && touched.email ? "error_field" : ""}
          errorMsg={errors.email && touched.email ? errors.email : ""}
          required
          />
        <PasswordInputs
          label="Password"
          id="password"
          name="password"
          value={values.password}
          onChangeEvt={handleChange}
          onBlurEvt={handleBlur}
          customStyles={errors.password && touched.password ? "error_field" : ""}
          errorMsg={errors.password && touched.password ? errors.password : ""}
          required
          />
        <RegularInputs
          label="Name"
          type="text"
          id="name"
          name="name"
          value={values.name}
          onChangeEvt={handleChange}
          onBlurEvt={handleBlur}
          customStyles={errors.name && touched.name ? "error_field" : ""}
          errorMsg={errors.name && touched.name ? errors.name : ""}
          required
          />
        <RegularInputs
          label="Phone"
          type="tel"
          id="phone"
          name="msisdn"
          value={values.msisdn}
          onChangeEvt={handleChange}
          onBlurEvt={handleBlur}
          customStyles={errors.msisdn && touched.msisdn ? "error_field" : ""}
          errorMsg={errors.msisdn && touched.msisdn ? errors.msisdn : ""}
          required
          />
        <PrimaryButton
          label="Signup"
          type="submit"
          customBtnStyles={submitBtnStyles}
          clickEvt={handleSubmit}
          disabled={isDisabled}
        />
      </form>
    </div>
  );
}
