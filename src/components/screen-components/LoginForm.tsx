import { LoginFormProps } from "../../types/forms";
import { PrimaryButton } from "../buttons/Buttons";
import RegularInputs, { PasswordInputs } from "../inputs/Inputs";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import axios from "axios";
import { LoginSchema } from "../../schemas";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function LoginForm({
  customWrapperStyles,
  customFormStyles,
  submitBtnStyles,
}: LoginFormProps) {
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(true);

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: LoginSchema,
      onSubmit: async (values) => {
        try {
          const response = await axios.post(
            "https://test.quups.app/api/signin",
            values
          );
          if (response.status === 200) {
            localStorage.setItem("jwt", response.data.data.access_token);
            toast.success("Login successful");
            navigate("/dashboard");
          } else {
            toast.error("Something went wrong. Please retry");
          }
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
          toast.error(error.response.data.message);
        }
      },
    });

  useEffect(() => {
    if (touched.email || touched.password) {
      if (!errors || (!errors.email && !errors.password)) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    }
  }, [errors, touched]);

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
