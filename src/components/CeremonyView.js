import React, { useState, useCallback } from "react";
import HouseView from "./HouseView";
import SortingButton from "./SortingButton";
import axios from "axios";

const CeremonyView = () => {
  const [houseData, setHouseData] = useState("");
  const [housematesData, setHousematesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSortingButton, setShowSortingButton] = useState(true);

  // maybe later also set const [error, setError] = useState("");

  const fetchHouseData = useCallback(async () => {
    const endpoint = `https://lp4o7ya0sk.execute-api.eu-central-1.amazonaws.com/dev/house`;
    let mounted = true;
    try {
      setShowSortingButton(false);
      setIsLoading(true);

      const res = await axios(endpoint);
      console.log(res.data);
      setTimeout(() => {
        setHouseData(res.data.randomHouse);
        setHousematesData(res.data.housemates);
        if (mounted) {
          setIsLoading(false);
        }
      }, 2000);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
    // cleanup function after axios request
    return function cleanup() {
      mounted = false;
    };
  }, []);

  // For now, going back from HouseView to Ceremony is handled by state change - should change after added routing
  const goBackToCeremony = () => {
    setHouseData("");
    setHousematesData([]);
    setShowSortingButton(true);
  };

  return (
    <div className="ceremony-view">
      <h1>WELCOME TO THE SORTING CEREMONY</h1>
      {isLoading ? <p>sorting...</p> : null}
      {showSortingButton ? <SortingButton fetchHouseData={fetchHouseData} /> : null}
      {houseData ? <HouseView house={houseData} housemates={housematesData} showSortingButton={showSortingButton} goBackToCeremony={goBackToCeremony} /> : null}
    </div>
  );
};

export default CeremonyView;
