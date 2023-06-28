import { useRef, useState } from "react";

import classes from "./styles/Sentence.module.css";

const Sentence = ({ translate, translated, id, onCorrect }) => {
  const textareaRef = useRef();
  const [wrongAnswer, setWrongAnswer] = useState(false);

  const checkAnswer = () => {
    if (textareaRef.current.value === translated) {
      textareaRef.current.disabled = true;
      onCorrect();
    } else {
      setWrongAnswer(true);
    }
  };

  return (
    <li className={classes.sentence}>
      <label htmlFor={id}>{translate}</label>
      {wrongAnswer && (
        <span className={classes["sentence__wrong"]}>
          The correct answer is "{translated}".
        </span>
      )}
      <textarea
        id={id}
        name={id}
        onBlur={checkAnswer}
        onFocus={() => setWrongAnswer(false)}
        ref={textareaRef}
        autoComplete="off"
        autoCorrect="off"
        spellCheck="off"
        className={wrongAnswer ? classes["sentence__wrong"] : ""}
        rows={2}
      />
    </li>
  );
};

export default Sentence;