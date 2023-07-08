import { useReducer } from "react";
import CartContext from "./cart-context";

const defautCartState = {
  item: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let newCartArr = [...state.item];
    let flag = false;
    newCartArr.forEach(x => {
      if (x.id === action.item.id) {
        x.amount += action.item.amount;
        flag = true;
      }
    });
    if (!flag) {
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
    let itemPrice = 0;
    newCartArr.forEach((x, index) => {
      if (x.id === action.id) {
        itemPrice = x.price;
        if (x.amount === 1) {
          newCartArr.splice(index, 1);
        } else {
          x.amount -= 1;
        }
      }
    });

    const newTotalAmount = state.totalAmount.toFixed(2) - itemPrice.toFixed(2);

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
