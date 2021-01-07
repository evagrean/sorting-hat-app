import React from "react";

const GoBackButton = ({ goBackToCeremony, textColor }) => {
  return (
    <div className="">
      <button className={`uppercase  py-5 rounded-md ${textColor} font-normal max-w-max shadow-sm hover:underline text-3xl`} onClick={goBackToCeremony}>
        <span>back to ceremony</span>
      </button>
    </div>
  );
};

export default GoBackButton;
