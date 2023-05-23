import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Sentence from "./Sentence";
import { useDoneExercise } from '../../../hooks/useDoneExercise';
import Modal from '../../UI/Modal';

import classes from './styles/SentencesList.module.css';
import modalClasses from '../../UI/styles/Modal.module.css';

const SentencesList = props => {
    const { sentences } = props;
    const { unitId, lessonId } = useParams();
    const [ openModal, setOpenModal ] = useState(false);
    const NUM_OF_EXERCISES = sentences.length;
    const { updateDoneExercises, numDone } = useDoneExercise(NUM_OF_EXERCISES, unitId, lessonId);


    useEffect(() => {
        if (NUM_OF_EXERCISES === numDone) {
            setOpenModal(true);
        }
    }, [setOpenModal, NUM_OF_EXERCISES, numDone]);

    const sentencesList = sentences.map((sentence, index) => {
        const id = `${unitId}/${lessonId}/${index}`;
        return <Sentence onCorrect={updateDoneExercises} translate={sentence.translate} translated={sentence.translated} key={id} id={id} />
    });

    return (
        <ol className={classes["sentences-list"]}>
            {sentencesList}
            {openModal && <Modal onClick={() => setOpenModal(false)} header="One more done!" open={openModal}>
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
                </Modal>}
        </ol>
    );
};

export default SentencesList;