import React from "react";

const GoBackButton = ({ goBackToCeremony, textColor, bgColor }) => {
  return (
    <button className={`back-btn flex items-center justify-center p-3 uppercase text-2xl font-bold bg-opacity-50 hover:bg-opacity-60 rounded-lg shadow-sm ${textColor} ${bgColor}`} onClick={goBackToCeremony}>
      <span className="mr-2 text-4xl font-bold">&#8592;</span>
      <span className="">back to ceremony</span>
    </button>
  );
};

export default GoBackButton;
