import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [backgroundChange, setBackgroundChange] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const changeNavbarBackground = () => {
    if (window.scrollY >= 80) {
      setBackgroundChange(true);
    } else {
      setBackgroundChange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarBackground);

  return (
    <nav className={backgroundChange ? "menu_fixed" : "navbar-header"}>
      <div className="nav-container">
        <div className="navbar-logo">
          <a href="/" className="navbar-brand">
            Hope Solutions
          </a>
        </div>
        <div className="navbar-menu">
          <span onClick={toggle} className="nav-toggler-icon">
            {isOpen ? <FiX style={{ textAlign: "right" }} /> : <FaBars />}
          </span>
          <ul className={isOpen ? "navbar-list active" : "navbar-list"}>
            <li className="navbar-list-items">
              <a href="/main" className="nav-link">
                Home
              </a>
            </li>
            <li className="navbar-list-items">
              <a href="/about" className="nav-link">
                About
              </a>
            </li>
            <li className="navbar-list-items">
              <a href="/help" className="nav-link">
                Study
              </a>
            </li>
            <li className="navbar-list-items">
              <a href="/gallery" className="nav-link">
                News
              </a>
            </li>
            <li className="navbar-list-items">
              <a href="/notes" className="nav-link">
                Story
              </a>
            </li>
            <li className="navbar-list-items">
              <a href="/#contact" className="nav-link">
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
