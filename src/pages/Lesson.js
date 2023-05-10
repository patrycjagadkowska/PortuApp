import { useParams } from 'react-router';
import { useContext } from 'react';

import DataContext from '../context/DataContext';
import Dialogue from '../components/Lessons/Dialogue/Dialogue';
import Conjugation from '../components/Lessons/Conjugation/Conjugation';
import Translate from '../components/Lessons/Translate/Translate';
import Flashcard from '../components/Lessons/Flashcard/Flashcard';
import Connect from '../components/Lessons/Connect/Connect';

import classes from './styles/Lesson.module.css';

const Lesson = () => {
    const params = useParams();
    const { unitId, lessonId } = params;
    const dataCtx = useContext(DataContext);
    const lesson = dataCtx.getLesson(unitId, lessonId);
    const { title, content, type } = lesson;
    
    return (
        <div className={classes.lesson}>
            <h1>{title}</h1>
            {type === "dialogue" && <Dialogue data={content} />}
            {type === "flashcard" && <Flashcard data={content} />}
            {type === "conjugation" && <Conjugation data={content} />}
            {type === "connect" && <Connect data={content} />}
            {type === "translate" && <Translate data={content} />}
        </div>
    );
};

export default Lesson;