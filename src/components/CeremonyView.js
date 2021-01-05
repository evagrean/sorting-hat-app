import React, { useState, useCallback } from "react";
import SortingButton from "./SortingButton";
import axios from "axios";

const CeremonyView = () => {
  const [houseData, setHouseData] = useState("");
  const [housematesData, setHousematesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchHouseData = useCallback(async () => {
    const endpoint = `https://lp4o7ya0sk.execute-api.eu-central-1.amazonaws.com/dev/house`;
    try {
      const res = await axios(endpoint);
      console.log(res.data);
      setHouseData(res.data.randomHouse);
      setHousematesData(res.data.housemates);
      setIsLoading(false);
    } catch (err) {
      const error = err.response.status === 404 ? "Resource not found" : "An unexpected error has occured";
      console.error(error);
      setError(error);
      setIsLoading(false);
    }
  }, []);

  return (
    <div>
      <h1>WELCOME TO HOGWARTS</h1>
      <SortingButton fetchHouseData={fetchHouseData} />
    </div>
  );
};

export default CeremonyView;
