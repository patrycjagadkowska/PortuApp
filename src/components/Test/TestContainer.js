import { useContext, useState, useEffect } from 'react';

import Question from './Question';
import DataContext from '../../context/DataContext';

import classes from './styles/TestContainer.module.css';

const TestContainer = ({ unitId }) => {
    const { data } = useContext(DataContext);
    const [ questions, setQuestions ] = useState([]);

    useEffect(() => {
        const test = data.find((unit) => unit.id === unitId)?.test || [];
        const questionsArray = test.map((questionData) => {
           return <Question questionData={questionData} key={questionData.id} />
        });
        setQuestions(questionsArray);
    }, [data, unitId]);

    return (
        <div className={classes["test__container"]}>
            {questions}
        </div>
    );
};

export default TestContainer;