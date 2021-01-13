import React from "react";
import HousematesList from "./HousematesList";
import GoBackButton from "./GoBackButton";

const HouseView = ({ house, housemates, goBackToCeremony }) => {
  const getHouseColors = () => {
    let textColor;
    let bgColor;
    if (house === "Slytherin") {
      textColor = "text-slytherin-green";
      bgColor = "bg-slytherin-silver";
    } else if (house === "Gryffindor") {
      textColor = "text-gryffindor-red";
      bgColor = "bg-gryffindor-gold";
    } else if (house === "Hufflepuff") {
      textColor = "text-hufflepuff-black";
      bgColor = "bg-hufflepuff-yellow";
    } else if (house === "Ravenclaw") {
      textColor = "text-ravenclaw-blue";
      bgColor = "bg-ravenclaw-bronze";
    }
    return { textColor, bgColor };
  };

  let { textColor, bgColor } = getHouseColors();

  return (
    <div className={`outline-white house-view sm:mx-5 sm:my-5 bg-center bg-no-repeat bg-cover bg-opacity-80 ${bgColor}`}>
      <div className="outline-white">
        <p className={`outline-white mt-10 mx-5 text-center text-5xl font-semibold ${textColor}`}>{house}!</p>

        <p className={`outline-white m-5 text-center text-2xl font-semibold tracking-wide ${textColor}`}>Meet some of your housemates:</p>
      </div>
      <HousematesList housemates={housemates} bgColor={bgColor} textColor={textColor} />

      <div className="outline-white flex justify-center my-10">
        <GoBackButton goBackToCeremony={goBackToCeremony} textColor={textColor} bgColor={bgColor} />
      </div>
    </div>
  );
};

export default HouseView;
