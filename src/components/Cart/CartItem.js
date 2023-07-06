import classes from "./CartItem.module.css";

const CartItem = props => {
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>SuShi</h2>
        <div className={classes.summary}>
          <div className={classes.price}>$22.99</div>
          <div className={classes.amount}>x1</div>
        </div>
      </div>
      <div className={classes.actions}>
        <button>+</button>
        <button>-</button>
      </div>
    </li>
  );
};

export default CartItem;
