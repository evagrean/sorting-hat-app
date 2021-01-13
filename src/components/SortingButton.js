import React from "react";

const SortingButton = ({ fetchHouseData }) => {
  return (
    <button className="outline-white sorting-btn my-40 mx-10 p-8 rounded-md text-white text-3xl font-bold uppercase bg-yellow-900 bg-opacity-80 hover:bg-yellow-900 hover:bg-opacity-70 shadow-sm hover:shadow-md " onClick={fetchHouseData}>
      put on the hat
    </button>
  );
};

export default SortingButton;
