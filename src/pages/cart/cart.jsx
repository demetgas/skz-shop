import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shopContext";
import { CartItem } from "./cartItem";
import "./cart.css";

export const Cart = () => {
  const { cartItems, total } = useContext(ShopContext);
  const totalAmount = total();
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
      <div className="checkout">
        <p> Total: €{totalAmount}</p>
        <button> Continue Shopping</button>
        <button> Payment</button>
      </div>
    </div>
  );
};
