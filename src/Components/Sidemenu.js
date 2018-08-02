import React, { Component } from "react";
import List from "./List";

class SideMenu extends Component {
  render() {
        //Destructuring
    const {
      styleSideMenu,
      toggleSideMenu,
      query,
      updateQuery,
      locations,
      markers
    } = this.props;

    return (
      <div id="side-menu" className="side-nav" style={styleSideMenu}>
        <a href="#" className="btn-close" onClick={toggleSideMenu}>
          &times;
        </a>
        <div className="container">
          <div className="options-box">
            <h1>Find Train Station</h1>
            <div className="filter">
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
      </div>
    );
  }
}

export default SideMenu;
