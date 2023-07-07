import React, { useContext } from "react";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

const Cart = props => {
  const ctx = useContext(CartContext);

  return (
    <Modal onCloseCart={props.onCloseCart}>
      <ul className={classes["cart-items"]}>
        <CartItem />
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${ctx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCloseCart}>
          Close
        </button>
        {ctx.item.length > 0 && (
          <button className={classes.button}>Order</button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
