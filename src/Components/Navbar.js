import React, { Component } from "react";
import PropTypes from 'prop-types';


class Navbar extends Component {
  render() {
    //Destructuring
    const { toggleSideMenu } = this.props;
    return (
      <nav className="navbar">
        <span className="open-slide">
          <a href="#" onClick={toggleSideMenu}>
            <svg width="30" height="30">
              <path d="M0,5 30,5" stroke="#fff" strokeWidth="3" />
              <path d="M0,14 30,14" stroke="#fff" strokeWidth="3" />
              <path d="M0,23 30,23" stroke="#fff" strokeWidth="3" />
            </svg>
          </a>
        </span>
      </nav>
    );
  }
}

Navbar.propTypes = {
  toggleSideMenu: PropTypes.func
}

export default Navbar;
