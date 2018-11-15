import React from "react";

class Card extends React.Component {
  renderImg() {
    if (this.props.url) {
      return (
        <img
          className="crop"
          width="100px"
          height="100px"
          src={this.props.url}
          alt="photol"
        />
      );
    } else {
      return;
    }
  }
  render() {
    return (
      <div className="Card">
        <div className="descMeal">
          <h3>{this.props.title}</h3>
          <p>{this.props.description}</p>
          <span className="heavyWeight">{this.props.price}</span>
          <span className="pop">{this.props.popularity}</span>
        </div>
        <div>{this.renderImg()}</div>
      </div>
    );
  }
}

export default Card;
