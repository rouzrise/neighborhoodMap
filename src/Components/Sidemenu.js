import React, { Component } from 'react';
import List from './List';

class Navbar extends Component {
  render() {
    return (
      <div id="side-menu" className="side-nav" style={this.props.styleSideMenu}>
        <a href="#" className="btn-close" onClick={this.props.toggleSideMenu}>
          &times;
        </a>
        <div className="container">
          <div className="options-box">
            <h1>Find Sightseeings</h1>
            <div>
              <List locations = {this.props.locations} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
