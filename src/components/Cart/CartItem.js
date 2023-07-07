import CartContext from "../../store/cart-context";
import classes from "./CartItem.module.css";

import React, { useContext } from "react";

const CartItem = props => {
  const ctx = useContext(CartContext);
  const onAddItemHandler = item => {
    console.log(item);
  };
  const onRemoveItemHandler = id => {
    ctx.removeItem(id);
  };
  const Item = () => {
    return ctx.item.map((item, index) => {
      return (
        <li className={classes["cart-item"]} key={index}>
          <div>
            <h2>{item.name}</h2>
            <div className={classes.summary}>
              <div className={classes.price}>${item.price}</div>
              <div className={classes.amount}>x{item.amount}</div>
            </div>
          </div>
          <div className={classes.actions}>
            <button onClick={onAddItemHandler.bind(null, item)}>+</button>
            <button onClick={onRemoveItemHandler.bind(null, item.id)}>-</button>
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
