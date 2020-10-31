import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class GoBackButton extends Component {
  render() {
    return (
      <div>
        <Button variant="outline-dark" onClick={this.props.onClick}>
          Back to Ceremony
        </Button>
      </div>
    );
  }
}
