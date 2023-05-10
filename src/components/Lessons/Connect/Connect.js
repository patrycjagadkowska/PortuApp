import { useState, useEffect } from 'react';

import WordsList from './WordsList';

import classes from './styles/Connect.module.css';

const Connect = props => {
    const { pt, eng, title } = props.data;
    const [ ptShuffled, setPtShuffled ] = useState([]);
    const [ engShuffled, setEngShuffled ] = useState([]);
    const [ foundPairs, setFoundPairs ] = useState([]);
    const [ firstClicked, setFirstClicked ] = useState();
    const [ firstLang, setFirstLang ] = useState();

    const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    useEffect(() => {
        setEngShuffled(shuffleArray(eng));
        setPtShuffled(shuffleArray(pt));
    }, []);

   const checkClickedWord = (id, lang) => {
        if(foundPairs.includes(id)) {
            return;
        }
        if(!firstClicked) {
            setFirstClicked(id);
            setFirstLang(lang);
        }
        if(firstClicked && firstClicked !== id && firstLang === lang) {
            setFirstClicked(id);
        }
        if(firstClicked && firstLang !== lang && firstClicked === id) {
            const copiedArray = [...foundPairs];
            copiedArray.push(id);
            setFoundPairs(copiedArray);
            setFirstLang(undefined);
            setFirstClicked(undefined);
        }
        if(firstClicked && firstLang !== lang && firstClicked !== id) {
            alert("Wrong answer!");
        }
   }

    return (
        <div className={classes.connect}>
            <h3>{title}</h3>
            <div className={classes["connect__lists"]}>
                <WordsList list={ptShuffled} lang="pt" checkClickedWord={checkClickedWord} />
                <WordsList list={engShuffled} lang="eng" checkClickedWord={checkClickedWord} />
            </div>
        </div>
    );
};

export default Connect;