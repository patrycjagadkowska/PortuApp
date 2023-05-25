import { useState, useCallback } from "react";

import SentencesList from './SentencesList';
import LessonCompletedModal from '../LessonCompletedModal';

import classes from './styles/Translate.module.css';

const Translate = props => {
    const { title, sentences } = props.data;
    const [ openModal, setOpenModal ] = useState(false);

    const toggleModal = useCallback(
      (bool) => {
        setOpenModal(bool);
      },
      [setOpenModal]
    );

    return (
        <div className={classes.translate}>
            <h2>{title}</h2>
            <SentencesList sentences={sentences} toggleModal={toggleModal} />
            {openModal && <LessonCompletedModal openModal={openModal} toggleModal={toggleModal} />}
        </div>
    );
};

export default Translate