import classes from './styles/FlashcardExercise.module.css';

const FlashcardExercise = (props) => {
    const { question, answers, correct } = props.data;
    const checkAnswer = event => {
        if (event.target.textContent === correct) {
            alert('Correct answer!');
        } else {
            alert('Wrong answer!');
        }
    };

    return <div className={classes.flashcardExercise}>
        <div className={classes['flashcardExercise__question']}>
            {question}
            </div>
        <div className={classes['flashcardExercise__answer']} onClick={checkAnswer}>
            {answers[0]}
        </div>
        <div className={classes['flashcardExercise__answer']} onClick={checkAnswer}>
            {answers[1]}
        </div>
    </div>
};

export default FlashcardExercise;