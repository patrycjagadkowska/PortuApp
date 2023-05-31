import { NavLink } from 'react-router-dom';

import classes from './styles/Button.module.css';

const ButtonNavLink = (props) => {
    return (
      <NavLink
        to={props.to}
        className={`${classes.button} ${
          props.className ? props.className : ""
        }`}
      >
        {props.children}
      </NavLink>
    );
};

export default ButtonNavLink;