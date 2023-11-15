import React from "react";
import { PRODUCTS } from "../../products";
import Product from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <a
          className="t"
          href="https://www.youtube.com/channel/UC9rMiEjNaCSsebs31MRDCRA"
        >
          <h1>SKZ SHOP</h1>
        </a>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
