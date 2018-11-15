import React, { Component } from "react";

class MenuItem extends Component {
  render() {
    console.log("this.props.menuInformation", this.props.menuInformation);
    return (
      <div>
        <div>
          <h6>{this.props.menuInformation.title}</h6>
          <p>{this.props.menuInformation.description}</p>
          <p>{this.props.menuInformation.price}</p>
        </div>
        <div>{this.renderImage(this.props.menuInformation.picture)}</div>
      </div>
    );
  }
}

export default MenuItem;
