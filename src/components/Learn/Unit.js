import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import classes from './styles/Unit.module.css';

const Unit = (props) => {
    const { lessons, unitId } = props;
    const [ lessonsList, setLessonsList] = useState();
    
    useEffect(() => {
        const lessonsArr = [];
        lessons.forEach(lesson => {
            const lessonLink = 
                (<Link to={`${unitId}/${lesson.id}`} key={`${unitId}/${lesson.id}`}>
                    <li className={classes['unit__item']}>
                    <span className={classes['unit__item--title']}>{lesson.title}</span>
                    <span className={classes['unit__item--badge']}>badge</span>
                </li>
                </Link>);
            lessonsArr.push(lessonLink);
        });
        setLessonsList(lessonsArr);
    }, [lessons, unitId]);
    return (
        <ul className={classes.unit}>
            {lessonsList}
        </ul>
    );
};

export default Unit;

{/* <Link to='/'>
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
            </Link> */}