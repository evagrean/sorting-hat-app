import React from "react";

const HousemateCard = ({ housemateDetails }) => {
  return (
    <div className="housemate-card">
      <img src={housemateDetails.image} alt="housemate portrait"></img>
      <p>{housemateDetails.name}</p>
      <p>wand: {housemateDetails.wand.wood}</p>
    </div>
  );
};

export default HousemateCard;
