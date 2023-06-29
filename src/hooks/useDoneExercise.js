import { useState, useEffect, useContext, useCallback } from "react";

import UserProgressContext from "../context/UserProgressContext";

export const useDoneExercise = (NUM_OF_EXERCIES, unitId, lessonId) => {
  const [numDone, setNumDone] = useState(0);
  const { updateData, setUserData, userId } = useContext(UserProgressContext);

  const updateUserData = useCallback(async () => {
    updateData(unitId, lessonId, true);
    setUserData(userId);
  }, [setUserData, updateData, userId, unitId, lessonId]);

  useEffect(() => {
    if (numDone === NUM_OF_EXERCIES) {
      updateUserData();
    }
  }, [numDone, NUM_OF_EXERCIES, updateUserData]);

  return {
    updateDoneExercises: () => setNumDone((num) => num + 1),
    numDone,
  };
};