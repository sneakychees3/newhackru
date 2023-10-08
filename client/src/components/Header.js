import React from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className={classes["header-holder"]}>
      <ul>
        <li>
          <Link to="/sign-in">
            <div>
              <span>Half</span>
              <span>Name</span>
            </div>
          </Link>
        </li>
        <li className={classes["about"]}><Link to="/profile">Profile</Link></li>
      </ul>
      </div>
    </header>
  );
};
export default Header;
