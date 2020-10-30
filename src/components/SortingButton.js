import React, { Component } from "react";
import { Button } from "react-bootstrap";

class SortingButton extends Component {
  render() {
    return (
      <div>
        <Button onClick={this.props.onClick}>Put on the Hat</Button>
      </div>
    );
  }
}

export default SortingButton;
