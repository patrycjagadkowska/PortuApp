import ProgressSummary from '../components/Profile/ProgressSummary';
import ProgressData from '../components/Profile/ProgressData';
import UserData from '../components/Profile/UserData';
import { auth } from '../api/auth-api';

import classes from './styles/Profile.module.css';

const Profile = () => {
    const user = auth.currentUser;

    return (
        <div className={classes.profile}>
            <h1>Welcome, {user.displayName ? user.displayName : "User"}!</h1>
            <UserData />
            <ProgressSummary />
            <ProgressData />
        </div>
    );
};

export default Profile;