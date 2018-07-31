import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div id="side-menu" class="side-nav">
        <a href="#" class="btn-close">
          &times;
        </a>
        <div class="container">
          <div class="options-box">
            <h1>Find Sightseeings</h1>
            <div>
              <input id="show-listings" type="button" value="Show Markers" />
              <input id="hide-listings" type="button" value="Hide Markers" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
