import React from "react";
import HousematesList from "./HousematesList";
import GoBackButton from "./GoBackButton";

const HouseView = ({ house, housemates, goBackToCeremony }) => {
  return (
    <div className="house-view">
      <div className="house-card">
        <h1>Congrats, you are in {house}</h1>
        <HousematesList housemates={housemates} />
      </div>
      <GoBackButton onClick={goBackToCeremony} />
    </div>
  );
};

export default HouseView;
