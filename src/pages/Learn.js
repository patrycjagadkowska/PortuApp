import { useEffect, useState, useContext } from "react";
import { useLoaderData, useNavigation } from "react-router";
import { getDocs, collection } from 'firebase/firestore';

import Panel from "../components/Learn/Panel";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import DataContext from "../context/DataContext";
import { database } from "../api/database-api";

import classes from "./styles/Learn.module.css";

const Learn = () => {
  const unitsData = useLoaderData();
  const [units, setUnits] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);

  const { setData } = useContext(DataContext);
  const { state } = useNavigation();

  useEffect(() => {
    setShowSpinner(true);
    const unitsArray = [];
    unitsData &&
      unitsData.forEach((unit) => {
        unitsArray.push(unit.data());
      });
    setUnits(unitsArray);
    setShowSpinner(false);
  }, [unitsData]);

  useEffect(() => {
    setData(units);
  }, [units, setData]);

  useEffect(() => {
    if (state === "loading") {
      setShowSpinner(true);
    }
  }, [state]);

  return (
    <div className={classes.learn}>
      <div className={classes.header}>
        <h1>Choose your lesson</h1>
      </div>
      <div className={classes.panels}>
        {showSpinner && <LoadingSpinner />}
        {!showSpinner && units.length > 0 && <Panel data={units} />}
        {!showSpinner && units.length === 0 && (
          <p>
            Something went wrong while fething data. Please refresh the page.
          </p>
        )}
      </div>
    </div>
  );
};

export default Learn;

export const fetchAllUnitsData = async () => {
  return await getDocs(collection(database, "lessons"));
};