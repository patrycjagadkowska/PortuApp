import classes from './styles/ProgressSummary.module.css';

const ProgressSummary = () => {
    return (
      <section className={classes.progressSummary}>
        <h2>Your progress</h2>
          <div className={classes["progressSummary__allCompleted"]}>
            <h3>Total completed: </h3>
            <ul>
              <li>1 unit / 2 units</li>
              <li>9 lesson / 10 lessons</li>
            </ul>
          </div>
      </section>
    );
};

export default ProgressSummary;