import { useSelector } from "react-redux";
import ItemList from "./ItemList.js";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice.js";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  console.log(cartItem, "cartItem");
  const dispatch = useDispatch();
  const handleClearCart = () => {
    console.log("sahid");
    dispatch(clearCart());
  };

  return (
    <div className="text-center p-4 m-4">
      <h1 className="text-xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItem.length === 0 && <h1>Cart is empty. Add an Item to cart !</h1>}
        <ItemList items={cartItem} />
      </div>
    </div>
  );
};
export default Cart;
