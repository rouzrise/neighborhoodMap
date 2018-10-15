import React from "react";
import PropTypes from "prop-types";

//functional (stateless) component
const Navbar = ({ toggleSideMenu }) => {
  return (
    //renders navbar
    <nav className="navbar">
      <span className="open-slide">
        <a href="#" onClick={toggleSideMenu}>
          <svg width="30" height="30">
            <path d="M0,5 30,5" stroke="#000" strokeWidth="2" />
            <path d="M0,14 30,14" stroke="#000" strokeWidth="2" />
            <path d="M0,23 30,23" stroke="#000" strokeWidth="2" />
          </svg>
        </a>
      </span>
      <div className="appName">Moscow Railway Stations</div>
    </nav>
  );
};

Navbar.propTypes = {
  toggleSideMenu: PropTypes.func
};

export default Navbar;
