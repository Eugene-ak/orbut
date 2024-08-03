import { LoginFormProps } from "../../types/forms";
import { PrimaryButton } from "../buttons/Buttons";
import RegularInputs, { PasswordInputs } from "../inputs/Inputs";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import axios from "axios";
import { LoginSchema } from "../../schemas";

export default function LoginForm({
  customWrapperStyles,
  customFormStyles,
  submitBtnStyles,
}: LoginFormProps) {
  const [isDisabled, setIsDisabled] = useState(true);

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: LoginSchema,
      onSubmit: async (values) => {
        const response = await axios.post(
          "https://test.quups.app/api/signin",
          values
        );
        console.log(response.data.message);
      },
    });

  useEffect(() => {
    if (values.email !== "" && values.password !== "") {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [values]);

  return (
    <div className={`${customWrapperStyles}`}>
      <h1>Welcome Back</h1>
      <p>Sign in to manage your Campaigns</p>
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
          customStyles={
            errors.password && touched.password ? "error_field" : ""
          }
          errorMsg={errors.password && touched.password ? errors.password : ""}
          required
        />
        <PrimaryButton
          label="Login"
          type="submit"
          customBtnStyles={submitBtnStyles}
          clickEvt={handleSubmit}
          disabled={isDisabled}
        />
      </form>
      <a href="#">Forgot password?</a>
    </div>
  );
}
