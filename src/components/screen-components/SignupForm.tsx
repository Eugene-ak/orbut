import { SignupFormProps } from "../../types/forms";
import { PrimaryButton } from "../buttons/Buttons";
import RegularInputs, { PasswordInputs } from "../inputs/Inputs";

export default function SignupForm({
  customWrapperStyles,
  customFormStyles,
  submitBtnStyles,
}: SignupFormProps) {
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
          onChangeEvt={() => {}}
        />
        <PasswordInputs
          label="Password"
          id="password"
          name="password"
          onChangeEvt={() => {}}
        />
        <RegularInputs
          label="Name"
          type="text"
          id="name"
          name="name"
          onChangeEvt={() => {}}
        />
        <RegularInputs
          label="Phone"
          type="tel"
          id="phone"
          name="msisdn"
          onChangeEvt={() => {}}
        />
        <PrimaryButton
          label="Signup"
          type="submit"
          customBtnStyles={submitBtnStyles}
          disabled
        />
      </form>
    </div>
  );
}
