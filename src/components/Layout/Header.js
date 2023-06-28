import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import AuthContext from "../../context/AuthContext";
import ButtonNavLink from "../UI/ButtonNavLink";
import CustomButton from "../UI/CustomButton";
import HamburgerButton from "../UI/HamburgerButton";

import classes from "./styles/Header.module.css";

const Header = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);

  const logoutHandler = () => {
    authCtx.logout();
    navigate("/");
  };

  const toggleMenu = () => {
    setOpenMenu((openMenu) => !openMenu);
  };

  return (
    <header className={classes.header}>
      <div className={classes["header__logo"]}>
        <NavLink to="/">
          <span>P</span>
          <span>o</span>
          <span>r</span>
          <span>t</span>
          <span>u</span>
          <span>A</span>
          <span>p</span>
          <span>p</span>
        </NavLink>
      </div>
      <nav
        onClick={toggleMenu}
        className={`${classes["header__nav"]} ${
          openMenu ? classes["nav-open"] : ""
        }`}
      >
        {!isLoggedIn && (
          <ButtonNavLink to="/createAccount">Start learing</ButtonNavLink>
        )}
        {!isLoggedIn && <ButtonNavLink to="/login">Log in</ButtonNavLink>}
        {isLoggedIn && (
          <ButtonNavLink to="/learn" className={classes.loggedInNavLink}>
            Learn
          </ButtonNavLink>
        )}
        {isLoggedIn && (
          <ButtonNavLink to="/profile" className={classes.loggedInNavLink}>
            Profile
          </ButtonNavLink>
        )}
        {isLoggedIn && (
          <CustomButton onClick={logoutHandler} className={classes.logoutBtn}>
            Logout
          </CustomButton>
        )}
      </nav>
      <HamburgerButton openMenu={openMenu} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;