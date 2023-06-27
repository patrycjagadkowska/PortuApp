import { useCallback, useState } from "react";

import ConjugationExercise from "./ConjugationExercise";
import VerbTable from "./VerbTable";
import LessonCompletedModal from "../LessonCompletedModal";

import classes from "./styles/Conjugation.module.css";

const Conjugation = (props) => {
  const { verb, table, exercises, title } = props.data;
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = (bool) => {
    setOpenModal(bool);
  };

  const handleShowModal = useCallback(() => {
    setOpenModal(true);
  }, [setOpenModal]);

  return (
    <div className={classes.conjugation}>
      <VerbTable verb={verb} table={table} />
      <ConjugationExercise
        title={title}
        exercises={exercises}
        displayModal={handleShowModal}
      />
      {openModal && (
        <LessonCompletedModal openModal={openModal} toggleModal={toggleModal} />
      )}
    </div>
  );
};

export default Conjugation;