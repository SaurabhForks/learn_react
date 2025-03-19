import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemDetail from "../accordian/ItemDetail";
import { clearCart } from "../../redux/slices/cartSilce";

const Cart = () => {
  const cartItems = useSelector((store) => store.cartReducer.items);
  const dispatch = useDispatch();

  const hadleCrearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="w-6/12 m-auto">
      <h1 className="bold text-2xl text-center">Cart</h1>
      {cartItems.length === 0 ? (
        <h2 className="bold text-2xl text-center">
          Cart is empty please add some item
        </h2>
      ) : (
        <>
          {cartItems?.map((item, index) => {
            return <ItemDetail key={index} detail={item} isCart />;
          })}
          <button onClick={hadleCrearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
};

export default Cart;
