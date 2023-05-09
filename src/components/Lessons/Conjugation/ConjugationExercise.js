import { useParams } from 'react-router';

import Sentence from './Sentence';

import classes from './styles/ConjugationExercise.module.css';

const ConjugationExercise = props => {
    const { title, exercises } = props;
    const { unitId, lessonId } = useParams();
    const exercisesList = exercises.map((exercise, index) => {
        return <Sentence key={`${unitId}/${lessonId}/${index}`} sentence={exercise.sentence} correct={exercise.correct} />
    });

    return (
      <div className={classes.exercises}>
        <h3>{title}</h3>
        <ol className={classes["exercises__list"]}>{exercisesList}</ol>
      </div>
    );
};

export default ConjugationExercise;