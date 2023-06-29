import Modal from "../UI/Modal";
import CustomButton from '../UI/CustomButton';
import ButtonNavLink from "../UI/ButtonNavLink"

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
          <ButtonNavLink to="/learn">go back</ButtonNavLink>
          <CustomButton onClick={() => toggleModal("good", false)}>
            read dialogue
          </CustomButton>
        </div>
      </div>
    </Modal>
  );
};

export default GoodAnswerModal;