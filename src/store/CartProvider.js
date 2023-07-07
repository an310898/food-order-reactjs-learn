import { useReducer } from "react";
import CartContext from "./cart-context";

const defautCartState = {
  item: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const newCartArr = state.item.concat(action.item);
    const newTotalAmount =
      state.totalAmount + state.item.amount * state.item.price;

    return {
      item: newCartArr,
      totalAmount: newTotalAmount,
    };
  }

  return defautCartState;
};

const CartProvider = props => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defautCartState
  );

  const addItemToCartHandler = item => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHanlder = id => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    item: cartState.item,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItemL: removeItemFromCartHanlder,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
