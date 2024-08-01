import SideImage from "/images/happy-friends-looking-out-window.jpg";
import LoginForm from "../components/screen-components/LoginForm";
import { SecondaryButton } from "../components/buttons/Buttons";
import AuthHeader from "../components/screen-components/AuthHeader";
import { useState } from "react";
import SignupForm from "../components/screen-components/SignupForm";
import pageStyles from "../styles/pages/auth.module.css";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const changeForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <main className={pageStyles.main}>
      <section className={pageStyles.section}>
        <img src={SideImage} className={pageStyles.image} alt="side image" />
      </section>
      <section className={pageStyles.section}>
        <AuthHeader customHeaderStyles={pageStyles.header}>
          <h1>Orbut</h1>
          {isLogin ? (
            <>
              <p>Don't have an account yet?</p>
              <SecondaryButton
                label="Sign up now"
                type="button"
                customBtnStyles={pageStyles.sign_up_btn}
                clickEvt={changeForm}
              />
            </>
          ) : (
            <>
              <p>Already have an account?</p>
              <SecondaryButton
                label="Log in now"
                type="button"
                customBtnStyles={pageStyles.sign_up_btn}
                clickEvt={changeForm}
              />
            </>
          )}
        </AuthHeader>

        {isLogin ? (
          <LoginForm
            customWrapperStyles={pageStyles.form_wrapper}
            customFormStyles={pageStyles.form}
            submitBtnStyles={pageStyles.submit_btn}
          />
        ) : (
          <SignupForm
            customWrapperStyles={pageStyles.form_wrapper}
            customFormStyles={pageStyles.form}
            submitBtnStyles={pageStyles.submit_btn}
          />
        )}
      </section>
    </main>
  );
}
