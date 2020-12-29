import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

export default class HousemateCard extends Component {
  render() {
    const { name, image } = this.props;

    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              <Button variant="primary">Get to know me</Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
