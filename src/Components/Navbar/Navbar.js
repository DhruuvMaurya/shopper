import React from "react";
import "./Navbar.css";
import cart from "./cart.png";
import search from "./search.png";
import logo from "./logo.svg";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="wrapper">
          <div className="left-container">
            <span className="language">En</span>
            <div className="search-container">
              <input placeholder="search" />
              <img src={search} alt="search" />
            </div>
          </div>

          <div className="center-container">
            <img className="logo-img" src={logo} alt="Shopper." />
          </div>

          <div className="right-container">
            <div className="menu-items">
              <a>Register</a>
              <a>Sign In</a>
              <img src={cart} alt="cart" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
