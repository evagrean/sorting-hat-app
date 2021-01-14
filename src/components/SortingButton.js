import React from "react";
import hatImg from "../images/sorting-hat.png";

const SortingButton = ({ fetchHouseData }) => {
  return (
    <button className="flex flex-col items-center lg:flex-row lg:items-center sorting-btn mt-20 sm:my-60 mx-10 p-8 text-white  font-bold bg-yellow-900 bg-opacity-80 hover:bg-yellow-900 hover:bg-opacity-70 rounded-lg shadow-2xl hover:shadow-md z-10 " onClick={fetchHouseData}>
      <span className="mb-3">
        <img src={hatImg} alt="hat" className="w-20 h-25 z-0" />
      </span>
      <span className="text-2xl lg:text-3xl uppercase">put on the hat</span>
    </button>
  );
};

export default SortingButton;
