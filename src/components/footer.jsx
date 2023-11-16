import React from "react";
import "./footer.css";
import p1 from "../assets/chris.png";
import p2 from "../assets/in.png";
import p3 from "../assets/felix.png";
import p4 from "../assets/lee.png";
import p5 from "../assets/hj.png";
import p6 from "../assets/han.png";
import p7 from "../assets/se.png";
import p8 from "../assets/cb.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footerLists">
        <ul className="list">
          <a href="/" className="listTitle">
            SKZ SHOP
          </a>
          <li className="listItems">Frequently Asked Questions</li>
          <li className="listItems">Careers</li>
          <li className="listItems">Reviews</li>
        </ul>
        <ul className="list">
          <a href="/" className="listTitle">
            ABOUT US
          </a>
          <li className="listItems">Contact Us</li>
          <li className="listItems">Trems & Conditions</li>
          <li className="listItems">Sustainability</li>
        </ul>
        <ul className="list">
          <a href="/" className="listTitle">
            HELP
          </a>
          <li className="listItems">Partner Help</li>
          <li className="listItems">Elite Membership</li>
          <li className="listItems">Return</li>
        </ul>
        <ul className="list">
          <a href="/" className="listTitle">
            Customer Service
          </a>
          <li className="listItems">Investor Relations</li>
          <li className="listItems">Press Center</li>
          <li className="listItems">Wrong Shipping</li>
        </ul> 
      </div>
      <div className="fText">Copyright © 2023 ELKOS/RM -mo. </div>
      <div className="pics">
      <img className="img" src={p1} />
      <img className="img" src={p4} />
      <img className="img" src={p2} />
      <img className="img" src={p5} />
      <img className="img" src={p6} />
      <img className="img" src={p3} />
      <img className="img" src={p7} />
      <img className="img" src={p8} />
      </div>
    </div>
  );
};
