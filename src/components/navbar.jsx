import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

export const Navbar = () => {
  return (
    <div className="navbar">
      <img className="img" src={require("../assets/logo.png")} />
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
