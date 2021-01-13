import React from "react";

const GoBackButton = ({ goBackToCeremony, textColor, bgColor }) => {
  return (
    <button className={`outline-white back-btn flex items-baseline justify-center p-3 uppercase text-2xl font-bold hover:bg-opacity-60 rounded-md shadow-sm ${textColor} ${bgColor}`} onClick={goBackToCeremony}>
      <span className="outline-white text-4xl font-bold">&#8592;</span>
      <span className="outline-white">back to ceremony</span>
    </button>
  );
};

export default GoBackButton;
