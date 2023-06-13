import { useState, useEffect, useCallback } from 'react';

import Answer from './Answer'

import classes from './styles/Question.module.css';

const Question = ({ questionData, onAnswer }) => {
    const { question, id, answers, correct } = questionData;
    const [ answersData, setAnswersData ] = useState([]);
    const [ shuffledAnswers, setShuffledAnswers ] = useState([]);
    const [ isAnswered, setIsAnswered ] = useState(false);

    const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    useEffect(() => {
        setShuffledAnswers(shuffleArray(answers));
    }, [answers]);

    const indexOfCorrectAnswer = shuffledAnswers.findIndex((answer) => answer === correct);

    const checkAnswer = useCallback((event, index) => {
        //prevent double clicking
        if (isAnswered) {
            return;
        }
        setIsAnswered(true);
        if (index !== indexOfCorrectAnswer) {
            event.target.classList.add(classes.incorrect);
            onAnswer(false);
        } 
        else {
            onAnswer(true);
        }
    }, [indexOfCorrectAnswer, isAnswered, onAnswer]);

    useEffect(() => {
        const answersArray = shuffledAnswers.map((answer, index) => {
          return (
            <Answer
              answerData={answer}
              key={`${id}/${index}`}
              index={index}
              correctClass={isAnswered && answer === correct ? classes.correct : ""}
              checkAnswer={checkAnswer}
            />
          );
        });
        setAnswersData(answersArray);
    }, [answers, id, shuffledAnswers, checkAnswer, correct, isAnswered]);
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