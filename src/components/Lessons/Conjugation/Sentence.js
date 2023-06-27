import { useRef, useState } from 'react';

import classes from './styles/Sentence.module.css';

const Sentence = ({ sentence, correct, onCorrect }) => {
    const inputRef = useRef();
    const [ disabled, setDisabled ] = useState(false);
    const [ wrongAnswer, setWrongAnswer ] = useState(false);

    const dividedSentence = sentence.split('$');

    const checkAnswer = () => {
        setWrongAnswer(false);
        if(inputRef.current.value === correct) {
            onCorrect();
            setDisabled(true);
        }
    };

    const checkWrongAnswer = () => {
        if (inputRef.current.value !== correct) {
            setWrongAnswer(true);
        }
    }


    return (
      <li className={classes.sentence}>
        {dividedSentence[0]}
        <input
          disabled={disabled}
          type="text"
          className={wrongAnswer ? classes["sentence__wrong"] : ""}
          ref={inputRef}
          onFocus={() => setWrongAnswer(false)}
          onBlur={checkWrongAnswer}
          onChange={checkAnswer}
        />
        {dividedSentence[1]}{" "}
        {wrongAnswer && (
          <span className={classes["sentence__wrong"]}>
            Correct answer is "{correct}"
          </span>
        )}
      </li>
    );
};

export default Sentence;