import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/cart-slice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, total, price, id } = props.item;

  const IncrementItemHandler = () => {
    dispatch(
      cartAction.addItemToCart({
        id,
        title,
        price,
      })
    );
  };
  const DecrementItemHandler = () => {
    dispatch(cartAction.removeItemToCart(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={DecrementItemHandler}>-</button>
          <button onClick={IncrementItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;