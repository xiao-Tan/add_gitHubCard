import React from "react";
import Card from "./Card";

function CardList(props) {
  return (
    <div>
      {props.profile.map((oneData) => (
        <Card key={oneData.id} {...oneData} />
      ))}
    </div>
  );
}

export default CardList;
