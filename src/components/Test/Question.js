import Answer from './Answer'

import classes from './styles/Question.module.css';

const Question = () => {
    return (
        <div className={classes.question}>
            <h3>Here is question</h3>
            <div className={classes["question__answers"]}>
                <Answer />
                <Answer />
                <Answer />
                <Answer />
            </div>
        </div>
    );
};

export default Question;