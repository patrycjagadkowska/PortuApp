import Word from './Word';

import classes from './styles/WordsList.module.css';

const WordsList = props => {
    const { list, lang, checkClickedWord, foundPairs, firstClicked, firstLang } = props;

    const checkAnswer = (id) => {
        checkClickedWord(id, lang);
    };

    const wordsList = list.map((word) => (
      <Word
        checkAnswer={checkAnswer}
        word={word}
        lang={lang}
        key={`${lang}/${word.id}`}
        foundPairs={foundPairs}
        firstClicked={firstClicked}
        firstLang={firstLang}
      />
    ));

    return (
        <ul className={classes["words-list"]}>
            {wordsList}
        </ul>
    );
};

export default WordsList;