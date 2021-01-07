import React from "react";
import hatImg from "../images/sorting-hat-owl.png";

const HatImage = () => {
  return (
    <div className="hat-image ">
      <img src={hatImg} alt="sorting hat" className="w-60 h-50  animate-bounce" />
      <p className="animate-pulse text-white font-medium text-3xl text-center">sorting... </p>
    </div>
  );
};

export default HatImage;
