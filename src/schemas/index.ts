import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, {
      message: "Please input a valid email",
    })
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required"),
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  msisdn: Yup.string().min(10).required("Phone is required"),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, {
      message: "Please input a valid email",
    })
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required"),
});

export const CampaignSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  description: Yup.string().required("Description is required"),
  start_date: Yup.date().required("Start date is required"),
  end_date: Yup.date()
    .min(Yup.ref("start_date"), ({ min }) => `Date needs to be after ${min}!!`)
    .required("End date is required"),
  banner_url: Yup.string().required("Banner URL is required"),
  status: Yup.string().required("Status is required"),
});
