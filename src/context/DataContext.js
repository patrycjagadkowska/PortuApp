import { createContext, useState } from "react";

const initialData = {
  data: [],
  setData: (data) => {},
  clearData: () => {},
};

const DataContext = createContext(initialData);

export const DataContextProvider = ({ children }) => {
  const [unitsData, setUnitsData] = useState();

  const setData = (data) => {
    setUnitsData(data);
  };

  const clearData = () => {
    setUnitsData(null);
  };

  const ctxValue = {
    data: unitsData,
    setData,
    clearData,
  };

  return (
    <DataContext.Provider value={ctxValue}>{children}</DataContext.Provider>
  );
};

export default DataContext;