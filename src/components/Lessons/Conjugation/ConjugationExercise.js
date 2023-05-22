import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Sentence from './Sentence';
import { useDoneExercise } from '../../../hooks/useDoneExercise';
import Modal from '../../UI/Modal';

import classes from './styles/ConjugationExercise.module.css';
import modalClasses from '../../UI/styles/Modal.module.css';

const ConjugationExercise = props => {
    const { title, exercises } = props;
    const { unitId, lessonId } = useParams();
    const [ openModal, setOpenModal ] = useState(false);

    const { updateDoneExercises, numDone } = useDoneExercise(exercises.length, unitId, lessonId);

    useEffect(() => {
      if (numDone === exercises.length) {
        setOpenModal(true);
      }
    }, [numDone, exercises.length]);

    const exercisesList = exercises.map((exercise, index) => {
        return <Sentence onCorrect={updateDoneExercises} key={`${unitId}/${lessonId}/${index}`} sentence={exercise.sentence} correct={exercise.correct} />
    });

    return (
      <div className={classes.exercises}>
        <h3>{title}</h3>
        <ol className={classes["exercises__list"]}>{exercisesList}</ol>
        {openModal && (
          <Modal
            onClick={() => setOpenModal(false)}
            open={openModal}
            header="Congratulations!"
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

export default ConjugationExercise;