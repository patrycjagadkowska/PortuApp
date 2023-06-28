import { Link } from "react-router-dom";

import Modal from "../UI/Modal";

import classes from "../UI/styles/Modal.module.css";

const LessonCompletedModal = ({ openModal, toggleModal }) => {
  return (
    <Modal
      onClick={() => toggleModal(false)}
      open={openModal}
      header="Congratulations!"
    >
      <div className={classes["modal__content"]}>
        All your answers are correct! You can go back and choose next lesson or
        check again your answers.
        <div className={classes["modal__actions"]}>
          <Link to="/learn">Go back</Link>
          <button onClick={() => toggleModal(false)}>
            Check your answers again
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default LessonCompletedModal;