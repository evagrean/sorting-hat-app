import React, { Component } from "react";
import { Card } from "react-bootstrap";
import GoBackButton from "./GoBackButton";
import WelcomeCard from "./WelcomeCard";
import HousemateList from "./HousemateList";

export default class HouseCard extends Component {
  render() {
    const { houseName, housemates, goBackToSortingCeremony } = this.props;
    if (!houseName || !housemates) return <WelcomeCard />;

    return (
      <div>
        <GoBackButton onClick={goBackToSortingCeremony} />
        <Card className="house-card" style={{ width: "70em", margin: "20px auto" }}>
          <Card.Body>
            <Card.Title>Congrats, you are a {houseName}!</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
        <HousemateList housemates={housemates} />
      </div>
    );
  }
}
