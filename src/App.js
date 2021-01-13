import React from "react";
import Header from "./components/Header";
import CeremonyView from "./components/CeremonyView";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app flex flex-col w-full min-h-screen bg-center bg-no-repeat bg-cover bg-great-hall font-serif">
      <Header />
      <div className="flex-grow">
        <CeremonyView />
      </div>
      <Footer />
    </div>
  );
};

export default App;
