import React from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Modal = props => {
  const portalElement = document.getElementById("overlay");

  const Backdrop = () => {
    return <div className={classes.backdrop} onClick={props.onCloseCart}></div>;
  };
  const Modal = props => {
    return <div className={classes.modal}>{props.children}</div>;
  };
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(<Modal>{props.children}</Modal>, portalElement)}
    </React.Fragment>
  );
};

export default Modal;
