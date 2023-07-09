import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";

import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = props => {
  const ctx = useContext(CartContext);
  const [animationBtn, setAnimationBtn] = useState(false);

  const amountBadge = ctx.item.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${animationBtn ? classes.bump : ""}`;
  useEffect(() => {
    console.log("effect run");
    if (ctx.item.length === 0) {
      return;
    }
    setAnimationBtn(true);

    const timer = setTimeout(() => {
      setAnimationBtn(false);
    }, 300);

    return () => {
      console.log("clean up");
      clearTimeout(timer);
    };
  }, [ctx.item]);

  return (
    <button className={btnClasses} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{amountBadge}</span>
    </button>
  );
};

export default HeaderCartButton;
