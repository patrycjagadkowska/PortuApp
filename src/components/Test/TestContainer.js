import { useContext, useState, useEffect, useCallback } from 'react';

import Question from './Question';
import DataContext from '../../context/DataContext';
import UserScore from './UserScore';
import ButtonNavLink from '../UI/ButtonNavLink';

import classes from './styles/TestContainer.module.css';

const TestContainer = ({ unitId }) => {
    const { data } = useContext(DataContext);
    const [ questions, setQuestions ] = useState([]);
    const [ correctAnswers, setCorrectAnswers ] = useState(0);
    const [ answeredQuestions, setAnsweredQuestions ] = useState(0)
    const [ currentQuestionIndex, setCurrentQuestionIndex ] = useState(0);
    const [ isAnswered, setIsAnswered ] = useState(false);
    const [ displayScore, setDisplayScore ] = useState(false);
    const NUM_OF_QUESTIONS = questions.length;

    const updateAnswers = useCallback((isCorrect) => {
      if (isCorrect) {
        setCorrectAnswers((correctAnswers) => correctAnswers + 1);
      }
      setIsAnswered(true);
      setAnsweredQuestions((answeredQuestions) => answeredQuestions + 1);
      const updatedQuestions = [...questions];
      updatedQuestions[currentQuestionIndex].answered = true;
    }, [currentQuestionIndex, questions]);

    const testIsDone = answeredQuestions === NUM_OF_QUESTIONS;

    useEffect(() => {
      const test = data.find((unit) => unit.id === unitId)?.test || [];
      const updatedTest = test.map((question) => ({
        ...question,
        answered: false,
      }));
      setQuestions(updatedTest);
    }, [data, unitId]);

    useEffect(() => {
      if (!isAnswered) {
        const questionsTimer = setTimeout(() => {
          updateAnswers(false);
          setTimeout(() => {
            if (currentQuestionIndex < NUM_OF_QUESTIONS - 1) {
              setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            }
            if (testIsDone) {
                setDisplayScore(true);
            }
          }, 2000);
        }, 10000);
        return () => clearTimeout(questionsTimer);
      } else {
        const feedbackTimer = setTimeout(() => {
          if (currentQuestionIndex < NUM_OF_QUESTIONS - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            setIsAnswered(false);
          }
          if (testIsDone) {
            setDisplayScore(true);
          }
        }, 2000);
        return () => clearTimeout(feedbackTimer);
      }
    }, [NUM_OF_QUESTIONS, currentQuestionIndex, isAnswered, testIsDone, updateAnswers]);

    const currentQuestion = questions[currentQuestionIndex];

    return (
      <div className={classes["test__container"]}>
        {questions.length > 0 && !displayScore && (
          <Question questionData={currentQuestion} onAnswer={updateAnswers} />
        )}
        {displayScore && (
          <>
          <UserScore score={correctAnswers} NUM_OF_QUESTIONS={NUM_OF_QUESTIONS} />
          <ButtonNavLink className={classes["test__container--btn"]} to='/learn'>go back</ButtonNavLink>
          </>
        )}
      </div>
    );
};

export default TestContainer;