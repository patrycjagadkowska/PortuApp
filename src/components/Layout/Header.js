import { NavLink } from 'react-router-dom';

import classes from './styles/Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes['header__logo']}>
                PortuApp
            </div>
            <nav className={classes['header__nav']}>
                <NavLink to='/'>Start learing</NavLink>
                <NavLink to='/'>Log in</NavLink>
            </nav>
        </header>
    );
};

export default Header;