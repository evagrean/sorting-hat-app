import React from "react";

const HousemateCard = ({ housemateDetails, bgColor, textColor }) => {
  return (
    <div className={`outline-white housemate-card my-5 sm:m-0 rounded overflow-hidden shadow h-full  ${bgColor}`}>
      <img src={housemateDetails.image} alt="housemate" className="w-full h-full sm:h-96 object-cover" />
      <div className="outline-white m-4">
        <h1 className={`text-xl font-bold ${textColor}`}>{housemateDetails.name}</h1>
      </div>
    </div>
  );
};

export default HousemateCard;
