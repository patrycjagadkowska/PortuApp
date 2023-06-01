import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';

import Panel from '../components/Learn/Panel';
import LoadingSpinner from '../components/UI/LoadingSpinner';

import classes from './styles/Learn.module.css';

const Learn = () => {
    const fetchedData = useLoaderData();
    const [ units, setUnits ] = useState([]);
    const [ showSpinner, setShowSpinner ] = useState(false);

    useEffect(() => {
        setShowSpinner(true);
        const unitsArr = [];
        fetchedData.forEach((unit) => {
            unitsArr.push(unit.data());
        });
        setUnits(unitsArr);
        setShowSpinner(false);
    }, [fetchedData]);

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