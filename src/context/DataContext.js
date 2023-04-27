import { createContext, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";

import { database } from "../api/database-api";

const initialData = {
    data: [],
    getUnit: (unitId) => {},
    getLesson: (unitId, lessonId) => {},
    clearData: () => {}
};

const DataContext = createContext(initialData);

export const DataContextProvider = (props) => {
    const [unitsData, setUnitsData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const unitsArr = [];
            const fetchedData = await getDocs(collection(database, "lessons"));
            fetchedData.forEach(unit => {
                unitsArr.push(unit.data());
            });
            setUnitsData(unitsArr);
        }
        fetchData();
    }, [setUnitsData]);

    const clearData = () => {
        setUnitsData(null);
    };

    const getUnit = (unitId) => {
        return unitsData.find(unit => unit.id === unitId);
    };

    const getLesson = (unitId, lessonId) => {
        const unitData = getUnit(unitId);
        return unitData.lessons.find(lesson => lesson.id === lessonId);
    };

    const ctxValue = {
        data: unitsData,
        getUnit: getUnit,
        getLesson: getLesson,
        clearData: clearData
    };

    return (
        <DataContext.Provider value={ctxValue}>
            {props.children}
        </DataContext.Provider>
    );
};

export default DataContext;