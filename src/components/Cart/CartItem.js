import CartContext from "../../store/cart-context";
import classes from "./CartItem.module.css";

import React, { useContext } from "react";

const CartItem = props => {
  const ctx = useContext(CartContext);
  console.log("🚀 ~ file: CartItem.js:8 ~ CartItem ~ ctx:", ctx);

  const Item = () => {
    return ctx.item.map(x => {
      return (
        <li className={classes["cart-item"]} key={x.id}>
          <div>
            <h2>{x.name}</h2>
            <div className={classes.summary}>
              <div className={classes.price}>${x.price}</div>
              <div className={classes.amount}>x{x.amount}</div>
            </div>
          </div>
          <div className={classes.actions}>
            <button>+</button>
            <button>-</button>
          </div>
        </li>
      );
    });
  };

  return (
    <React.Fragment>
      <Item />
    </React.Fragment>
  );
};

export default CartItem;
