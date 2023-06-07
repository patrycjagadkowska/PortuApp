import { createContext, useState } from "react";

const initialData = {
    data: [],
    getUnit: (unitId) => {},
    getLesson: (unitId, lessonId) => {},
    clearData: () => {}
};

const DataContext = createContext(initialData);

export const DataContextProvider = (props) => {
    const [unitsData, setUnitsData] = useState();

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