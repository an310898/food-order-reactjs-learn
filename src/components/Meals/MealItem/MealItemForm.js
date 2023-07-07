import { useContext, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import CartContext from "../../../store/cart-context";

const MealItemForm = props => {
  const ctx = useContext(CartContext);

  const [amount, setAmount] = useState(1);

  const onChangeAmount = e => {
    setAmount(e.target.value);
  };

  const addCartItemHandler = e => {
    e.preventDefault();
    const item = { ...props.item, amount };
    ctx.addItem(item);
  };

  return (
    <form className={classes.form}>
      <Input
        lable="Amount"
        input={{
          id: props.id,
          type: "number",
          min: "1",
          step: "1",
          max: "5",
          defaultValue: amount,
          onChange: onChangeAmount,
        }}
      />
      <button type="submit" onClick={addCartItemHandler}>
        + Add
      </button>
    </form>
  );
};

export default MealItemForm;
