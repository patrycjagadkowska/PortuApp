import { useParams } from 'react-router';
import { useEffect } from 'react';

import Sentence from './Sentence';
import { useDoneExercise } from '../../../hooks/useDoneExercise';

import classes from './styles/ConjugationExercise.module.css';

const ConjugationExercise = props => {
    const { title, exercises, displayModal } = props;
    const { unitId, lessonId } = useParams();

    const { updateDoneExercises, numDone } = useDoneExercise(exercises.length, unitId, lessonId);

    useEffect(() => {
      if (numDone === exercises.length) {
        displayModal();
      }
    }, [numDone, exercises.length, displayModal]);

    const exercisesList = exercises.map((exercise, index) => {
        return <Sentence onCorrect={updateDoneExercises} key={`${unitId}/${lessonId}/${index}`} sentence={exercise.sentence} correct={exercise.correct} />
    });

    return (
      <div className={classes.exercises}>
        <h3>{title}</h3>
        <ol className={classes["exercises__list"]}>{exercisesList}</ol>
      </div>
    );
};

export default ConjugationExercise;