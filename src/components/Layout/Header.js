import { NavLink } from 'react-router-dom';
import { useContext } from 'react';

import AuthContext from '../../context/AuthContext';

import classes from './styles/Header.module.css';

const Header = () => {
    const authCtx = useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;

    return (
        <header className={classes.header}>
            <div className={classes['header__logo']}>
                <NavLink to='/'>PortuApp</NavLink>
            </div>
            <nav className={classes['header__nav']}>
                {!isLoggedIn && <NavLink to='/createAccount'>Start learing</NavLink>}
                {!isLoggedIn && <NavLink to='/login'>Log in</NavLink>}
            </nav>
        </header>
    );
};

export default Header;