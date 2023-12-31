import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import useSound from "use-sound";
import skz from "../assets/skz.mp3";

export const Navbar = () => {
  const soundUrl = skz;
  const [play] = useSound(soundUrl);
  return (
    <div className="navbar">
        <img onClick={play} className="img" src={require("../assets/logo.png")} />
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
