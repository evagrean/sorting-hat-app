import React from "react";

const SortingButton = ({ fetchHouseData }) => {
  return (
    <div className="sorting-btn flex flex-col items-center">
      <button className="uppercase px-20 py-9 bg-yellow-600 text-gray-900 max-w-max shadow-sm hover:shadow-md text-5xl" onClick={fetchHouseData}>
        put on the hat
      </button>
    </div>
  );
};

export default SortingButton;
