import React, { Component } from "react";

class Card extends Component {
  render() {
    const oneData = this.props;
    return (
      <div className="github-profile">
        <img src={oneData.avatar_url} />
        <div className="info">
          <div className="name">{oneData.name}</div>
          <div className="company">{oneData.company}</div>
        </div>
      </div>
    );
  }
}

export default Card;
