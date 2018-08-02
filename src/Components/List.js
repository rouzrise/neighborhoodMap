import React, { Component } from "react";

class List extends Component {
  render() {
    return <ul id="list">
    {
      this.props.locations.filter(location => (location.visible === true)).map((location) => {
        return <li key ={location.title}>{location.title}</li>})
      }
   
    </ul>;
  }
}

export default List;
