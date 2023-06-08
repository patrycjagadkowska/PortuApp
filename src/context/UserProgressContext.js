import { createContext, useState } from "react";
import { doc, setDoc, updateDoc } from "firebase/firestore";

import { database } from "../api/database-api";

const initialData = {
    userId: '',
    setUserData: (data, id) => {},
    progressData: [],
    updateData: (unitId, lessonId, value) => {},
    clearProgressData: () => {}
};

const UserProgressContext = createContext(initialData);

export const UserProgressContextProvider = (props) => {
    const [ progressData, setProgressData ] = useState([]);
    const [ userId, setUserId ] = useState('');

    const setUserData = (data, id) => {
        setProgressData(data);
        setUserId(id);
    };

    const updateData = async (unitId, lessonId, value) => {
        if (progressData.length === 0) {
            await setDoc(doc(database, "users", userId), 
            {
                [unitId]: {
                    [lessonId]: {
                        value
                    }
                }
            });
        } else {
            await updateDoc(doc(database, "users", userId), {
                [`${unitId}.${lessonId}`]: {
                    value
                }
            });
        }
    }

    const clearProgressData = () => {
        setProgressData([]);
    };

    const ctxValue = {
        userId,
        setUserData,
        progressData,
        updateData,
        clearProgressData
    };

    return (
        <UserProgressContext.Provider value={ctxValue}>
            {props.children}
        </UserProgressContext.Provider>
    );
};

export default UserProgressContext;