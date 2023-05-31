import { NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import AuthContext from '../../context/AuthContext';

import classes from './styles/Header.module.css';

const Header = () => {
    const authCtx = useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;
    const navigate = useNavigate();

    const logoutHandler = () => {
        authCtx.logout();
        navigate('/');
    };

    return (
      <header className={classes.header}>
        <div className={classes["header__logo"]}>
          <NavLink to="/">PortuApp</NavLink>
        </div>
        <nav className={classes["header__nav"]}>
          {!isLoggedIn && <NavLink to="/createAccount">Start learing</NavLink>}
          {!isLoggedIn && <NavLink to="/login">Log in</NavLink>}
          {isLoggedIn && (
            <NavLink to="/learn" className={classes.loggedInNavLink}>
              Learn
            </NavLink>
          )}
          {isLoggedIn && (
            <NavLink to="/profile" className={classes.loggedInNavLink}>
              Profile
            </NavLink>
          )}
          {isLoggedIn && (
            <button onClick={logoutHandler} className={classes.logoutBtn}>
              Logout
            </button>
          )}
        </nav>
      </header>
    );
};

export default Header;