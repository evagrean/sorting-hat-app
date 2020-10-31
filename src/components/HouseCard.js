import React, { Component } from "react";
import { Card, Badge } from "react-bootstrap";
import GoBackButton from "./GoBackButton";
import snake from "../assets/snake.png";
import badger from "../assets/badger.png";
import eagle from "../assets/eagle.png";
import lion from "../assets/lion.png";

const getMascotImg = (mascot) => {
  if (mascot === "snake") {
    return snake;
  } else if (mascot === "badger") {
    return badger;
  } else if (mascot === "eagle") {
    return eagle;
  } else {
    return lion;
  }
};

export default class HouseCard extends Component {
  render() {
    let { houseName, goBackToSortingCeremony } = this.props;
    let { mascot, values, colors } = this.props.details;
    return (
      <div style={{ background: "lightblue" }}>
        <Card className={colors[0]} style={{ width: "40em", margin: "20px auto" }}>
          <Card.Img variant="top" src={getMascotImg(mascot)} style={{ background: "white", width: "200px", margin: "10px auto" }} />
          <Card.Body>
            <Card.Title>Congrats, you are a {houseName}!</Card.Title>
            <Card.Text>
              <p>
                {colors[0] === "green" &&
                  values.map((value) => {
                    return (
                      <Badge className="slytherin-badge-style" pill variant="dark" style={{ margin: "2px", fontSize: "large" }}>
                        {value}
                      </Badge>
                    );
                  })}
                {colors[0] === "blue" &&
                  values.map((value) => {
                    return (
                      <Badge className="ravenclaw-badge-style" pill variant="dark" style={{ margin: "2px" }}>
                        {value}
                      </Badge>
                    );
                  })}
                {colors[0] === "yellow" &&
                  values.map((value) => {
                    return (
                      <Badge className="hufflepuff-badge-style" pill variant="dark" style={{ margin: "2px" }}>
                        {value}
                      </Badge>
                    );
                  })}
                {colors[0] === "scarlet" &&
                  values.map((value) => {
                    return (
                      <Badge className="gryffindor-badge-style" pill variant="dark" style={{ margin: "2px" }}>
                        {value}
                      </Badge>
                    );
                  })}
              </p>
            </Card.Text>
            <GoBackButton onClick={goBackToSortingCeremony} />
          </Card.Body>
        </Card>
      </div>
    );
  }
}
