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
    <div className={`house-view bg-center bg-no-repeat bg-cover ${bgColor} bg-opacity-80 px-10`}>
      <div className="  py-6">
        <p className={`text-8xl font-semibold tracking-wide ${textColor}`}>{house}!</p>

        <p className={`text-3xl font-semibold tracking-wide pt-5  ${textColor}`}>Meet some of your housemates:</p>
      </div>
      <HousematesList housemates={housemates} bgColor={bgColor} textColor={textColor} />

      <div className="flex justify-end">
        <GoBackButton goBackToCeremony={goBackToCeremony} textColor={textColor} />
      </div>
    </div>
  );
};

export default HouseView;
