import { useState, useEffect, useReducer, useCallback } from "react";
import { useParams } from "react-router";

import WordsList from "./WordsList";
import { useDoneExercise } from "../../../hooks/useDoneExercise";
import LessonCompletedModal from '../LessonCompletedModal';
import { reducer } from "./reducerFn";

import classes from "./styles/Connect.module.css";

const initialState = {
  ptShuffled: [],
  engShuffled: [],
  foundPairs: [],
  firstClicked: undefined,
  firstLang: undefined,
  wrongAnswer: undefined,
};

const Connect = (props) => {
  const { pt, eng, title } = props.data;
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    foundPairs,
    firstClicked,
    firstLang,
    wrongAnswer,
  } = state;
  const [openModal, setOpenModal] = useState(false);
  const { unitId, lessonId } = useParams();
  const [numOfExercises, setNumOfExercises] = useState();
  const { updateDoneExercises, numDone } = useDoneExercise(
    numOfExercises,
    unitId,
    lessonId
  );

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const toggleModal = useCallback((bool) => {
    setOpenModal(bool);
  }, [setOpenModal]);

  useEffect(() => {
    dispatch({
      type: "set_arrays",
      pt: shuffleArray(pt),
      eng: shuffleArray(eng),
    });
    setNumOfExercises(pt.length);
  }, [pt, eng, setNumOfExercises]);

  const handleShowModal = useCallback(() => {
    setOpenModal(true);
  }, [setOpenModal]);

  useEffect(() => {
    if (numOfExercises === numDone && numOfExercises !== 0) {
      handleShowModal();
    }
  }, [numOfExercises, handleShowModal, numDone]);

  useEffect(() => {
    if (wrongAnswer) {
      const timer = setTimeout(() => {
        dispatch({ type: "clear_wrong_answer" });
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [wrongAnswer]);

  const checkClickedWord = (id, lang) => {
    if (foundPairs.includes(id)) {
      return;
    }
    if (!firstClicked) {
      dispatch({ type: "first_clicked", id: id, lang: lang });
    }
    if (firstClicked && firstClicked === id && firstLang === lang) {
      dispatch({ type: "click_the_same" });
    }
    if (firstClicked && firstClicked !== id && firstLang === lang) {
      dispatch({ type: "click_another", id: id });
    }
    if (firstClicked && firstLang !== lang && firstClicked === id) {
      dispatch({ type: "found_pair", id: id });
      updateDoneExercises();
    }
    if (firstClicked && firstLang !== lang && firstClicked !== id) {
      dispatch({ type: "wrong_answer", id: id, lang: lang });
    }
  };

  return (
    <div className={classes.connect}>
      <h2>{title}</h2>
      <div className={classes["connect__lists"]}>
        <WordsList lang="pt" data={state} checkClickedWord={checkClickedWord} />
        <WordsList
          lang="eng"
          data={state}
          checkClickedWord={checkClickedWord}
        />
      </div>
      {openModal && <LessonCompletedModal openModal={openModal} toggleModal={toggleModal} />}
    </div>
  );
};

export default Connect;