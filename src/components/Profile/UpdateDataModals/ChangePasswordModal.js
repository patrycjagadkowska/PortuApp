import { useRef } from 'react';
import { EmailAuthProvider, reauthenticateWithCredential, updatePassword } from 'firebase/auth';

import Modal from '../../UI/Modal';
import { auth } from '../../../api/auth-api';

import classes from './styles/ChangePasswordModal.module.css';

const ChangePasswordModal = (props) => {
    const { openModal, toggleModal } = props;
    const oldPass = useRef();
    const newPass = useRef();
    const repeatPass = useRef();

    const getCredentials = () => {
        const email = auth.currentUser.email;
        const password = oldPass.current.value;
        const credential = EmailAuthProvider.credential(email, password);
        return credential;
    };

    const verifyPassword = () => {
        if (newPass.current.value === repeatPass.current.value) {
            return true;
        }
        return false;
    };

    const handleChangePassword = (event) => {
        event.preventDefault();
        const passwordIsOk = verifyPassword();
        if (passwordIsOk) {
            const credential = getCredentials();
            reauthenticateWithCredential(auth.currentUser, credential).then(() => {
                updatePassword(auth.currentUser, newPass.current.value).then(() => {
                    console.log("Password changed");
                }).catch(error => {
                    console.log(error.message);
                })
            }).catch(error => {
                //error.message = Firebase: Error (auth/wrong-password).
                //error.message = Firebase: Error (auth/missing-password).
                console.log(error.message);
            });
        } else {
            console.log("Passwords are not equal");
        }
    };

    return (
        <Modal open={openModal} onClick={toggleModal} header="Change your password">
            <form onSubmit={handleChangePassword} className={classes.form}>
                <label htmlFor="oldPass">
                    Old password:
                </label>
                <input type="password" ref={oldPass} name="oldPassword" id="oldPass" />
                <label htmlFor="newPass">
                    New password: 
                </label>
                <input type="password" ref={newPass} name="newPassword" id="newPass" />
                <label htmlFor="repeatedPass">
                    Repeat new password:
                </label>
                <input type="password" ref={repeatPass} name="repeatedPassword" id="repeatedPass" />
                <button className={classes["form__submitBtn"]}>change password</button>
            </form>
            <button onClick={toggleModal} className={classes["form__closeBtn"]}>go back</button>
        </Modal>
    );
};

export default ChangePasswordModal;