import Word from './Word';

import classes from './styles/WordsList.module.css';

const WordsList = props => {
    const { checkClickedWord, data, lang } = props;

    const checkAnswer = (id) => {
        checkClickedWord(id, lang);
    };

    const wordsList =
      lang === "pt"
        ? data.ptShuffled.map((word) => (
            <Word
              checkAnswer={checkAnswer}
              lang={lang}
              word={word}
              key={`${lang}/${word.id}`}
              data={data}
            />
          ))
        : data.engShuffled.map((word) => (
            <Word
              checkAnswer={checkAnswer}
              lang={lang}
              word={word}
              key={`${lang}/${word.id}`}
              data={data}
            />
          ));

    return (
        <ul className={classes["words-list"]}>
            {wordsList}
        </ul>
    );
};

export default WordsList;