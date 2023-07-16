import React, { useRef, useState } from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";
import AddMeal from "./AddMeal";
import Modal from "../UI/Modal";
import Input from "../UI/Input";
import Button from "../UI/Button";
const Meals = () => {
	const nameInputRef = useRef();
	const descInputRef = useRef();
	const priceInputRef = useRef();
	const [modalAddMeal, setModalAddMeal] = useState(false);

	const showModalAddForm = () => {
		setModalAddMeal(true);
	};
	const closeModalAddForm = () => {
		setModalAddMeal(false);
	};

	const addMealHanlder = (e) => {
		e.preventDefault();

		console.log({
			name: nameInputRef.current.value,
			description: descInputRef.current.value,
			price: priceInputRef.current.value,
		});
		console.log("POST Data");
	};

	return (
		<React.Fragment>
			<MealsSummary />
			<AvailableMeals />
			<AddMeal onShowForm={showModalAddForm}></AddMeal>
			{modalAddMeal && (
				<Modal onClose={closeModalAddForm}>
					<form onSubmit={addMealHanlder}>
						<Input
							ref={nameInputRef}
							style={{ width: "200px" }}
							lable={"Name"}
							input={{ id: "Name", type: "text" }}
						/>
						<Input
							ref={descInputRef}
							style={{ width: "200px" }}
							lable={"Description"}
							input={{ id: "Description", type: "textarea" }}
						/>
						<Input
							ref={priceInputRef}
							style={{ width: "200px" }}
							lable={"Price"}
							input={{ id: "Price", type: "number" }}
						/>
						<Button>Add</Button>
					</form>
				</Modal>
			)}
		</React.Fragment>
	);
};

export default Meals;
