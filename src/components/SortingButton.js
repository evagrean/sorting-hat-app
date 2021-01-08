import React from "react";

const SortingButton = ({ fetchHouseData }) => {
  return (
    <div className="sorting-btn">
      <button className="outline-white mt-28 px-20 py-9 rounded-md bg-yellow-900 bg-opacity-80 hover:bg-yellow-900 hover:bg-opacity-70 text-white font-bold max-w-max shadow-sm hover:shadow-md text-5xl uppercase" onClick={fetchHouseData}>
        put on the hat
      </button>
    </div>
  );
};

export default SortingButton;
