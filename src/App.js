import React from "react";

import CeremonyView from "./components/CeremonyView";

const App = () => {
  return (
    <div className="app w-full h-screen bg-center bg-no-repeat bg-cover bg-gray-900">
      <CeremonyView />

      {/* {houseData ? <HouseCard house={houseData} housemates={housematesData} /> : <CeremonyView />} */}
    </div>
  );
};

export default App;
