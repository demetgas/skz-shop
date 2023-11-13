import React from "react";

export default function Product(props) {
  const { id, productName, price, productImage } = props.data;
  return (
    <div className="product">
      <img src={productImage} />
    </div>
  );
}
