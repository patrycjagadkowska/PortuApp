import { useState, useEffect, useContext, useCallback } from "react";

import UserProgressContext from "../context/UserProgressContext";

export const useDoneExercise = (NUM_OF_EXERCIES, unitId, lessonId) => {
    const [ numDone, setNumDone ] = useState(0);
    const userCtx = useContext(UserProgressContext);

    const updateData = useCallback(() => {
        userCtx.updateData(unitId, lessonId, true);
        userCtx.fetchUserData(userCtx.userId);
    }, [userCtx, unitId, lessonId]);

    useEffect(() => {
        if (numDone === NUM_OF_EXERCIES) {
            updateData();
        }
    }, [numDone, NUM_OF_EXERCIES, updateData]);

    return {
      updateDoneExercises: () => setNumDone((num) => num + 1),
      numDone
    };
};