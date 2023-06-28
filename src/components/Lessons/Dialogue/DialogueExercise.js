import { useParams } from "react-router";
import { useState } from "react";

import CustomButton from "../../UI/CustomButton";

import classes from "./styles/DialogueExercise.module.css";

const DialogueExercise = (props) => {
  const { answers, correct, title } = props.exercise;
  const { animationDelay, onCorrect, toggleModal } = props;
  const { unitId, lessonId } = useParams();
  const [chosenAnswer, setChosenAnswer] = useState();

  const checkAnswer = (event) => {
    event.preventDefault();
    if (chosenAnswer === correct) {
      onCorrect();
      toggleModal(good, true);
    } else {
      toggleModal(wrong, true);
    }
  };

  const changeHandler = (event) => {
    setChosenAnswer(event.target.value);
  };

  const radios = answers.map((answer, index) => {
    const id = unitId + "/" + lessonId + "/radio/" + index;
    return (
      <div className={classes["exercise__radio"]} key={id}>
        <input
          type="radio"
          id={id}
          value={answer}
          onChange={changeHandler}
          name="dialogue-exercise"
        />
        <label htmlFor={id}>{answer}</label>
      </div>
    );
  });

  return (
    <form
      className={classes.exercise}
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <h2>{title}</h2>
      <div className={classes["exercise__radios"]}>{radios}</div>
      <CustomButton
        onClick={checkAnswer}
        className={classes["exercise__submitBtn"]}
      >
        check answer
      </CustomButton>
    </form>
  );
};

export default DialogueExercise;
