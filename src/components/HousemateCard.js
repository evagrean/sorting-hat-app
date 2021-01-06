import React from "react";

const HousemateCard = ({ housemateDetails }) => {
  return (
    <div class="my-1 px-1 lg:w-1/3  ">
      <div className="housemate-card overflow-hidden rounded shadow-lg bg-white">
        <img src={housemateDetails.image} alt="housemate portrait" className="block h-full w-full" />
        <header className="flex items-center justify-between  leading-tight p-2 md:p-4">
          <h1 className="text-lg">{housemateDetails.name}</h1>
        </header>
      </div>
    </div>
  );
};

export default HousemateCard;

// w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3
// items-center justify-between
