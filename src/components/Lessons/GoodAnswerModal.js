import { Link } from "react-router-dom";

import Modal from "../UI/Modal";

import classes from "../UI/styles/Modal.module.css";

const GoodAnswerModal = ({ openModal, toggleModal }) => {
  return (
    <Modal
      onClick={() => toggleModal("good", false)}
      open={openModal}
      header="Congratulations!"
    >
      <div className={classes["modal__content"]}>
        Now you can read dialogue again to remember all the phrases or go back
        to choose another lesson.
        <div className={classes["modal__actions"]}>
          <Link to="/learn">Go back</Link>
          <button onClick={() => toggleModal("good", false)}>
            Read dialogue
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default GoodAnswerModal;