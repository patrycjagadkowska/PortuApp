import { useParams } from "react-router";
import { useCallback, useEffect, useState } from "react";

import FlashcardExercise from "./FlashcardExercise";
import { useDoneExercise } from "../../../hooks/useDoneExercise";
import LessonCompletedModal from "../LessonCompletedModal";

import classes from "./styles/Flashcard.module.css";

const Flashcard = ({ data }) => {
  const { unitId, lessonId } = useParams();
  const { updateDoneExercises, numDone } = useDoneExercise(
    data.length,
    unitId,
    lessonId
  );
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = useCallback(
    (bool) => {
      setOpenModal(bool);
    },
    [setOpenModal]
  );

  useEffect(() => {
    if (numDone === data.length) {
      toggleModal(true);
    }
  }, [toggleModal, numDone, data.length]);

  const flashcardExercises = data.map((exercise, index) => {
    return (
      <FlashcardExercise
        onCorrect={updateDoneExercises}
        key={`${unitId}/${lessonId}/${index}`}
        data={exercise}
      />
    );
  });

  return (
    <div className={classes.flashcard}>
      <h3>Choose a correct answer</h3>
      {flashcardExercises}
      {openModal && (
        <LessonCompletedModal openModal={openModal} toggleModal={toggleModal} />
      )}
    </div>
  );
};

export default Flashcard;