import classes from './styles/FlashcardExercise.module.css';

const FlashcardExercise = (props) => {
    const { question, answers, correct } = props.data;
    return <div className={classes.flashcardExercise}>
        <div className={classes['flashcardExercise__question']}>
            {question}
            </div>
        <div className={classes['flashcardExercise__answer']}>
            {answers[0]}
        </div>
        <div className={classes['flashcardExercise__answer']}>
            {answers[1]}
        </div>
    </div>
};

export default FlashcardExercise;