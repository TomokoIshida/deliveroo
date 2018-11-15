import React, { Component } from "react";

class RestaurantMenu extends Component {
  render() {
    const entries = Object.entries(this.props.menuInformation);
    // console.log(this.props.menuInformation);
    const menuItems = [];

    // truncateText = text => {
    //   const dots = text.length > 150 ? "..." : "";
    //   return text.substring(0, 150) + dots;
    // };

    for (let i = 0; i < entries.length; i++) {
      menuItems.push(<h2 className="category-name">{entries[i][0]}</h2>);
      for (let j = 0; j < entries[i][1].length; j++) {
        menuItems.push(<h4 className="menu-name">{entries[i][1][j].title}</h4>);
        menuItems.push(
          <p className="menu-description">
            {entries[i][1][j].description}
            {/* {truncateText(entries[i][1][j].description)} */}
          </p>
        );
        menuItems.push(
          <p className="menu-price">{"€ " + entries[i][1][j].price}</p>
        );
        menuItems.push(
          <p className="menu-popular">{entries[i][1][j].popular}</p>
        );
        menuItems.push(
          <img className="menu-image" src={entries[i][1][j].picture} alt="" />
        );
      }
    }

    console.log(
      "Propriétés (props) de RestaurantMenu",
      this.props.menuInformation
    );

    return (
      <div className="menu-container">
        <div className="menu-item">{menuItems}</div>
      </div>
    );
  }
}

export default RestaurantMenu;
