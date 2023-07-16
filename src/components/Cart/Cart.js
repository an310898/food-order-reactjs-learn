import React, { useContext } from "react";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
	const ctx = useContext(CartContext);
	const onAddItemHandler = (item) => {
		ctx.addItem({ ...item, amount: 1 });
	};
	const onRemoveItemHandler = (id) => {
		ctx.removeItem(id);
	};

	const cartItems = (
		<ul className={classes["cart-items"]}>
			{ctx.item.map((item) => (
				<CartItem
					item={item}
					key={item.id}
					onAddItemHandler={onAddItemHandler.bind(null, item)}
					onRemoveItemHandler={onRemoveItemHandler.bind(null, item.id)}
				/>
			))}
		</ul>
	);

	return (
		<Modal onClose={props.onCloseCart}>
			{cartItems}
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
