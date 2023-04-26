import { collection, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';

import Panel from '../components/Learn/Panel';
import { database } from '../api/database-api';

import classes from './styles/Learn.module.css';

const Learn = () => {
    const [units, setUnits] = useState();
    useEffect(() => {
        const getUnits = async () => {
            const unitsArr = [];
            await getDocs(collection(database, "lessons"))
            .then(unitsData => {
                unitsData.forEach(unit => {
                    unitsArr.push(<Panel unit={unit} />);
                });
                setUnits(unitsArr);
            })
            .catch(err => console.log(err));
        };
        getUnits();
    }, []);
    console.log(units);
    return (
        <div>
            <div className={classes.header}>
                <h1>Choose your lesson</h1>
            </div>
            <div className={classes.panels}>
                {units && units}
            </div>
        </div>
    );
};

export default Learn;