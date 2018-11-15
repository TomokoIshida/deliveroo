import React from "react";
import Header from "./Header";
import MenuList from "./MenuList";
import Basket from "./Basket";
import axios from "axios";
class RestaurantItem extends React.Component {
  state = {
    restaurant: {},
    menu: {}
  };
  render() {
    return (
      <div>
        <div className="Wrapper">
          <Header restaurant={this.state.restaurant} />
        </div>
        <div className="NonHeaderWrapper Wrapper">
          <div className="Container NonHeaderContainer">
            <MenuList menu={this.state.menu} />
            <Basket />
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    axios.get("https://deliveroo-api.now.sh/menu").then(response => {
      this.setState({
        restaurant: response.data.restaurant,
        menu: response.data.menu
      });
      console.log(this.state);
    });
  }
}

export default RestaurantItem;



Réduire 
17 h 15
