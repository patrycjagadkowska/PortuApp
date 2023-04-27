import { useParams } from 'react-router';
import { useContext, useEffect, useRef } from 'react';

import DataContext from '../context/DataContext';
import Dialogue from '../components/Lessons/Dialogue';
import Conjugation from '../components/Lessons/Conjugation';
import FillIn from '../components/Lessons/FillIn';
import Flashcard from '../components/Lessons/Flashcard';
import Connect from '../components/Lessons/Connect';

import classes from './styles/Lesson.module.css';

const Lesson = () => {
    const params = useParams();
    const { unitId, lessonId } = params;
    const dataCtx = useContext(DataContext);
    const lesson = dataCtx.getLesson(unitId, lessonId);
    const { title, content } = lesson;
    const exercises = useRef("")
    
    useEffect(() => {
        switch (lesson.type) {
            case "dialogue":
                exercises.current = <Dialogue data={content} />;
                break;
            case "flashcard":
                exercises.current = <Flashcard data={content} />;
                break;
            case "conjugation":
                exercises.current = <Conjugation data={content} />;
                break;
            case "connect":
                exercises.current = <Connect data={content} />;
                break;
            case "fillIn":
                exercises.current = <FillIn data={content} />;
                break;
            default:
                console.log(lesson.type);
        }
    }, [lesson.type, content])
    return (
        <div className={classes.lesson}>
            <h1>{title}</h1>
            {exercises.current}
        </div>
    );
};

export default Lesson;