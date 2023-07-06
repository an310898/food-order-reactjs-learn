import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";
const AvailableMeals = props => {
  const mealList = [
    { id: 1, name: "Sushi", describe: "Finest fish and veggies", price: 22.99 },
    { id: 2, name: "Schnitzel", describe: "A german specialty!", price: 16.5 },
    {
      id: 3,
      name: "Barbecue Burger",
      describe: "American, raw, meaty",
      price: 12.99,
    },
    {
      id: 4,
      name: "Green Bowl",
      describe: "Healthy...and green...",
      price: 18.99,
    },
  ];

  const listMeal = mealList.map(item => {
    return (
      <MealItem
        key={item.id}
        mealName={item.name}
        description={item.describe}
        price={item.price}
      />
    );
  });

  return (
    <div className={classes.meals}>
      <Card>
        <ul>{listMeal}</ul>
      </Card>
    </div>
  );
};

export default AvailableMeals;
