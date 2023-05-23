import { Link } from "react-router-dom";

import Modal from "../UI/Modal";

import classes from '../UI/styles/Modal.module.css';

const WrongAnswerModal = (props) => {
    const { openModal, toggleModal } = props;
    return (
      <Modal
        onClick={() => toggleModal("wrong", false)}
        open={openModal}
        header="Oops... Wrong answer!"
      >
        <div className={classes["modal__content"]}>
          Read dialogue again and choose a correct answer or go back to start
          another lesson and come back later.
          <div className={classes["modal__actions"]}>
            <Link to="/learn">Go back</Link>
            <button onClick={() => toggleModal("wrong", false)}>
              Try again
            </button>
          </div>
        </div>
      </Modal>
    );
};

export default WrongAnswerModal;