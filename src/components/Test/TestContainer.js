import Question from './Question';

import classes from './styles/TestContainer.module.css';

const TestContainer = ({questions}) => {
    return (
        <div className={classes["test__container"]}>
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
        </div>
    );
};

export default TestContainer;

