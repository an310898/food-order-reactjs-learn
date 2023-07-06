import { useState } from "react";
import classes from "./Input.module.css";

const Input = props => {
  const [amount, setAmount] = useState(1);

  return (
    <div className={classes.input}>
      <label>{props.lable}</label>
      <input
        type="number"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        min="1"
        step="1"
        max="99"
      />
    </div>
  );
};

export default Input;
