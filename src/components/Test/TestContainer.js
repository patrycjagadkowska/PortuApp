import { useContext, useState, useEffect, useCallback, useRef } from "react";

import Question from "./Question";
import DataContext from "../../context/DataContext";
import UserScore from "./UserScore";
import ButtonNavLink from "../UI/ButtonNavLink";
import CountdownBar from "./CountdwownBar";

import classes from "./styles/TestContainer.module.css";

const TestContainer = ({ unitId }) => {
  const { data } = useContext(DataContext);
  const [questions, setQuestions] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [numAnsweredQuestions, setNumAnsweredQuestions] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [displayScore, setDisplayScore] = useState(false);
  const [remainingTime, setRemainingTime] = useState(1000);
  const NUM_OF_QUESTIONS = questions.length;
  const currentQuestionIndexRef = useRef(currentQuestionIndex);

  const remainingTimeTimer = useRef();

  const updateAnswers = useCallback(
    (isCorrect) => {
      if (isCorrect) {
        setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
      }
      setNumAnsweredQuestions((prevNum) => prevNum + 1);
      setIsAnswered(true);
      const updatedQuestions = [...questions];
      if (updatedQuestions[currentQuestionIndex]) {
        updatedQuestions[currentQuestionIndex].answered = true;
      }
    },
    [currentQuestionIndex, questions]
  );

  const testIsDone = numAnsweredQuestions === NUM_OF_QUESTIONS;

  useEffect(() => {
    const test = data.find((unit) => unit.id === unitId)?.test || [];
    const updatedTest = test.map((question) => ({
      ...question,
      answered: false,
    }));
    setQuestions(updatedTest);
  }, [data, unitId]);

  useEffect(() => {
    currentQuestionIndexRef.current = currentQuestionIndex;

    if (!isAnswered) {
      remainingTimeTimer.current = setInterval(() => {
        setRemainingTime((prevRemainingTime) => prevRemainingTime - 1);
      }, 10);
      return () => clearInterval(remainingTimeTimer.current);
    } else {
      const feedbackTimer = setTimeout(() => {
        if (currentQuestionIndex < NUM_OF_QUESTIONS - 1) {
          setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
          setIsAnswered(false);
          setRemainingTime(1000);
        }
        if (testIsDone) {
          setDisplayScore(true);
          clearInterval(remainingTimeTimer.current);
        }
      }, 2000);
      return () => clearTimeout(feedbackTimer);
    }
  }, [currentQuestionIndex, isAnswered, NUM_OF_QUESTIONS, testIsDone]);

  useEffect(() => {
    if (!isAnswered && remainingTime === 0) {
      clearInterval(remainingTimeTimer.current);
      updateAnswers(false);
      setTimeout(() => {
        if (currentQuestionIndexRef.current < NUM_OF_QUESTIONS - 1) {
          setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
          setRemainingTime(1000);
        }
        if (testIsDone) {
          setDisplayScore(true);
        }
      }, 2000);
    }
  }, [isAnswered, remainingTime, updateAnswers, NUM_OF_QUESTIONS, testIsDone]);

  const currentQuestion = !testIsDone
    ? questions[currentQuestionIndex]
    : questions[NUM_OF_QUESTIONS - 1];

  return (
    <div className={classes["test__container"]}>
      <CountdownBar remainingTime={remainingTime} />
      {questions.length > 0 && currentQuestion && !displayScore && (
        <Question questionData={currentQuestion} onAnswer={updateAnswers} />
      )}
      {displayScore && (
        <>
          <UserScore
            score={correctAnswers}
            NUM_OF_QUESTIONS={NUM_OF_QUESTIONS}
          />
          <ButtonNavLink
            className={classes["test__container--btn"]}
            to="/learn"
          >
            go back
          </ButtonNavLink>
        </>
      )}
    </div>
  );
};

export default TestContainer;