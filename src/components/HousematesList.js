import React from "react";
import HousemateCard from "./HousemateCard";

const HousematesList = ({ housemates, bgColor, textColor }) => {
  console.log(housemates);

  return (
    <div className="housemates-list sm:grid sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 m-10">
      {housemates.map((housemate) => (
        <HousemateCard housemateDetails={housemate} bgColor={bgColor} textColor={textColor} />
      ))}
    </div>
  );
};

export default HousematesList;
