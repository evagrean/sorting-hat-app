import React from "react";
import Header from "./components/Header";
import CeremonyView from "./components/CeremonyView";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app flex flex-col justify-between w-full h-screen bg-center bg-no-repeat bg-cover bg-great-hall">
      <Header />
      <CeremonyView />
      <Footer />

      {/* {houseData ? <HouseCard house={houseData} housemates={housematesData} /> : <CeremonyView />} */}
    </div>
  );
};

export default App;
