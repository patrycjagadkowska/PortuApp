import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import FlashcardExercise from './FlashcardExercise';
import { useDoneExercise } from '../../../hooks/useDoneExercise';
import Modal from '../../UI/Modal';

import classes from './styles/Flashcard.module.css';
import modalClasses from '../../UI/styles/Modal.module.css';

const Flashcard = props => {
    const { data } = props;
    const { unitId, lessonId } = useParams();
    const { updateDoneExercises, numDone } = useDoneExercise(data.length, unitId, lessonId); 
    const [ openModal, setOpenModal ] = useState(false);

    useEffect(() => {
        if (numDone === data.length) {
            setOpenModal(true);
        }
    }, [setOpenModal, numDone, data.length]);
    
    const flashcardExercises = data.map((exercise, index) => {
        return <FlashcardExercise onCorrect={updateDoneExercises} key={`${unitId}/${lessonId}/${index}`} data={exercise} />
    });

    return (
      <div className={classes.flashcard}>
        <h3>Choose a correct answer</h3>
        {flashcardExercises}
        {openModal && (
          <Modal
            onClick={() => setOpenModal(false)}
            open={openModal}
            header="Great job!"
          >
            <div className={modalClasses["modal__content"]}>
              All your answers are correct! You can go back and choose next
              lesson or check again your answers.
              <div className={modalClasses["modal__actions"]}>
                <Link to="/learn">Go back</Link>
                <button onClick={() => setOpenModal(false)}>
                  Check your answers again
                </button>
              </div>
            </div>
          </Modal>
        )}
      </div>
    );
};

export default Flashcard;