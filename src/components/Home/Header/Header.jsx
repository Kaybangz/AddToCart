import React from "react";
import "./styles.css";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = ({ cartItems }) => {
  return (
    <header className="header__container">
      <nav className="container nav__items">
        <div>
          <h2>HoodNvgga</h2>
        </div>

        {/* LINK TO CART ITEMS */}
        <div>
          <Link to="./cart">
            <button type="button" className="btn position-relative">
              <BsCart4 className="cart__icon" />
              <span className="pill position-absolute top-0 start-100 translate-middle badge rounded-pill">
                {cartItems.length}
              </span>
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
