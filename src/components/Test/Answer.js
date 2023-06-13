import classes from './styles/Answer.module.css';

const Answer = ({ answerData }) => {
    return (
        <div className={classes.answer}>
            <p>
                {answerData}
            </p>
        </div>
    );
};

export default Answer;