import { FiEdit } from 'react-icons/fi';

import blankProfilePicutre from '../../assets/blank-profile-picture.svg'

import classes from './styles/UserData.module.css';

const UserData = () => {

    return (
      <section className={classes.userData}>
        <h2>Your data</h2>
        <figure className={classes["userData__photo"]}>
          <img src={blankProfilePicutre} alt="blank profile" />
          <button>
            <FiEdit />
          </button>
        </figure>
        <div className={classes["userData__data"]}>
          <p>
            Name: <span className={classes["userData__data--info"]}>User</span>
          </p>
          <p>
            Email:{" "}
            <span className={classes["userData__data--info"]}>
              test@test.com
            </span>
          </p>
          <div className={classes["userData__data--actions"]}>
            <button>edit data</button>
            <button>change password</button>
          </div>
        </div>
      </section>
    );
};

export default UserData;