import classes from './styles/Answer.module.css';

const Answer = ({ answerData, index, checkAnswer, id, correctClass }) => {
    return (
        <button className={`${classes.answer} ${correctClass}`} onClick={(event) => {checkAnswer(event, index)}} id={id}>
            <p>
                {answerData}
            </p>
        </button>
    );
};

export default Answer;