import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { TbArrowBadgeRight } from 'react-icons/tb';
import { HiOutlineBadgeCheck } from 'react-icons/hi';

import UserProgressContext from '../../context/UserProgressContext';

import classes from './styles/Lessons.module.css';

const Lessons = (props) => {
    const { lessons, unitId } = props;
    const [ lessonsList, setLessonsList] = useState();
    const { progressData } = useContext(UserProgressContext);
    
    useEffect(() => {
        const lessonsArr = [];
        lessons.forEach(lesson => {
            const lessonLink = (
              <Link
                to={`${unitId}/${lesson.id}`}
                key={`${unitId}/${lesson.id}`}
              >
                <li className={classes["lesson"]}>
                  <span className={classes["unit__item--title"]}>
                    {lesson.title}
                  </span>
                  <span className={classes["unit__item--badge"]}>
                    {progressData &&
                    progressData[unitId] &&
                    progressData[unitId][lesson.id] ? (
                    <>Completed! <HiOutlineBadgeCheck className={classes.done} /></>
                    ) : (
                    <>Go to lesson <TbArrowBadgeRight className={classes.todo} /></>
                    )}
                  </span>
                </li>
              </Link>
            );
            lessonsArr.push(lessonLink);
        });
        setLessonsList(lessonsArr);
    }, [lessons, unitId, progressData]);
    return (
        <ul className={classes.lessons}>
            {lessonsList}
        </ul>
    );
};

export default Lessons;