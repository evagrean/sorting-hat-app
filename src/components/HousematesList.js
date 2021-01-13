import React from "react";
import HousemateCard from "./HousemateCard";

const HousematesList = ({ housemates, bgColor, textColor }) => {
  console.log(housemates);

  return (
    <div className="outline-white housemates-list m-10">
      {housemates.map((housemate) => (
        <HousemateCard housemateDetails={housemate} bgColor={bgColor} textColor={textColor} />
      ))}
    </div>
  );
};

export default HousematesList;
