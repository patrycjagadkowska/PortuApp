import classes from './styles/Word.module.css';

const Word = ({ wordData, lang, checkAnswer, data }) => {
    const { word, id } = wordData;
    const { foundPairs, firstClicked, firstLang, wrongAnswer } = data;

    let wordClasses;

    if (foundPairs.includes(id)) {
        wordClasses = `${classes.word} ${classes.found}`;
    } else if (firstClicked === id && firstLang === lang) {
        wordClasses = `${classes.word} ${classes.clicked}`;
    } else if (wrongAnswer && lang === wrongAnswer.lang && id === wrongAnswer.id) {
        wordClasses = `${classes.word} ${classes.wrong}`;
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