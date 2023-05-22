import { useRef, useState } from 'react';

import classes from './styles/Sentence.module.css';

const Sentence = (props) => {
    const { sentence, correct, onCorrect } = props;
    const inputRef = useRef();
    const [ wrongAnswer, setWrongAnswer ] = useState(false);

    const dividedSentence = sentence.split('$');

    const checkAnswer = (event) => {
        setWrongAnswer(false);
        if(inputRef.current.value === correct) {
            onCorrect();
            inputRef.current.disabled = true;
        }
    };

    const checkWrongAnswer = (event) => {
        if (inputRef.current.value !== correct) {
            setWrongAnswer(true);
        }
    }


    return (
        <li className={classes.sentence}>
            {dividedSentence[0]}<input type="text" className={wrongAnswer ? classes["sentence__wrong"] : ""} ref={inputRef} onFocus={() => setWrongAnswer(false)} onBlur={checkWrongAnswer} onChange={checkAnswer} />{dividedSentence[1]}
            {" "}
            {wrongAnswer && <span className={classes['sentence__wrong']}>Correct answer is "{correct}"</span>}
        </li>
    );
};

export default Sentence