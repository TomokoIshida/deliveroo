import React, { Component } from "react";

class RestaurantDescription extends Component {
  render() {
    console.log(
      "Propriétés (props) de RestaurantDescription",
      this.props.restaurantInformation
    );
    return (
      <div className="restaurant-item">
        <div className="restaurant-text">
          <h2 className="name">{this.props.restaurantInformation.name}</h2>
          <p className="description">
            {this.props.restaurantInformation.description}
          </p>
        </div>
        <img
          alt=""
          className="restaurant-image"
          src={this.props.restaurantInformation.picture}
        />
      </div>
    );
  }
}

export default RestaurantDescription;
