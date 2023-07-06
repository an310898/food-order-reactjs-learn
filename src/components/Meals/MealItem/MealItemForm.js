import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = props => {
  return (
    <form className={classes.form}>
      <Input lable="Amount" type="number" />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;
