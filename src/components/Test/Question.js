import { useState, useEffect } from 'react';

import Answer from './Answer'

import classes from './styles/Question.module.css';

const Question = ({ questionData }) => {
    const { question, id, answers } = questionData;
    const [ answersData, setAnswersData ] = useState([]);

    useEffect(() => {
        const answersArray = answers.map((answer, index) => {
            return <Answer answerData={answer} key={`${id}/${index}`} />
        });
        setAnswersData(answersArray);
    }, [answers, id]);
    return (
        <div className={classes.question}>
            <header className={classes["question__header"]}><h3>{question}</h3></header>
            <div className={classes["question__answers"]}>
                {answersData}
            </div>
        </div>
    );
};

export default Question;