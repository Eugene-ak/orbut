import { LoginFormProps } from "../../types/forms";
import { PrimaryButton } from "../buttons/Buttons";
import RegularInputs, { PasswordInputs } from "../inputs/Inputs";

export default function LoginForm({
  customWrapperStyles,
  customFormStyles,
  submitBtnStyles,
}: LoginFormProps) {
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
          onChangeEvt={() => {}}
        />
        <PasswordInputs
          label="Password"
          id="password"
          name="password"
          onChangeEvt={() => {}}
        />
        <PrimaryButton label="Login" type="submit" customBtnStyles={submitBtnStyles} disabled />
      </form>
      <a href="#">Forgot password?</a>
    </div>
  );
}
