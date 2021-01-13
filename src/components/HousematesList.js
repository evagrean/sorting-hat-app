import React from "react";
import HousemateCard from "./HousemateCard";

const HousematesList = ({ housemates, bgColor, textColor }) => {
  console.log(housemates);

  return (
    <div className="housemates-list">
      {housemates.map((housemate) => (
        <HousemateCard housemateDetails={housemate} bgColor={bgColor} textColor={textColor} />
      ))}
    </div>
  );
};

// return (
//   <div className="container my-12 mx-auto px-4 md:px-12">

//         {housemates.map((housemate) => (
//           <HousemateCard key={housemates.indexOf(housemate)} housemateDetails={housemate} />
//         ))}

//   </div>
// );

export default HousematesList;
