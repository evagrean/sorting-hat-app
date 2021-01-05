import React from "react";

const SortingButton = ({ fetchHouseData }) => {
  return (
    <div>
      <button className="sorting-button" onClick={fetchHouseData}>
        Put on the Hat
      </button>
    </div>
  );
};

export default SortingButton;
