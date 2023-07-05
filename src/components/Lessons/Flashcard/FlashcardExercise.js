import { useState } from "react";

import classes from "./styles/FlashcardExercise.module.css";

const FlashcardExercise = ({ data, onCorrect }) => {
  const { question, answers, correct } = data;
  const [done, setDone] = useState(false);

  let flashcardClass = done
    ? `${classes.flashcardExercise} ${classes["flashcardExercise__done"]}`
    : classes.flashcardExercise;

  const checkAnswer = (event) => {
    const selectedAnswer = event.target.textContent;

    if (selectedAnswer === correct) {
      onCorrect();
      setDone(true);
      event.target.classList.add(classes["flashcardExercise__answer--correct"]);
    } else {
      event.target.classList.add(
        classes["flashcardExercise__answer--incorrect"]
      );
      setTimeout(() => {
        event.target.classList.remove(
          classes["flashcardExercise__answer--incorrect"]
        );
      }, 3000);
    }
  };

  return (
    <div className={flashcardClass}>
      <div className={classes["flashcardExercise__question"]}>{question}</div>
      <div
        className={classes["flashcardExercise__answer"]}
        onClick={done ? () => {} : checkAnswer}
      >
        {answers[0]}
      </div>
      <div
        className={classes["flashcardExercise__answer"]}
        onClick={done ? () => {} : checkAnswer}
      >
        {answers[1]}
      </div>
    </div>
  );
};

export default FlashcardExercise;