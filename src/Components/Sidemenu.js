import React from "react";
import List from "./List";
import PropTypes from "prop-types";

const SideMenu = ({
  styleSideMenu,
  toggleSideMenu,
  query,
  updateQuery,
  locations,
  markers,
  ariaHiddenSideMenu
}) => {
  return (
    <div id="side-menu" className="side-nav" style={styleSideMenu} aria-hidden={ariaHiddenSideMenu}>
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
            />
          </div>
          <div>
            <List locations={locations} markers={markers} />
          </div>
        </div>
    </div>
  );
};

SideMenu.propTypes = {
  styleSideMenu: PropTypes.object,
  toggleSideMenu: PropTypes.func,
  query: PropTypes.string,
  updateQuery: PropTypes.func,
  locations: PropTypes.array,
  markers: PropTypes.array
};

export default SideMenu;
