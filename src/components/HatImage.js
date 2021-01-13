import React from "react";
import hatImg from "../images/sorting-hat.png";

const HatImage = () => {
  return (
    <div className="outline-white hat-img mt-20">
      <img src={hatImg} alt="sorting hat" className="w-40 h-30 animate-bounce" />
      <p className=" text-pink-900 font-bold text-4xl text-center animate-pulse">sorting... </p>
    </div>
  );
};

export default HatImage;
