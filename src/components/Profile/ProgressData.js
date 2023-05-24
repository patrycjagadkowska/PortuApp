import UnitProgress from './UnitProgress';

import classes from './styles/ProgressData.module.css';

const ProgressData = () => {
    return (
      <section className={classes.progressData}>
        <h2>Your progress</h2>
        <div className={classes["progressData__allCompleted"]}>
          <h3>Total completed: </h3>
          <ul>
            <li>1 unit / 2 units</li>
            <li>9 lesson / 10 lessons</li>
          </ul>
        </div>
        <ul className={classes["progressData__unitsList"]}>
          <UnitProgress unitId="01" />
          <UnitProgress unitId="02" />
        </ul>
      </section>
    );
};

export default ProgressData;