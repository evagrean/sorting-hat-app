import React, { Component } from "react";
import WelcomeCard from "./components/WelcomeCard";
import HouseCard from "./components/HouseCard";
import axios from "axios";

import "./App.css";

class App extends Component {
  state = {
    randomHouse: null,
    housemates: [],
    showSortingButton: true,
  };

  getHouseAndHousemates = async () => {
    try {
      const res = await axios.get(" https://lp4o7ya0sk.execute-api.eu-central-1.amazonaws.com/dev/house");

      this.setState({
        randomHouse: res.data.randomHouse,
        housemates: res.data.housemates,
        showSortingButton: false,
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  goBackToSortingCeremony = (e) => {
    this.setState({
      randomHouse: null,
      housemates: [],
      showSortingButton: true,
    });
  };

  render() {
    let { randomHouse, housemates, showSortingButton } = this.state;
    console.log(randomHouse, housemates);
    return <div className="App">{randomHouse === null ? <WelcomeCard showSortingButton={showSortingButton} getHouseAndHousemates={this.getHouseAndHousemates} /> : <HouseCard houseName={randomHouse} housemates={housemates} goBackToSortingCeremony={this.goBackToSortingCeremony} />}</div>;
  }
}

export default App;
