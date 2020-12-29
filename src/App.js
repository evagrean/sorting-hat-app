import React, { Component } from "react";
import WelcomeCard from "./components/WelcomeCard";
import HouseCard from "./components/HouseCard";
import axios from "axios";

import "./App.css";

class App extends Component {
  state = {
    randomHouse: null,
    details: {},
    showSortingButton: true,
  };

  getHouseAndDetails = () => {
    try {
      axios.get("https://7aqee4sb74.execute-api.eu-central-1.amazonaws.com/dev/sorting").then((res) =>
        this.setState({
          randomHouse: res.data.randomHouse,
          details: res.data.details,
          showSortingButton: false,
        })
      );
    } catch (error) {
      console.error(error.message);
    }
  };

  goBackToSortingCeremony = (e) => {
    this.setState({
      randomHouse: null,
      details: {},
      showSortingButton: true,
    });
  };

  render() {
    let { randomHouse, details, showSortingButton } = this.state;
    console.log(randomHouse, details);
    return <div className="App">{randomHouse === null ? <WelcomeCard showSortingButton={showSortingButton} getHouseAndDetails={this.getHouseAndDetails} /> : <HouseCard houseName={randomHouse} details={details} goBackToSortingCeremony={this.goBackToSortingCeremony} />}</div>;
  }
}

export default App;
