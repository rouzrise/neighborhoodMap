import React, { Component } from "react";
import List from "./List";
import PropTypes from "prop-types";

class SideMenu extends Component {
  render() {
    const {
      styleSideMenu,
      toggleSideMenu,
      query,
      updateQuery,
      locations,
      markers,
      ariaHiddenSideMenu
    } = this.props

  return (
    //renders sidemenu
    <div
      id="side-menu"
      className="side-nav"
      style={styleSideMenu}
      aria-hidden={ariaHiddenSideMenu}
    >
      <a href="#" className="btn-close" onClick={toggleSideMenu}>
        &times;
      </a>
      <div className="options-box">
        <h1>Find Train Station</h1>
        <div className="filter" role="search" aria-labelledby="filter">
          <input
            id="filter"
            placeholder="Filter..."
            type="text"
            value={query}
            onChange={e => updateQuery(e)}
            ref = {(input) => {this.stationInput = input;}}//is used to set focus in componentDidMount method
          />
        </div>
        <div>
          <List locations={locations} markers={markers} />
        </div>
      </div>
    </div>
  );
};
}

SideMenu.propTypes = {
  styleSideMenu: PropTypes.object,
  toggleSideMenu: PropTypes.func,
  query: PropTypes.string,
  updateQuery: PropTypes.func,
  locations: PropTypes.array,
  markers: PropTypes.array,
  ariaHiddenSideMenu: PropTypes.string
};

export default SideMenu;
