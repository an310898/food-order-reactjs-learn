import React from "react";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = props => {
  return (
    <div>
      <ul className={classes["cart-items"]}>
        <CartItem />
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$0.00</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClick}>Close</button>
      </div>
    </div>
  );
};

export default Cart;
