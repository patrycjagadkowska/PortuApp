import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import Modal from '../../UI/Modal';

import classes from './styles/DialogueExercise.module.css';
import modalClasses from '../../UI/styles/Modal.module.css';

const DialogueExercise = props => {
    const { answers, correct, title } = props.exercise;
    const { animationDelay, onCorrect } = props;
    const { unitId, lessonId } = useParams();
    const [chosenAnswer, setChosenAnswer] = useState();
    const [ openModal, setOpenModal ] = useState();

    const answerIsCorrect = chosenAnswer === correct;

    const modalTextCorrect = (
      <div className={modalClasses['modal__content']}>
        Your answer is correct!
        <div className={modalClasses['modal__actions']}>
        <Link to="/learn">Go back</Link>
        <button onClick={() => setOpenModal(false)}>Check your answers again</button>
        </div>
      </div>
    );

    const modalTextIncorrect = (
      <div className={modalClasses["modal__content"]}>
        Oops! Seems like you have to work a bit harder...{" "}
        <div className={modalClasses["modal__actions"]}>
          <Link
            to={`/learn/${unitId}/${lessonId}`}
            onClick={() => setOpenModal(false)}
          >
            Try again!
          </Link>{" "}
          <Link to="/learn">Go back</Link>
        </div>
      </div>
    );

    const checkAnswer = (event) => {
        event.preventDefault();
        if (answerIsCorrect) {
            onCorrect();
            setOpenModal(true);
        } else {
            setOpenModal(true);
        }
    };

    const changeHandler = (event) => {
        setChosenAnswer(event.target.value);        
    };

    const radios = answers.map((answer, index) => {
        const id = unitId + "/" + lessonId + "/radio/" + index;
        return (
            <div className={classes['exercise__radio']} key={id}>
                {openModal && <Modal onClick={() => setOpenModal(false)} open={openModal} header={answerIsCorrect? "Good job!" : "Wrong answer"}>
                    {answerIsCorrect ? modalTextCorrect : modalTextIncorrect}
                </Modal>}
                <input type="radio" id={id} value={answer} onChange={changeHandler} name='dialogue-exercise' />
                <label htmlFor={id}>{answer}</label>
            </div>
        );
    });


    return (
        <form className={classes.exercise} onSubmit={checkAnswer} style={{animationDelay: `${animationDelay}s`}}>
            <h3>{title}</h3>
            <div className={classes['exercise__radios']}>
            {radios}
            </div>
            <button type="submit" className={classes['exercise__submitBtn']}>Check answer</button>
        </form>
    );
};

export default DialogueExercise;