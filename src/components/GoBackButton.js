import React, { Component } from "react";

export default class GoBackButton extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onClick}>Back to Ceremony</button>
      </div>
    );
  }
}
