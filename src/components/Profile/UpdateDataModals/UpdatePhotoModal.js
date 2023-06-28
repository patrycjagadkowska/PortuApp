import { updateProfile } from "firebase/auth";
import { useState } from "react";
import { MdOutlineHttps } from "react-icons/md";
import { BiError } from "react-icons/bi";

import Modal from "../../UI/Modal";
import { auth } from "../../../api/auth-api";
import CustomButton from "../../UI/CustomButton";
import CustomInput from "../../UI/CustomInput";
import { useInput } from "../../../hooks/useInput";
import SubmitButton from "../../UI/SubmitButton";

import classes from "./styles/UpdatePhotoModal.module.css";

const UpdatePhotoModal = ({ openModal, toggleModal }) => {
  const url = useInput("");
  const [message, setMessage] = useState({ display: false, value: "" });
  const [submitButtonClass, setSubmitButtonClass] = useState("");

  const verifyURL = () => {
    if (
      (url.value.split(".").length > 1 && url.value.startsWith("http://")) ||
      url.value.startsWith("https://") ||
      url.value.startsWith("www.")
    ) {
      return true;
    }
    return false;
  };

  const handleUploadPhoto = (event) => {
    event.preventDefault();
    setSubmitButtonClass("spin");
    resetMessages();
    if (url.value === "") {
      setSubmitButtonClass("error");
      setMessage({
        display: true,
        value:
          'Please enter a valid URL starting with "http://", "https://" or "www.".',
      });
    } else if (verifyURL()) {
      updateProfile(auth.currentUser, {
        photoURL: url.value,
      })
        .then(() => {
          setSubmitButtonClass("success");
        })
        .catch((err) => {
          setMessage({ display: true, value: err.message });
          setSubmitButtonClass("error");
        });
    } else {
      setSubmitButtonClass("error");
      setMessage({
        display: true,
        value:
          'Please enter a valid URL starting with "http://", "https://" or "www.".',
      });
    }
  };

  const resetMessages = () => {
    setMessage({ display: false, value: "" });
  };

  return (
    <Modal open={openModal} onClick={toggleModal} header="Edit your photo">
      <form className={classes.form} noValidate>
        <CustomInput
          type="url"
          id="photoInput"
          value={url.value}
          onChange={url.onChange}
          onFocus={resetMessages}
          label={
            <>
              <MdOutlineHttps /> Please enter a valid URL to your photo:
            </>
          }
          error={
            message.display && (
              <>
                <BiError /> {message.value}{" "}
              </>
            )
          }
        />
        <SubmitButton onClick={handleUploadPhoto} setClass={submitButtonClass}>
          Upload photo
        </SubmitButton>
      </form>
      <CustomButton className={classes.closeBtn} onClick={toggleModal}>
        Close
      </CustomButton>
    </Modal>
  );
};

export default UpdatePhotoModal;