import React, { Component } from "react";
import PropTypes from 'prop-types';


class List extends Component {
  render() {
    //DESTRUCTURING
    const { locations } = this.props;

    return (
      <ul id="list">
        {locations
          .filter(location => location.visible === true)
          .map(location => {
            return <li key={location.title}>{location.title}</li>;
          })}
      </ul>
    );
  }
}

export default List;
