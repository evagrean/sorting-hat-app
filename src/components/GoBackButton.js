import React from "react";

const GoBackButton = ({ goBackToCeremony, textColor, bgColor }) => {
  return (
    <button className={`back-btn flex items-center justify-center p-3 uppercase text-2xl font-bold hover:bg-yellow-900 hover:bg-opacity-10 ${textColor}`} onClick={goBackToCeremony}>
      <span className="mr-2 text-4xl font-bold">&#8592;</span>
      <span className="">back to ceremony</span>
    </button>
  );
};

export default GoBackButton;
