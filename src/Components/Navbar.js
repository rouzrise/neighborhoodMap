import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar">
        <span class="open-slide">
          <a href="#" onclick="openSlideMenu()">
            <svg width="30" height="30">
              <path d="M0,5 30,5" stroke="#fff" stroke-width="3" />
              <path d="M0,14 30,14" stroke="#fff" stroke-width="3" />
              <path d="M0,23 30,23" stroke="#fff" stroke-width="3" />
            </svg>
          </a>
        </span>
      </nav>
    );
  }
}

export default Navbar;
