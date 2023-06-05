import { useState } from "react";
import { updateProfile, updateEmail } from "firebase/auth";

import Modal from "../../UI/Modal";
import UpdateName from "./UpdateName";
import UpdateEmail from "./UpdateEmail";
import { auth } from "../../../api/auth-api";
import LoadingSpinner from '../../UI/LoadingSpinner';
import CustomButton from '../../UI/CustomButton';

import classes from './styles/UpdateDataModal.module.css';

const UpdateDataModal = (props) => {
    const { openModal, toggleModal } = props;
    const [ nameValue, setNameValue ] = useState({checked: false, value: ""});
    const [ emailValue, setEmailValue ] = useState({checked: false, value: ""});
    const [ nameError, setNameError ] = useState();
    const [ emailError, setEmailError ] = useState();
    const [ validationFeedback, setValidationFeedback] = useState();
    const [ showSpinner, setShowSpinner ] = useState(false);

    const nameErrorMessage = "Please enter a valid name: no numbers, no special characters";
    const emailErrorMessage = "Please enter a valid email for example: name@domain.com";

    const verifyEmail = (email) => {
        const emailRegex = /^[A-Z0-9._-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
    };

    const verifyName = (name) => {
        const nameRegex = /^[A-Za-z]+$/;
        return nameRegex.test(name);
    };

    const handleUpdateData = (event) => {
        event.preventDefault();
        setShowSpinner(true);
        setEmailError();
        setNameError();
        setValidationFeedback();
        if (emailValue.checked && nameValue.checked) {
            if (verifyEmail(emailValue.value) && verifyName(nameValue.value)) {
                updateProfile(auth.currentUser, {
                  displayName: nameValue.value,
                })
                  .then(() => {
                    updateEmail(auth.currentUser, emailValue.value);
                  })
                  .then(() => {
                    setValidationFeedback("Your data has been sent!");
                  })
                  .catch((error) => {
                    setValidationFeedback(error.message);
                  });
            } else if (verifyEmail(emailValue.value) && !verifyName(nameValue.value)) {
                setNameError(nameErrorMessage);
            } else if (!verifyEmail(emailValue.value) && verifyName(nameValue.value)) {
                setEmailError(emailErrorMessage);
            } else {
                setEmailError(emailErrorMessage);
                setNameError(nameErrorMessage);
            }
        }

        if (emailValue.checked && !nameValue.checked) {
            if (verifyEmail(emailValue.value)) {
                updateEmail(auth.currentUser, emailValue.value).then(() => {
                    setValidationFeedback("Your email has been updated!");
                }).catch((error) => {
                    setValidationFeedback(error.message);
                });
            } else {
                setEmailError(emailErrorMessage);
            }
        }

        if (!emailValue.checked && nameValue.checked) {
            if (verifyName(nameValue.value)) {
                updateProfile(auth.currentUser, {
                  displayName: nameValue.value,
                }).then(() => {
                    setValidationFeedback("Your name has been updated!");
                }).catch((error) => setValidationFeedback(error.message));
            } else {
                setNameError(nameErrorMessage);
            }
        }

        if (!emailValue.checked && !nameValue.checked) {
            setValidationFeedback("You didn't choose any data to update");
        }
          setShowSpinner(false);
    };

    return (
      <Modal
        header="Choose your data to update"
        onClick={toggleModal}
        open={openModal}
      >
        <form className={classes["modal-form"]}>
          <UpdateName setNameValue={setNameValue} nameValue={nameValue.value} />
          <UpdateEmail setEmailValue={setEmailValue} emailValue={emailValue.value} />
          {nameError && <span className={classes["modal-form__error"]}>{nameError}</span>}
          {emailError && <span className={classes["modal-form__error"]}>{emailError}</span>}
          <CustomButton className={classes["modal-form__submit"]} onClick={handleUpdateData} type="submit">Update data</CustomButton>
          {validationFeedback && <span>{validationFeedback}</span>}
          {showSpinner && <LoadingSpinner className={classes["modal-form__spinner"]} />}
        </form>
        <CustomButton className={classes["modal-form__close"]} onClick={toggleModal} type="button">
          Go back
        </CustomButton>
      </Modal>
    );
};

export default UpdateDataModal;