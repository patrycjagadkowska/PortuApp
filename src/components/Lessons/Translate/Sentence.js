import { useRef } from 'react';

import classes from './styles/Sentence.module.css';

const Sentence = props => {
    const  { translate, translated, id, onCorrect } = props;
    const textareaRef = useRef();

    const checkAnswer = () => {
        if (textareaRef.current.value === translated) {
            onCorrect();
        } else {
            alert("Wrong answer!");
        }
    };

    return (
      <li className={classes.sentence}>
        <label htmlFor={id}>{translate}</label>
        <textarea
          id={id}
          name={id}
          onBlur={checkAnswer}
          ref={textareaRef}
          autoComplete="off"
          autoCorrect="off"
          spellCheck="off"
        />
      </li>
    );
};

export default Sentence;