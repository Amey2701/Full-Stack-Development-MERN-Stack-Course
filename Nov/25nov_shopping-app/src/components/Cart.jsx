import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slices/productSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.products);

  return (
    <div className="cart-container">
      <h2>🛒 Cart Items ({cart.length})</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <p>{item.title}</p>
          <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
