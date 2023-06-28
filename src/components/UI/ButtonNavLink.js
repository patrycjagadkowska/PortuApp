import { NavLink } from "react-router-dom";

import classes from "./styles/CustomButton.module.css";

const ButtonNavLink = ({ to, className, children }) => {
  return (
    <NavLink
      to={to}
      className={`${classes.button} ${className ? className : ""}`}
    >
      {children}
    </NavLink>
  );
};

export default ButtonNavLink;