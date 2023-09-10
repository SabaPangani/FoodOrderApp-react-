import React, { useContext } from "react"; // Correct import statement
import CartIcon from "../Cart/CartIcon.js";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context.js";

export const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numOfCartItems = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numOfCartItems}</span>
    </button>
  );
};