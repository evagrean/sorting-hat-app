// import React, { useState, useCallback } from "react";

import SortingButton from "./SortingButton";
import HatImage from "./HatImage";
import { Link } from "react-router-dom";

const CeremonyView = ({ isLoading, fetchHouseData, showSortingButton }) => {
  return (
    <div className="ceremony-view flex flex-col items-center min-h-screen">
      {isLoading ? <HatImage /> : null}
      {showSortingButton ? (
        <Link to="/house">
          <SortingButton fetchHouseData={fetchHouseData} />
        </Link>
      ) : null}
    </div>
  );
};

export default CeremonyView;
