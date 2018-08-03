import React from "react";
import PropTypes from "prop-types";

//functional (stateless) component
const List = ({ locations }) => {
  return (
    //renders itemList of locations under search input field in sidemenu
    <ul id="list">
      {locations.filter(location => location.visible === true).map(location => {
        return (
          <li tabIndex="2" key={location.title}>
            {location.title}
          </li>
        );
      })}
    </ul>
  );
};

List.propTypes = {
  locations: PropTypes.array
};

export default List;
