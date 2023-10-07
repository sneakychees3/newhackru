import React from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className={classes["header-holder"]}>
        <Link to="/sign-in">
          <h1>
            <span>Half</span>
            <span>Name</span>
          </h1>
        </Link>
        <div>
          <Link to="/sign-up">
            <button>Sign Up</button>
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
