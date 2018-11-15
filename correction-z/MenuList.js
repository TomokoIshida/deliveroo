import React from "react";
import Card from "./Card";
class MenuList extends React.Component {
  renderCardsList(mealList) {
    const specificMealList = mealList.map(dish => {
      let description =
        dish.description.length > 50
          ? dish.description.substring(0, 50) + "..."
          : dish.description;
      let title = dish.title;
      let price = dish.price.replace(".", ",") + " €";
      let popularity = dish.popular ? " ☆ Populaire" : "";

      return (
        <Card
          description={description}
          title={title}
          price={price}
          popularity={popularity}
          url={dish.picture}
        />
      );
    });

    return specificMealList;
  }

  render() {
    const menu = this.props.menu;
    const mealsList = Object.keys(menu);
    const menuList = mealsList.map(obj => {
      return (
        <div class="mealList">
          <h2>{obj}</h2>
          <div class="specificMealList">{this.renderCardsList(menu[obj])}</div>
        </div>
      );
    });

    return <div id="menuList">{menuList}</div>;
  }
}

export default MenuList;
