import React from "react";
import "./footer.css";
import p1 from "../assets/chris.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footerLists">
        <ul className="list">
          <a href="/" className="listTitle">
            SKZ SHOP
          </a>
          <img className="img" src={p1} />
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
    </div>
  );
};
