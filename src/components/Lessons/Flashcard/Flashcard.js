import { useParams } from 'react-router';

import FlashcardExercise from './FlashcardExercise';
import { useDoneExercise } from '../../../hooks/useDoneExercise';

import classes from './styles/Flashcard.module.css';

const Flashcard = props => {
    const { data } = props;
    const { unitId, lessonId } = useParams();
   
   const updateDoneExercises = useDoneExercise(data.length, unitId, lessonId); 
    
    const flashcardExercises = data.map((exercise, index) => {
        return <FlashcardExercise onCorrect={updateDoneExercises} key={`${unitId}/${lessonId}/${index}`} data={exercise} />
    });

    return (
        <div className={classes.flashcard}>
            <h3>Choose a correct answer</h3>
            {flashcardExercises}
        </div>
    );
};

export default Flashcard;