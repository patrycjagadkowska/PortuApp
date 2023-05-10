import Word from './Word';

import classes from './styles/WordsList.module.css';

const WordsList = props => {
    const { list, lang, checkClickedWord } = props;

    const checkAnswer = (id) => {
        checkClickedWord(id, lang);
    };

    const wordsList = list.map(word => <Word checkAnswer={checkAnswer} word={word} key={`${lang}/${word.id}`} />);

    return (
        <ul className={classes.wordsList}>
            {wordsList}
        </ul>
    );
};

export default WordsList;