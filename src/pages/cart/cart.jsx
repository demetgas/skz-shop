import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shopContext";
import { CartItem } from "./cartItem";
import { useNavigate } from "react-router-dom";
import "./cart.css";

export const Cart = () => {
  const { cartItems, total } = useContext(ShopContext);
  const totalAmount = total();
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1> Your Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Total: €{totalAmount}</p>
          <button onClick={() => navigate("/")}> Continue Shopping</button>
          <button> Payment</button>
        </div>
      ) : (
        <h1> Your Cart is Empty </h1>
      )}
    </div>
  );
};
