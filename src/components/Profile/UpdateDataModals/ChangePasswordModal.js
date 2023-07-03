import { useState } from "react";
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
} from "firebase/auth";

import Modal from "../../UI/Modal";
import { auth } from "../../../api/auth-api";
import CustomButton from "../../UI/CustomButton";
import CustomInput from "../../UI/CustomInput";
import SubmitButton from "../../UI/SubmitButton";
import { useInput } from "../../../hooks/useInput";
import { BiError } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";

import classes from "./styles/ChangePasswordModal.module.css";

const ChangePasswordModal = ({ openModal, toggleModal }) => {
  const oldPass = useInput("");
  const newPass = useInput("");
  const repeatedPass = useInput("");
  const [submitButtonClass, setSubmitButtonClass] = useState("");
  const [error, setError] = useState(null);

  const getCredentials = () => {
    const email = auth.currentUser.email;
    const password = oldPass.value;
    const credential = EmailAuthProvider.credential(email, password);
    return credential;
  };

  const verifyPassword = () => {
    if (newPass.value === repeatedPass.value) {
      return true;
    }
    return false;
  };

  const handlePasswordChange = (event) => {
    event.preventDefault();
    setError(null);
    setSubmitButtonClass("spin");

    const passwordIsOk = verifyPassword();
    if (passwordIsOk) {
      const credential = getCredentials();
      reauthenticateWithCredential(auth.currentUser, credential)
        .then(() => {
          updatePassword(auth.currentUser, newPass.value)
            .then(() => {
              setSubmitButtonClass("success");
            })
            .catch((error) => {
              setSubmitButtonClass("error");
              setError(error.code);
            });
        })
        .catch((error) => {
          setSubmitButtonClass("error");
          switch (error.code) {
            case "auth/wrong-password": {
              setError("Old password is invalid.");
              break;
            }
            case "auth/missing-password": {
              setError("You haven't provided the old password.");
              break;
            }
            default: {
              setError(error.message);
              break;
            }
          }
        });
    } else {
      setSubmitButtonClass("error");
      setError("Passwords are not equal.");
    }
  };

  return (
    <Modal open={openModal} onClick={toggleModal} header="Change your password">
      <form className={classes.form} autoComplete="on"name="change-password">
        <CustomInput
          label={
            <>
              <RiLockPasswordLine /> Old password
            </>
          }
          type="password"
          id="old-password"
          value={oldPass.value}
          onChange={oldPass.onChange}
        />
        <CustomInput
          label={
            <>
              <RiLockPasswordLine /> New password:
            </>
          }
          type="password"
          id="new-password"
          value={newPass.value}
          onChange={newPass.onChange}
        />
        <CustomInput
          label={
            <>
              <RiLockPasswordLine /> Repeat new password:
            </>
          }
          type="password"
          id="repeated-password"
          value={repeatedPass.value}
          onChange={repeatedPass.onChange}
          error={
            error && (
              <>
                <BiError /> {error}
              </>
            )
          }
        />
        <SubmitButton
          setClass={submitButtonClass}
          onClick={handlePasswordChange}
        >
          change password
        </SubmitButton>
      </form>
      <CustomButton onClick={toggleModal} className={classes["form__closeBtn"]}>
        go back
      </CustomButton>
    </Modal>
  );
};

export default ChangePasswordModal;