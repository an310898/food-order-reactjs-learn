import Button from "../UI/Button";
import classes from "./AddMeal.module.css";
const AddMeal = (props) => {
	return (
		<div className={classes["add-meal"]}>
			<div style={{ display: "flex", justifyContent: "flex-end" }}>
				<Button onClick={props.onShowForm} className={classes.btn}>
					Add Meal
				</Button>
			</div>
		</div>
	);
};

export default AddMeal;
