import React, { Component } from "react";
import HousemateCard from "./HousemateCard";
import { Row, Col } from "react-bootstrap";

export default class HousemateList extends Component {
  render() {
    const { housemates } = this.props;
    return (
      <Row>
        {housemates.map((housemate) => (
          <Row>
            <Col>
              <HousemateCard name={housemate.name} image={housemate.image} />
            </Col>
          </Row>
        ))}
      </Row>
    );
  }
}
