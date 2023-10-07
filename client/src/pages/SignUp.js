import { Link } from "react-router-dom";
import classes from "./SignUp.module.css";
import { useState } from "react";
import ReactDom from "react-dom";
const SignUp = (props) => {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    //send to backend PUT command
    console.log(JSON.stringify(formData));
    props.onClose();
  }
  return ReactDom.createPortal(
    <div className={classes["popup-holder"]} id="popup-holder">
      {console.log(props)}
      <div className={classes["popup"]}>
        <h1 className={classes["title-text"]}>Sign up</h1>
        <form className={classes["form"]} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Username"
            onChange={handleChange}
            id="username"
          />
          <input
            type="text"
            placeholder="Enter Password"
            onChange={handleChange}
            id="password"
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>,
    document.getElementById("modal-portal")
  );
};
export default SignUp;
