import { createContext, useState } from "react";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";

import { database } from "../api/database-api";

const initialData = {
    userId: '',
    fetchUserData: (userId) => {},
    progressData: [],
    updateData: (unitId, lessonId, value) => {}
};

const UserProgressContext = createContext(initialData);

export const UserProgressContextProvider = (props) => {
    const [ progressData, setProgressData ] = useState([]);
    const [ userId, setUserId ] = useState('');

    const fetchUserData = async (id) => {
        setUserId(id);
        const userRef = doc(database, "users", id);
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
            setProgressData(docSnap.data());
        }
    }

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

    const ctxValue = {
        userId: userId,
        fetchUserData: fetchUserData,
        progressData: progressData,
        updateData: updateData
    };

    return (
        <UserProgressContext.Provider value={ctxValue}>
            {props.children}
        </UserProgressContext.Provider>
    );
};

export default UserProgressContext;