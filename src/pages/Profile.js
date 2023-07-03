import { useLoaderData, useNavigate } from "react-router";
import { useContext, useEffect, useState } from "react";

import ProgressSummary from "../components/Profile/ProgressSummary";
import ProgressData from "../components/Profile/ProgressData";
import UserData from "../components/Profile/UserData";
import DataContext from "../context/DataContext";
import { auth } from "../api/auth-api";

import classes from "./styles/Profile.module.css";

const Profile = () => {
  const user = auth.currentUser;
  const [ units, setUnits ] = useState([]);
  const fetchedData = useLoaderData();
  const { data, setData } = useContext(DataContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (fetchedData === null) {
      navigate("/login");
    }
  }, [fetchedData, navigate]);

  useEffect(() => {
    if (!data || data.length === 0) {
      const unitsArray = [];
      fetchedData.forEach((unit) => {
        unitsArray.push(unit.data());
      });
      setUnits(unitsArray);
    }
  }, [fetchedData, data]);

  useEffect(() => {
    setData(units);
  }, [units, setData]);

  return (
    <div className={classes.profile}>
      <h1>Welcome, {user.displayName ? user.displayName : "User"}!</h1>
      {data && data.length > 0 && (
        <>
          <UserData />
          <ProgressSummary />
          <ProgressData />
        </>
      )}
    </div>
  );
};

export default Profile;