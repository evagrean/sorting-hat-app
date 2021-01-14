import React from "react";
import hatImg from "../images/sorting-hat.png";

const HatImage = () => {
  return (
    <div className="hat-img mt-20 sm:mt-30 lg:mt-36">
      <img src={hatImg} alt="sorting hat" className="w-40 h-30 animate-bounce" />
      <p className=" text-white font-semibold text-4xl text-center animate-pulse">sorting... </p>
    </div>
  );
};

export default HatImage;
