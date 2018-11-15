import React, { Component } from "react";
import axios from "axios";
import RestaurantDescription from "./RestaurantDescription";
import RestaurantMenu from "./RestaurantMenu";

class Restaurant extends Component {
  state = {
    restaurant: {},
    menu: {}
  };

  render() {
    return (
      <div className="restaurant-container">
        <RestaurantDescription restaurantInformation={this.state.restaurant} />
        <RestaurantMenu menuInformation={this.state.menu} />
      </div>
    );
  }

  componentDidMount() {
    axios.get("https://deliveroo-api.now.sh/menu").then(response => {
      this.setState({
        restaurant: response.data.restaurant,
        menu: response.data.menu
      });
    });
  }
}

export default Restaurant;
