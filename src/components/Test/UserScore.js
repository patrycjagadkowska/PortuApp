import classes from "./styles/UserScore.module.css";

const UserScore = ({ score, NUM_OF_QUESTIONS }) => {
  const isPassed = score / NUM_OF_QUESTIONS >= 0.8;

  return (
    <div className={classes.score}>
      <header className={classes["score__header"]}>
        <h3>
          Your score: {score}/{NUM_OF_QUESTIONS}
        </h3>
      </header>
      <p>
        {isPassed
          ? "Congratulations! You passed the test!"
          : "We're sorry, you didn't pass the test"}
      </p>
    </div>
  );
};

export default UserScore;