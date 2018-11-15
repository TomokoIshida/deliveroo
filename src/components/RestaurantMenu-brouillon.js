import React, { Component } from "react";

class RestaurantMenu extends Component {
  render() {
    const entries = Object.entries(this.props.menuInformation);
    // console.log(this.props.menuInformation);
    const menuCategories = [];
    const menuTexts = [];
    const menuImages = [];

    // truncateText = text => {
    //   const dots = text.length > 150 ? "..." : "";
    //   return text.substring(0, 150) + dots;
    // };

    for (let i = 0; i < entries.length; i++) {
      menuCategories.push(<h2 className="category-name">{entries[i][0]}</h2>);
      for (let j = 0; j < entries[i][1].length; j++) {
        menuTexts.push(<h4 className="menu-name">{entries[i][1][j].title}</h4>);
        menuTexts.push(
          <p className="menu-description">
            {entries[i][1][j].description}</p>
            {/* {truncateText(entries[i][1][j].description)} */}
        );
        menuTexts.push(
          <p className="menu-price">{"€ " + entries[i][1][j].price}</p>
        );
        menuTexts.push(
          <p className="menu-popular">{entries[i][1][j].popular}</p>
        );
        menuImages.push(
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
        <div className="menu-item">{menuCategories}</div>
        <div className="menu-item">{menuTexts}</div>
        <div className="menu-item">{menuImages}</div>
      </div>
    );
  }
}

export default RestaurantMenu;
