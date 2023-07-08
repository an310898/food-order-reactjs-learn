import { useReducer } from "react";
import CartContext from "./cart-context";

const defautCartState = {
  item: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let newCartArr = [...state.item];
    const exitsCartItemIndex = state.item.findIndex(
      x => x.id === action.item.id
    );
    const exitsItem = newCartArr[exitsCartItemIndex];
    if (exitsCartItemIndex !== -1) {
      newCartArr[exitsCartItemIndex] = {
        ...exitsItem,
        amount: exitsItem.amount + action.item.amount,
      };
    } else {
      newCartArr = newCartArr.concat(action.item);
    }

    const newTotalAmount =
      state.totalAmount + action.item.amount * action.item.price;
    return {
      item: newCartArr,
      totalAmount: newTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    let newCartArr = [...state.item];

    const exitsCartItemIndex = newCartArr.findIndex(x => x.id === action.id);
    const exitsItem = newCartArr[exitsCartItemIndex];

    if (exitsItem.amount === 1) {
      newCartArr = newCartArr.filter(x => x.id !== exitsItem.id);
    } else if (exitsItem.amount > 1) {
      newCartArr[exitsCartItemIndex] = {
        ...exitsItem,
        amount: exitsItem.amount - 1,
      };
    }

    const newTotalAmount =
      state.totalAmount.toFixed(2) - exitsItem.price.toFixed(2);

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
    removeItem: removeItemFromCartHanlder,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
