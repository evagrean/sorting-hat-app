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
    } else {
      textColor = "text-ravenclaw-blue";
      bgColor = "bg-ravenclaw-bronze";
    }
    return { textColor, bgColor };
  };

  let { textColor, bgColor } = getHouseColors();

  return (
    <div className="house-view">
      <div className={`mt-10 flex flex-col place-items-start ${bgColor} bg-opacity-50`}>
        <div>
          <p className={`text-3xl pt-5 px-4 ${textColor}`}>Congrats, you are a {house}</p>
        </div>
        <p className={`text-3xl pt-5 px-4 ${textColor}`}>Meet some of your housemates:</p>
        <HousematesList housemates={housemates} />
        <GoBackButton goBackToCeremony={goBackToCeremony} bgColor={bgColor} />
      </div>
    </div>
  );
};

export default HouseView;
