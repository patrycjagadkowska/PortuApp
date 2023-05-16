import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import WordsList from './WordsList';
import { useDoneExercise } from '../../../hooks/useDoneExercise';

import classes from './styles/Connect.module.css';

const Connect = props => {
    const { pt, eng, title } = props.data;
    const [ ptShuffled, setPtShuffled ] = useState([]);
    const [ engShuffled, setEngShuffled ] = useState([]);
    const [ foundPairs, setFoundPairs ] = useState([]);
    const [ firstClicked, setFirstClicked ] = useState();
    const [ firstLang, setFirstLang ] = useState();
    const { unitId, lessonId } = useParams();
    const updateDoneExercise = useDoneExercise(ptShuffled.length, unitId, lessonId);

    const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    useEffect(() => {
        setEngShuffled(shuffleArray(eng));
        setPtShuffled(shuffleArray(pt));
    }, [pt, eng]);

   const checkClickedWord = (id, lang) => {
        if(foundPairs.includes(id)) {
            return;
        }
        if(!firstClicked) {
            setFirstClicked(id);
            setFirstLang(lang);
        }
        if(firstClicked && firstClicked === id && firstLang === lang) {
            setFirstClicked(undefined);
            setFirstLang(undefined);
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
            updateDoneExercise();
        }
        if(firstClicked && firstLang !== lang && firstClicked !== id) {
            alert("Wrong answer!");
        }
   }

    return (
      <div className={classes.connect}>
        <h3>{title}</h3>
        <div className={classes["connect__lists"]}>
          <WordsList
            list={ptShuffled}
            lang="pt"
            checkClickedWord={checkClickedWord}
            foundPairs={foundPairs}
            firstClicked={firstClicked}
            firstLang={firstLang}
          />
          <WordsList
            list={engShuffled}
            lang="eng"
            checkClickedWord={checkClickedWord}
            foundPairs={foundPairs}
            firstClicked={firstClicked}
            firstLang={firstLang}
          />
        </div>
      </div>
    );
};

export default Connect;