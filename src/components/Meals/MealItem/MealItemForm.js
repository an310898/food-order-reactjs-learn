import { useContext, useRef } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import CartContext from "../../../store/cart-context";

const MealItemForm = props => {
  const ctx = useContext(CartContext);

  const amountInputRef = useRef();

  const addCartItemHandler = e => {
    e.preventDefault();
    const item = { ...props.item, amount: +amountInputRef.current.value };
    ctx.addItem(item);
  };

  return (
    <form className={classes.form} onSubmit={addCartItemHandler}>
      <Input
        lable="Amount"
        input={{
          id: props.id,
          type: "number",
          min: "1",
          step: "1",
          max: "5",
          defaultValue: "1",
        }}
        ref={amountInputRef}
      />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;
