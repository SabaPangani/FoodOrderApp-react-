import React, { useContext, useEffect, useState } from "react"; // Correct import statement
import CartIcon from "../Cart/CartIcon.js";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context.js";

export const HeaderCartButton = (props) => {
  const [buttonIsHighlited, setButtonIsHighlited] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;
  const numOfCartItems = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${buttonIsHighlited ? classes.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButtonIsHighlited(true);

    const timer = setTimeout(() => {
      setButtonIsHighlited(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numOfCartItems}</span>
    </button>
  );
};
