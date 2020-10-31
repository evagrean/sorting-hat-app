import React, { Component } from "react";
import SortingButton from "./SortingButton";
import { Card } from "react-bootstrap";
import harryRonLego from "../assets/harryRonLego.jpg";

export default class WelcomeCard extends Component {
  render() {
    const { getHouseAndDetails } = this.props;
    return (
      <div>
        <Card style={{ width: "40em", margin: "20px auto" }}>
          <Card.Img variant="top" src={harryRonLego} />
          <Card.Body>
            <Card.Title>Welcome to the Sorting Ceremony at Hogwarts!</Card.Title>
            <Card.Text>Put on the sorting hat and see which Hogwarts House it assigns you to.</Card.Text>
            <SortingButton onClick={getHouseAndDetails} />
          </Card.Body>
        </Card>
      </div>
    );
  }
}
