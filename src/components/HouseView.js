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
      <div className={`mt-10 house-view flex flex-col items-center ${bgColor}`}>
        <div>
          <p className={`text-3xl p-5 text-center ${textColor}`}>Congrats, you are a {house}</p>
        </div>
        <p className={`text-3xl ${textColor}`}>Meet some of your housemates:</p>
        <HousematesList housemates={housemates} />
      </div>

      <GoBackButton goBackToCeremony={goBackToCeremony} />
    </div>
  );
};

export default HouseView;
