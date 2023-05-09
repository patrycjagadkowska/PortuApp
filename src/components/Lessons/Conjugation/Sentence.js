import { useRef } from 'react';

import classes from './styles/Sentence.module.css';

const Sentence = (props) => {
    const { sentence, correct } = props;
    const inputRef = useRef();

    const dividedSentence = sentence.split('$');

    const checkAnswer = () => {
        if(inputRef.current.value === correct) {
            alert('Good answer!');
        }
    };

    return (
        <li className={classes.sentence}>
            {dividedSentence[0]}<input type="text" ref={inputRef} onChange={checkAnswer} />{dividedSentence[1]}
        </li>
    );
};

export default Sentence