import { useEffect, useState, useContext } from "react";
import { useLoaderData } from "react-router";
import { getDocs, collection } from 'firebase/firestore';

import Panel from "../components/Learn/Panel";
import DataContext from "../context/DataContext";
import { database } from "../api/database-api";

import classes from "./styles/Learn.module.css";

const Learn = () => {
  const unitsData = useLoaderData();
  const [units, setUnits] = useState([]);

  const { setData } = useContext(DataContext);

  useEffect(() => {
    const unitsArray = [];
    unitsData &&
      unitsData.forEach((unit) => {
        unitsArray.push(unit.data());
      });
    setUnits(unitsArray);
  }, [unitsData]);

  useEffect(() => {
    setData(units);
  }, [units, setData]);

  return (
    <div className={classes.learn}>
      <div className={classes.header}>
        <h1>Choose your lesson</h1>
      </div>
      <div className={classes.panels}>
        {units.length > 0 && <Panel data={units} />}
        {units.length === 0 && (
          <p>
            Something went wrong while fething data. Please refresh the page.
          </p>
        )}
      </div>
    </div>
  );
};

export default Learn;

export const loader = async () => {
  return await getDocs(collection(database, "lessons"));
};