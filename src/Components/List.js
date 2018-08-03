import React from "react";
import PropTypes from "prop-types";

const List = ({ locations }) => {
  return (
    <ul id="list">
      {locations.filter(location => location.visible === true).map(location => {
        return <li tabIndex="2" key={location.title}>{location.title}</li>;
      })}
    </ul>
  );
};

List.propTypes = {
  locations: PropTypes.array
};

export default List;
