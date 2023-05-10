import Word from './Word';

import classes from './styles/WordsList.module.css';

const WordsList = props => {
    const { list, lang } = props;

    const shuffleArray = (array) => {
        return array.sort(() => Math.random - 0.5);
    };

    const wordsList = shuffleArray(list.map(word => <Word checkAnswer={() => {}} word={word} key={`${lang}/${word.id}`} />));

    return (
        <ul className={classes.wordsList}>
            {wordsList}
        </ul>
    );
};

export default WordsList;