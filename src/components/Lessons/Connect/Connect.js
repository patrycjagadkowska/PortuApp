import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import WordsList from './WordsList';
import { useDoneExercise } from '../../../hooks/useDoneExercise';
import Modal from '../../UI/Modal';

import classes from './styles/Connect.module.css';
import modalClasses from '../../UI/styles/Modal.module.css';

const Connect = props => {
    const { pt, eng, title } = props.data;
    const [ ptShuffled, setPtShuffled ] = useState([]);
    const [ engShuffled, setEngShuffled ] = useState([]);
    const [ foundPairs, setFoundPairs ] = useState([]);
    const [ firstClicked, setFirstClicked ] = useState();
    const [ firstLang, setFirstLang ] = useState();
    const [ wrongAnswer, setWrongAnswer ] = useState();
    const [ openModal, setOpenModal ] = useState(false);
    const { unitId, lessonId } = useParams();
    const { updateDoneExercises, numDone } = useDoneExercise(ptShuffled.length, unitId, lessonId);

    const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    useEffect(() => {
        setEngShuffled(shuffleArray(eng));
        setPtShuffled(shuffleArray(pt));
    }, [pt, eng]);

    useEffect(() => {
      if (pt.length === numDone) {
        setOpenModal(true);
      }
    }, [pt.length, setOpenModal, numDone]);

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
            updateDoneExercises();
        }
        if(firstClicked && firstLang !== lang && firstClicked !== id) {
            setWrongAnswer({lang: lang, id: id});
            setTimeout(() => setWrongAnswer(undefined), 3000);
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
            wrongAnswer={wrongAnswer}
          />
          <WordsList
            list={engShuffled}
            lang="eng"
            checkClickedWord={checkClickedWord}
            foundPairs={foundPairs}
            firstClicked={firstClicked}
            firstLang={firstLang}
            wrongAnswer={wrongAnswer}
          />
        </div>
        {openModal && <Modal open={openModal} header="Well done" onClick={() => setOpenModal(false)}>
        <div className={modalClasses["modal__content"]}>
              All your answers are correct! You can go back and choose next
              lesson or check again your answers.
              <div className={modalClasses["modal__actions"]}>
                <Link to="/learn">Go back</Link>
                <button onClick={() => setOpenModal(false)}>
                  Check your answers again
                </button>
              </div>
            </div>
        </Modal>}
      </div>
    );
};

export default Connect;