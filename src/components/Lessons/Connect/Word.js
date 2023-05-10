import classes from './styles/Word.module.css';

const Word = props => {
    const { word, id } = props.word;
    const { lang, checkAnswer, foundPairs, firstClicked, firstLang } = props;

    let wordClasses;

    if (foundPairs.includes(id)) {
        wordClasses = `${classes.word} ${classes.found}`;
    } else if (firstClicked === id && firstLang === lang) {
        wordClasses = `${classes.word} ${classes.clicked}`
    } else {
        wordClasses = classes.word;
    }

    const handleClick = () => {
        checkAnswer(id);
    };

    return (
        <li className={wordClasses} onClick={handleClick}>
            {word}
        </li>
    );
};

export default Word;