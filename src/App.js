import React from "react";
import { useState, useCallback } from "react";
import Header from "./components/Header";
import CeremonyView from "./components/CeremonyView";
import Footer from "./components/Footer";
import HouseView from "./components/HouseView";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  const [houseData, setHouseData] = useState("");
  const [housematesData, setHousematesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSortingButton, setShowSortingButton] = useState(true);

  // maybe later also set const [error, setError] = useState("");

  const fetchHouseData = useCallback(async () => {
    const endpoint = `https://lp4o7ya0sk.execute-api.eu-central-1.amazonaws.com/dev/house`;
    let mounted = true;
    try {
      setShowSortingButton(false);
      setIsLoading(true);

      const res = await axios(endpoint);
      console.log(res.data);
      setTimeout(() => {
        setHouseData(res.data.randomHouse);
        setHousematesData(res.data.housemates);
        if (mounted) {
          setIsLoading(false);
        }
      }, 4000);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
    // cleanup function after axios request
    return function cleanup() {
      mounted = false;
    };
  }, []);

  // For now, going back from HouseView to Ceremony is handled by state change - should change after added routing
  const goBackToCeremony = () => {
    setHouseData("");
    setHousematesData([]);
    setShowSortingButton(true);
  };
  return (
    <Router>
      <div className="app flex flex-col w-full min-h-screen font-heading bg-center bg-no-repeat bg-cover bg-great-hall">
        <Header />
        <div className="flex-grow">
          <Switch>
            <Route exact path="/">
              <CeremonyView isLoading={isLoading} fetchHouseData={fetchHouseData} showSortingButton={showSortingButton} />
            </Route>

            {houseData ? (
              <Route path="/:house">
                <HouseView house={houseData} housemates={housematesData} showSortingButton={showSortingButton} goBackToCeremony={goBackToCeremony} />
              </Route>
            ) : (
              <CeremonyView isLoading={isLoading} fetchHouseData={fetchHouseData} showSortingButton={showSortingButton} />
            )}
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
