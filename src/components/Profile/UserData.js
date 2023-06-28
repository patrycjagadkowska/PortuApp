import { FiEdit } from "react-icons/fi";
import { useState } from "react";

import blankProfilePicutre from "../../assets/blank-profile-picture.svg";
import UpdatePhotoModal from "./UpdateDataModals/UpdatePhotoModal";
import UpdateDataModal from "./UpdateDataModals/UpdateDataModal";
import { auth } from "../../api/auth-api";
import ChangePasswordModal from "./UpdateDataModals/ChangePasswordModal";
import CustomButton from "../UI/CustomButton";

import classes from "./styles/UserData.module.css";

const UserData = () => {
  const [openPhotoModal, setOpenPhotoModal] = useState(false);
  const [openDataModal, setOpenDataModal] = useState(false);
  const [openPasswordModal, setOpenPasswordModal] = useState(false);

  const userPhoto = auth.currentUser.photoURL
    ? auth.currentUser.photoURL
    : blankProfilePicutre;

  const togglePhotoModal = (bool) => {
    setOpenPhotoModal(bool);
  };

  const toggleDataModal = (bool) => {
    setOpenDataModal(bool);
  };

  const togglePasswordModal = (bool) => {
    setOpenPasswordModal(bool);
  };

  return (
    <section className={classes.userData}>
      <h2>Your data</h2>
      <figure className={classes["userData__photo"]}>
        <img src={userPhoto} alt="blank profile" />
        <button onClick={() => togglePhotoModal(true)}>
          <FiEdit />
        </button>
      </figure>
      <div className={classes["userData__data"]}>
        <p>
          Name:{" "}
          <span className={classes["userData__data--info"]}>
            {auth.currentUser.displayName}
          </span>
        </p>
        <p>
          Email:{" "}
          <span className={classes["userData__data--info"]}>
            {auth.currentUser.email}
          </span>
        </p>
        <div className={classes["userData__data--actions"]}>
          <CustomButton onClick={() => toggleDataModal(true)}>
            edit data
          </CustomButton>
          <CustomButton onClick={() => togglePasswordModal(true)}>
            change password
          </CustomButton>
        </div>
      </div>
      {openPhotoModal && (
        <UpdatePhotoModal
          openModal={openPhotoModal}
          toggleModal={() => togglePhotoModal(false)}
        />
      )}
      {openDataModal && (
        <UpdateDataModal
          openModal={openDataModal}
          toggleModal={() => toggleDataModal(false)}
        />
      )}
      {openPasswordModal && (
        <ChangePasswordModal
          openModal={openPasswordModal}
          toggleModal={() => togglePasswordModal(false)}
        />
      )}
    </section>
  );
};

export default UserData;