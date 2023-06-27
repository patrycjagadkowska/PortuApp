import { useParams } from 'react-router';
import { useEffect } from 'react';

import Sentence from './Sentence';
import { useDoneExercise } from '../../../hooks/useDoneExercise';

const ConjugationExercise = ({ title, exercises, displayModal }) => {
  const { unitId, lessonId } = useParams();

  const { updateDoneExercises, numDone } = useDoneExercise(
    exercises.length,
    unitId,
    lessonId
  );

  useEffect(() => {
    if (numDone === exercises.length) {
      displayModal();
    }
  }, [numDone, exercises.length, displayModal]);

  const exercisesList = exercises.map((exercise, index) => {
    return (
      <Sentence
        onCorrect={updateDoneExercises}
        key={`${unitId}/${lessonId}/${index}`}
        sentence={exercise.sentence}
        correct={exercise.correct}
      />
    );
  });

  return (
    <div>
      <h2>{title}</h2>
      <ol>{exercisesList}</ol>
    </div>
  );
};

export default ConjugationExercise;