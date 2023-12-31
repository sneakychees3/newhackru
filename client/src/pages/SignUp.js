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
        <form className={classes["form"]} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            id="first"
          />
          <input
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            id="last"
          />
          <input
            type="text"
            placeholder="Email Address"
            onChange={handleChange}
            id="email_address"
          />
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
          <button className={classes["submit-button"]} type='submit'>Create</button>
        </form>
      </div>
    </div>,
    document.getElementById("modal-portal")
  );
};
export default SignUp;
