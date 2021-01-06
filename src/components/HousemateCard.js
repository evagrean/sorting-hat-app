import React from "react";

const HousemateCard = ({ housemateDetails }) => {
  return (
    <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <div className="housemate-card overflow-hidden rounded-lg shadow-lg">
        <img src={housemateDetails.image} alt="housemate portrait" className="block h-auto w-full" />
        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-lg">{housemateDetails.name}</h1>
        </header>
      </div>
    </div>
  );
};

export default HousemateCard;
