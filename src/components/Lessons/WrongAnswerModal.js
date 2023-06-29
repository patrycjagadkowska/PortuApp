import Modal from "../UI/Modal";
import CustomButton from "../UI/CustomButton";
import ButtonNavLink from "../UI/ButtonNavLink";

import classes from "../UI/styles/Modal.module.css";

const WrongAnswerModal = ({ openModal, toggleModal }) => {
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
          <ButtonNavLink to="/learn">go back</ButtonNavLink>
          <CustomButton onClick={() => toggleModal("wrong", false)}>try again</CustomButton>
        </div>
      </div>
    </Modal>
  );
};

export default WrongAnswerModal;