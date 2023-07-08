import React from "react";

import classes from "./CartItem.module.css";

const CartItem = props => {
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.item.name}</h2>
        <div className={classes.summary}>
          <div className={classes.price}>${props.item.price}</div>
          <div className={classes.amount}>x{props.item.amount}</div>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onAddItemHandler}>+</button>
        <button onClick={props.onRemoveItemHandler}>-</button>
      </div>
    </li>
  );
};

export default CartItem;
