import React from "react";
import HousemateCard from "./HousemateCard";

const HousematesList = ({ housemates }) => {
  return (
    <div className="housemates-list">
      {housemates.map((housemate) => (
        <HousemateCard key={housemates.indexOf(housemate)} housemateDetails={housemate} />
      ))}
    </div>
  );
};

export default HousematesList;
