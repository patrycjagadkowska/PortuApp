import { useParams, useLoaderData } from 'react-router';
import { useEffect, useState } from 'react';

import Dialogue from '../components/Lessons/Dialogue/Dialogue';
import Conjugation from '../components/Lessons/Conjugation/Conjugation';
import Translate from '../components/Lessons/Translate/Translate';
import Flashcard from '../components/Lessons/Flashcard/Flashcard';
import Connect from '../components/Lessons/Connect/Connect';
import LoadingSpinner from '../components/UI/LoadingSpinner';

import classes from './styles/Lesson.module.css';

const Lesson = () => {
    const { lessonId } = useParams();
    const [ lessonData, setLessonData ] = useState({});
    const [ showSpinner, setShowSpinner ] = useState(true);

    const { title, content, type } = lessonData;

    const fetchedData = useLoaderData();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        setShowSpinner(true);
        const data = fetchedData.data().lessons.find((lesson) => {
            return lesson.id === lessonId;
        });
        setLessonData(data);
        setShowSpinner(false);
    }, [fetchedData, lessonId]);
    
    return (
        <div className={classes.lesson}>
            {showSpinner && <LoadingSpinner />}
            {!showSpinner && <>
                <h1>{title}</h1>
            {type === "dialogue" && <Dialogue data={content} />}
            {type === "flashcard" && <Flashcard data={content} />}
            {type === "conjugation" && <Conjugation data={content} />}
            {type === "connect" && <Connect data={content} />}
            {type === "translate" && <Translate data={content} />}
            </>}
        </div>
    );
};

export default Lesson;