import React, { Component } from "react";
import Header from "./components/Header";
import SortingButton from "./components/SortingButton";
import HouseView from "./components/HouseView";
import GoBackButton from "./components/GoBackButton";
import axios from "axios";

import "./App.js";

class App extends Component {
  state = {
    randomHouse: null,
    details: {},
    showSortingButton: true,
  };

  getHouseAndDetails = () => {
    try {
      axios.get("https://7aqee4sb74.execute-api.eu-central-1.amazonaws.com/dev/sorting", { timeout: 10000 }).then((res) =>
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
    return (
      <div className="App">
        <Header />
        {showSortingButton && <SortingButton onClick={this.getHouseAndDetails} />}

        {randomHouse && details && (
          <div>
            <HouseView houseName={randomHouse} details={details} />
            <GoBackButton onClick={this.goBackToSortingCeremony} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
