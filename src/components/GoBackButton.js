import React from "react";

const GoBackButton = ({ goBackToCeremony }) => {
  return (
    <div className="flex flex-col items-center">
      <button className="uppercase px-20 py-9 m-20 bg-yellow-600 text-gray-900 max-w-max shadow-sm hover:shadow-md text-5xl hover:bg-yellow-500" onClick={goBackToCeremony}>
        back to ceremony
      </button>
    </div>
  );
};

export default GoBackButton;
