import React, { Component } from "react";

export default class HouseView extends Component {
  render() {
    let { houseName } = this.props;
    let { mascot, values, colors } = this.props.details;
    return (
      <div>
        <p>Welcome in {houseName}!</p>
        <p>Your mascot: {mascot}</p>
        <p>
          Your values:
          {values.map((value) => {
            return <h2>{value}</h2>;
          })}
        </p>
        <p>
          Your colors:{" "}
          {colors.map((color) => {
            return <h2>{color}</h2>;
          })}
        </p>
      </div>
    );
  }
}
