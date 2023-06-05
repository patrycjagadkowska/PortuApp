import { useContext } from "react";

import UserProgressContext from "../../context/UserProgressContext";
import DataContext from "../../context/DataContext";

import classes from "./styles/ProgressSummary.module.css";

const ProgressSummary = () => {
  const { progressData } = useContext(UserProgressContext);
  const { data } = useContext(DataContext);

  let totalLessons = 0;
  let lessonsCompleted = 0;
  let totalUnits = data.length;
  let unitsCompleted = 0;

  for (let i = 0; i < data.length; i++) {
    totalLessons = totalLessons + data[i]["lessons"].length;
  }

  for (let key in progressData) {
  // here you have to add validation if test is completed
    const unitLessons = data.find(unit => {
      return unit.id === key;
    });
    const totalLessons = unitLessons && unitLessons.lessons.length;
    const numCompletedLessons = Object.keys(progressData[key]).length;
    lessonsCompleted = lessonsCompleted + numCompletedLessons;
    if (totalLessons === numCompletedLessons) {
      unitsCompleted++;
    }
  }


  return (
    <section className={classes.progressSummary}>
      <h2>Your progress</h2>
      <div className={classes["progressSummary__allCompleted"]}>
        <h3>Total completed: </h3>
        <ul>
          <li>{unitsCompleted} unit / {totalUnits} units</li>
          <li>{lessonsCompleted} lesson / {totalLessons} lessons</li>
        </ul>
      </div>
    </section>
  );
};

export default ProgressSummary;
