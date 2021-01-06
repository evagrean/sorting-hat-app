import React from "react";

import CeremonyView from "./components/CeremonyView";

const App = () => {
  return (
    <div className="App">
      <CeremonyView />

      {/* {houseData ? <HouseCard house={houseData} housemates={housematesData} /> : <CeremonyView />} */}
    </div>
  );
};

export default App;
