import React from "react";

const GoBackButton = ({ goBackToCeremony, bgColor }) => {
  return (
    <div className="flex flex-col items-center pt-10">
      <button className={`uppercase px-10 py-5 rounded-md ${bgColor} bg-opacity-80 hover:bg-yellow-900 hover:bg-opacity-70 text-white font-normal max-w-max shadow-sm hover:shadow-md text-3xl`} onClick={goBackToCeremony}>
        back to ceremony
      </button>
    </div>
  );
};

export default GoBackButton;
