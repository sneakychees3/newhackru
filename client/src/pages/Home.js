import SignIn from "./SignIn";
import SignUp from "./SignUp";
import classes from "./Home.module.css";
import { useState } from "react";
const Home = () => {
  const [loginPopup, setLoginPopup] = useState(false);
  const [signupPopup, setSignUpPopUp] = useState(false);
  const loginInButtonHandler = () => {
    setLoginPopup(true);
    setSignUpPopUp(false);
  };
  const signUpButtonHandler = () => {
    setSignUpPopUp(true);
    setLoginPopup(false);
  };
  const closeBoth = () => {
    setSignUpPopUp(false);
    setLoginPopup(false);
  };
  return (
    <div className={classes["home"]}>
      <div
        onClick={(e) => {
          if (e.target.id === "popup-holder") {
            setLoginPopup(false);
            setSignUpPopUp(false);
          }
        }}
      >
        <button onClick={loginInButtonHandler}>login</button>
        <button onClick={signUpButtonHandler}>sign up</button>
        {signupPopup && <SignUp onClose={closeBoth} />}
        {loginPopup && <SignIn onClose={closeBoth} />}
      </div>
    </div>
  );
};
export default Home;
