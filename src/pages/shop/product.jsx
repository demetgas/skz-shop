import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";

export default function Product(props) {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];
  return (
    <div className="product">
      <img src={productImage} />
      <div className="desc">
        <p>
          <b>{productName}</b>
        </p>
        <p>€{price}</p>
      </div>
      <button onClick={() => addToCart(id)} className="addToCartBttn">
        {" "}
        Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
      </button>
    </div>
  );
}
