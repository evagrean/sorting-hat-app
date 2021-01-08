import React from "react";

const HousemateCard = ({ housemateDetails, bgColor, textColor }) => {
  return (
    <div className="housemate-card">
      <div className={`outline-white rounded overflow-hidden shadow  ${bgColor}`}>
        <img src={housemateDetails.image} alt="housemate" className="w-full h-80 object-cover" />
        <div className="m-4">
          <h1 className={`font-bold ${textColor}`}>{housemateDetails.name}</h1>
        </div>
      </div>
    </div>
    // <div class="my-1 px-1 lg:w-1/3 ">
    //   <div className={`housemate-card overflow-hidden rounded shadow-lg  ${bgColor}`}>
    //     <img src={housemateDetails.image} alt="housemate portrait" className="block h-96 w-full" />
    //     <header className="flex items-center justify-betwee leading-tight p-2 md:p-4 xs:flex-col">
    //       <h1 className={`text-3xl font-medium ${textColor}`}>{housemateDetails.name}</h1>
    //     </header>
    //   </div>
    // </div>
  );
};

export default HousemateCard;

// w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3
// items-center justify-between
