import SignIn from "./SignIn";
import SignUp from "./SignUp";
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
  );
};
export default Home;
