import { useState } from "react";
import { updateProfile, updateEmail } from "firebase/auth";

import Modal from "../../UI/Modal";
import { auth } from "../../../api/auth-api";
import CustomButton from "../../UI/CustomButton";
import SubmitButton from "../../UI/SubmitButton";
import CustomInput from "../../UI/CustomInput";
import { useInput } from "../../../hooks/useInput";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { BiError } from "react-icons/bi";
import { verifyEmail, verifyName } from "../../../utils/validationFunctions";

import classes from "./styles/UpdateDataModal.module.css";

const UpdateDataModal = ({ openModal, toggleModal }) => {
  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [submitButtonClass, setSubmitButtonClass] = useState("");

  const name = useInput("");
  const email = useInput("");

  const nameErrorMessage =
    "Please enter a valid name: no numbers, no special characters";
  const emailErrorMessage =
    "Please enter a valid email for example: name@domain.com";

  const updateUserName = () => {
    return updateProfile(auth.currentUser, { displayName: name.value });
  };

  const updateUserEmail = () => {
    return updateEmail(auth.currentUser, email.value);
  };

  const handleUpdateData = (event) => {
    event.preventDefault();
    setEmailError(null);
    setNameError(null);
    setSubmitButtonClass("spin");

    //check if both are empty and display error
    if (name.value === "" && email.value === "") {
      setSubmitButtonClass("error");
      setEmailError("You haven't chosen any data to update");
      return;
    }

    //check if name is invalid
    if (name.value !== "" && !verifyName(name.value)) {
      setSubmitButtonClass("error");
      setNameError(nameErrorMessage);
      return;
    }

    //check if email is invalid
    if (email.value !== "" && !verifyEmail(email.value)) {
      setSubmitButtonClass("error");
      setEmailError(emailErrorMessage);
      return;
    }

    let nameUpdatePromise = Promise.resolve();
    let emailUpdatePromise = Promise.resolve();

    if (name.value !== "") {
      nameUpdatePromise = updateUserName().catch((error) => {
        setSubmitButtonClass("error");
        switch(error.code) {
          case ("auth/internal-error"):
            setNameError("An internal error occured. Please try again later.");
            break;
          case ("auth/invalid-display-name"):
            setNameError("Please enter a valid name");
            break;
          default:
            setNameError(error.code);
            break;
        }
      });
    }

    if (email.value !== "") {
      emailUpdatePromise = updateUserEmail().catch((error) => {
        setSubmitButtonClass("error");
        switch (error.code) {
          case ("auth/email-already-exists"):
            setEmailError("Email is already registered.");
            break;
          case ("auth/internal-error"):
            setEmailError("An internal error occured. Please try again later.");
            break;
          default:
            setEmailError(error.code);
            break;
        }
      });
    }

    Promise.all([nameUpdatePromise, emailUpdatePromise])
      .then(() => {
        setSubmitButtonClass("success");
      })
      .catch((error) => {
        setSubmitButtonClass("error");
      });
  };

  return (
    <Modal
      header="Choose your data to update"
      onClick={toggleModal}
      open={openModal}
    >
      <form className={classes["modal-form"]} autoComplete="on" name="update-your-data">
        <CustomInput
          label={
            <>
              <BsPerson /> Name
            </>
          }
          type="text"
          error={
            nameError && (
              <>
                <BiError /> {nameError}
              </>
            )
          }
          id="update-name"
          value={name.value}
          onChange={name.onChange}
        />
        <CustomInput
          label={
            <>
              <MdOutlineMailOutline /> Email:
            </>
          }
          type="email"
          error={
            emailError && (
              <>
                <BiError /> {emailError}
              </>
            )
          }
          id="update-email"
          value={email.value}
          onChange={email.onChange}
        />
        <SubmitButton onClick={handleUpdateData} setClass={submitButtonClass}>
          Update data
        </SubmitButton>
      </form>
      <CustomButton
        className={classes["modal-form__close"]}
        onClick={toggleModal}
        type="button"
      >
        Go back
      </CustomButton>
    </Modal>
  );
};

export default UpdateDataModal;