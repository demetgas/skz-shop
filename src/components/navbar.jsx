import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

export const Navbar = () => {
  return (
    <div className="navbar">
      <a href="https://www.youtube.com/channel/UC9rMiEjNaCSsebs31MRDCRA">
        <img className="img" src={require("../assets/logo.png")} />
      </a>
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/cart">
          {" "}
          <ShoppingCart size={28} />{" "}
        </Link>
      </div>
    </div>
  );
};
