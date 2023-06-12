import Answer from './Answer'

import classes from './styles/Question.module.css';

const Question = () => {
    return (
        <div className={classes.question}>
            <header className={classes["question__header"]}><h3>Here is question</h3></header>
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