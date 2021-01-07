import React from "react";

const SortingButton = ({ fetchHouseData }) => {
  return (
    <div className="sorting-btn flex flex-col items-center">
      <button className="uppercase px-20 py-9 border-white rounded-md bg-yellow-900 bg-opacity-80 hover:bg-yellow-900 hover:bg-opacity-70 text-white font-bold max-w-max shadow-sm hover:shadow-md text-5xl" onClick={fetchHouseData}>
        put on the sorting hat
      </button>
    </div>
  );
};

export default SortingButton;
