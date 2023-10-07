import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { useState } from "react";
const Home = () => {
  const [loginPopup, setLoginPopup] = useState(false);
  const [signupPopup, setSignUpPopUp] = useState(false);
  const loginInButtonHandler = () => {
    setLoginPopup(true);
  };
  const signUpButtonHandler = () => {
    setSignUpPopUp(true);
  };
  const closeLoginModal=()=>{
    setLoginPopup(false)
  }
  const closeSignUpModal=()=>{
    setSignUpPopUp(false);
  }
  return (
    <div
      onClick={(e) => {
        if (e.target.id === "popup-holder") {
          setLoginPopup(false);
          setSignUpPopUp(false);
        }
      }}
    >
      <button onClick={() => setLoginPopup(true)}>login</button>
      <button onClick={() => setSignUpPopUp(true)}>sign up</button>
      {signupPopup && <SignUp onClose={closeSignUpModal} />}
      {loginPopup && <SignIn onClose={closeLoginModal} />}
    </div>
  );
};
export default Home;
