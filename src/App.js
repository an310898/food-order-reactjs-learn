import { useState } from "react";
import "./App.css";
import Header from "./components/Layout/Header";

import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [isShowCart, setIsShowCart] = useState(false);

  const showCartHandler = () => {
    setIsShowCart(true);
  };
  const closeCartHandler = () => {
    setIsShowCart(false);
  };

  return (
    <CartProvider>
      {isShowCart && <Cart onCloseCart={closeCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Meals />
    </CartProvider>
  );
}

export default App;
