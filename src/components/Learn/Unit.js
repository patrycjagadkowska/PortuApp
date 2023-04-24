import { Link } from 'react-router-dom';

import classes from './styles/Unit.module.css';

const Unit = () => {
    return (
        <ul className={classes.unit}>
            <Link to='/'>
                <li className={classes['unit__item']}>
                    <span className={classes['unit__item--title']}>Lesson 1</span>
                    <span className={classes['unit__item--badge']}>badge</span>
                </li>
            </Link>
            <Link to='/'>
                <li className={classes['unit__item']}>
                    <span className={classes['unit__item--title']}>Lesson 2</span>
                    <span className={classes['unit__item--badge']}>badge</span>
                </li>
            </Link>
            <Link to='/'>
                <li className={classes['unit__item']}>
                    <span className={classes['unit__item--title']}>Lesson 3</span>
                    <span className={classes['unit__item--badge']}>badge</span>
                </li>
            </Link>
            <Link to='/'>
                <li className={classes['unit__item']}>
                    <span className={classes['unit__item--title']}>Lesson 4</span>
                    <span className={classes['unit__item--badge']}>badge</span>
                </li>
            </Link>
            <Link to='/'>
                <li className={classes['unit__item']}>
                    <span className={classes['unit__item--title']}>Lesson 5</span>
                    <span className={classes['unit__item--badge']}>badge</span>
                </li>
            </Link>
        </ul>
    );
};

export default Unit;