import { useRef } from 'react';

import classes from './styles/Sentence.module.css';

const Sentence = (props) => {
    const { sentence, correct, onCorrect } = props;
    const inputRef = useRef();

    const dividedSentence = sentence.split('$');

    const checkAnswer = () => {
        if(inputRef.current.value === correct) {
            onCorrect();
        }
    };

    return (
        <li className={classes.sentence}>
            {dividedSentence[0]}<input type="text" ref={inputRef} onChange={checkAnswer} />{dividedSentence[1]}
        </li>
    );
};

export default Sentence