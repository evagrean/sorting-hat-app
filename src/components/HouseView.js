import React from "react";
import HousematesList from "./HousematesList";
import GoBackButton from "./GoBackButton";
import { Link } from "react-router-dom";

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
    <div className={`house-view sm:mx-5 sm:my-5 lg:mx-5 lg:my-10 lg:flex lg:flex-col lg:max-h-screen bg-center bg-no-repeat bg-cover bg-opacity-80 ${bgColor}`}>
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="lg:ml-10 lg:mt-10">
          <p className={`mt-10 ml-5 lg:m-0 text-center lg:text-left  text-5xl font-semibold ${textColor}`}>{house}!</p>

          <p className={`m-5 lg:m-0 lg:mt-3 text-center text-2xl font-semibold tracking-wide ${textColor}`}>Meet some of your housemates:</p>
        </div>
        <div className="hidden lg:flex lg:h-full lg:justify-end lg:mt-10 mr-10">
          <Link to="/">
            <GoBackButton goBackToCeremony={goBackToCeremony} textColor={textColor} bgColor={bgColor} />
          </Link>
        </div>
      </div>
      <HousematesList housemates={housemates} bgColor={bgColor} textColor={textColor} />
      <div className="lg:hidden flex justify-center mb-10">
        <GoBackButton goBackToCeremony={goBackToCeremony} textColor={textColor} bgColor={bgColor} />
      </div>
    </div>
  );
};

export default HouseView;
