import React, { useState, useCallback } from "react";
import HouseView from "./HouseView";
import SortingButton from "./SortingButton";
import hatImg from "../images/sorting-hat-owl.png";

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
    // eslint-disable-next-line react/style-prop-object
    <div className="ceremony-view flex flex-col items-center font-serif">
      <p className="text-6xl text-white p-16 text-center uppercase  ">welcome to hogwarts</p>
      {isLoading ? (
        <span className="text-white text-4xl">
          <img src={hatImg} alt="sorting hat" className="h-30 w-40" />
          sorting...
        </span>
      ) : null}
      {showSortingButton ? <SortingButton fetchHouseData={fetchHouseData} /> : null}
      {houseData ? <HouseView house={houseData} housemates={housematesData} showSortingButton={showSortingButton} goBackToCeremony={goBackToCeremony} /> : null}
    </div>
  );
};

export default CeremonyView;
