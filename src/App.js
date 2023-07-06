// import { useState } from "react";
import { useState } from "react";
import "./App.css";
import Header from "./components/Layout/Header";

import Modal from "./components/UI/Modal";
import Meals from "./components/Meals/Meals";
function App() {
  const [isShowCart, setIsShowCart] = useState(false);

  const showCartHandler = () => {
    setIsShowCart(true);
  };
  const closeCartHandler = () => {
    setIsShowCart(false);
  };

  return (
    <div>
      {isShowCart && <Modal onCloseCart={closeCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Meals />
    </div>
  );
}

export default App;
