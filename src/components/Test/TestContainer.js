import { useContext, useState, useEffect } from 'react';

import Question from './Question';
import DataContext from '../../context/DataContext';

import classes from './styles/TestContainer.module.css';

const TestContainer = ({ unitId }) => {
    const { data } = useContext(DataContext);
    const [ questions, setQuestions ] = useState([]);
    const [ correctAnswers, setCorrectAnswers ] = useState(0);
    const [ answeredQuestions, setAnsweredQuestions ] = useState(0)
    const NUM_OF_QUESTIONS = 10;

    const updateAnswers = (bool) => {
        if (bool === true) {
            setCorrectAnswers(correctAnswers => correctAnswers + 1);
        }
        setAnsweredQuestions(answeredQuestions => answeredQuestions + 1);
    };

    useEffect(() => {
        const test = data.find((unit) => unit.id === unitId)?.test || [];
        const questionsArray = test.map((questionData) => {
           return <Question questionData={questionData} key={questionData.id} onAnswer={updateAnswers} />
        });
        setQuestions(questionsArray);
    }, [data, unitId]);

    return (
        <div className={classes["test__container"]}>
            {answeredQuestions === NUM_OF_QUESTIONS ? <p>You scored {correctAnswers} points</p> : questions}
        </div>
    );
};

export default TestContainer;