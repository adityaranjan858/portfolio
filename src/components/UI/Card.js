import React from "react";
import classes from './Card.module.css';

const Card = (props) => {
  return (
    <div className={`${classes.card_body_des} card text-center`}>
      <div className="card-body">
      {props.children}
      </div>
    </div>
  );
};

export default Card;
