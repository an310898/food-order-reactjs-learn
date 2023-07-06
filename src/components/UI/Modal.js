import React from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import Cart from "../Cart/Cart";

const Modal = props => {
  const portalElement = document.getElementById("overlay");

  const Backdrop = () => {
    return <div className={classes.backdrop} onClick={props.onCloseCart}></div>;
  };
  const Modal = () => {
    return (
      <div className={classes.modal}>
        <Cart onClick={props.onCloseCart} />
      </div>
    );
  };
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(<Modal />, portalElement)}
    </React.Fragment>
  );
};

export default Modal;
