import { updateProfile } from 'firebase/auth';
import { useRef, useState } from 'react';

import Modal from '../../UI/Modal';
import { auth } from '../../../api/auth-api';

import classes from './styles/UpdatePhotoModal.module.css';

const UpdatePhotoModal = (props) => {
    const { openModal, toggleModal } = props;
    const inputRef = useRef();
    const messagesRef = useRef();
    const [ displayUpdatedMessage, setDisplayUpdatedMessage ] = useState(false);
    const [ displayErrorMessage, setDisplayErrorMessage ] = useState(false);
    const [ errorMessage, setErrorMessage ] = useState('');

    const verifyURL = (url) => {
      if (
        (url.split(".").length > 1 && url.startsWith("http://")) ||
        url.startsWith("https://") ||
        url.startsWith("www.")
      ) {
        return true;
      }
      return false;
    };

    const handleUploadPhoto = (event) => {
        event.preventDefault()
        setDisplayErrorMessage(false);
        if (inputRef.current.value === "") {
            setErrorMessage('Please enter a valid URL starting with "http://", "https://" or "www.".');
            setDisplayErrorMessage(true);
            messagesRef.current.style.visibility = "visible";
        }else if (verifyURL(inputRef.current.value)) {
            updateProfile(auth.currentUser, {
                photoURL: inputRef.current.value
            }).then(() => {
                setDisplayUpdatedMessage(true);
                messagesRef.current.style.visibility = "visible";
            }).catch((err) => {
                setErrorMessage(err.message);
                setDisplayErrorMessage(true);
                messagesRef.current.style.visibility = "visible";
            });
        } else {
            setErrorMessage('Please enter a valid URL starting with "http://", "https://" or "www.".');
            setDisplayErrorMessage(true);
            messagesRef.current.style.visibility = "visible";
        }
    };

    const resetMessages = () => {
        setDisplayErrorMessage(false);
        setDisplayUpdatedMessage(false);
    };

    return (
      <Modal open={openModal} onClick={toggleModal} header="Edit your photo">
        <form onSubmit={handleUploadPhoto} className={classes.form}>
          <label htmlFor="photoInput">
            Please enter a valid URL to you photo:
          </label>
          <input
            type="url"
            id="photoInput"
            ref={inputRef}
            onFocus={resetMessages}
            noValidate
          />
          <button className={classes.submitBtn} type="submit">
            upload photo
          </button>
        </form>
        <div className={classes.messages} ref={messagesRef} >
          {displayUpdatedMessage && (
            <p className={classes["success-message"]}>
              Your photo has been updated.
            </p>
          )}
          {displayErrorMessage && (
            <p className={classes["error-message"]}>{errorMessage}</p>
          )}
        </div>
        <button className={classes.closeBtn} onClick={toggleModal}>
          close
        </button>
      </Modal>
    );
};

export default UpdatePhotoModal;