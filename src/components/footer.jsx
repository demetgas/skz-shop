import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footerLists">
        <ul className="list">
          <a href="" className="listTitle">
            SKZ SHOP
          </a>
          <li className="listItems">Frequently Asked Questions</li>
          <li className="listItems">Careers</li>
          <li className="listItems">Reviews</li>
        </ul>
        <ul className="list">
          <a href="" className="listTitle">
            ABOUT US
          </a>
          <li className="listItems">Contact Us</li>
          <li className="listItems">Trems & Conditions</li>
          <li className="listItems">Sustainability</li>
        </ul>
        <ul className="list">
          <a href="" className="listTitle">
            HELP
          </a>
          <li className="listItems">Partner Help</li>
          <li className="listItems">Elite Membership</li>
          <li className="listItems">Return</li>
        </ul>
        <ul className="list">
          <a href="" className="listTitle">
            Customer Service
          </a>
          <li className="listItems">Investor Relations</li>
          <li className="listItems">Press Center</li>
          <li className="listItems">Wrong Shipping</li>
        </ul>
      </div>
    </div>
  );
};
