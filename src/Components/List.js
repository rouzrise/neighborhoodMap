import React, { Component } from "react";

class List extends Component {
  state = {
    list: []
  };

  makeList = () => {
    let list = [];
    for (let i = 0; i < this.props.locations.length; i++) {
      list.push(<li key={i}>{this.props.locations[i].title}</li>);
    }
    this.setState({
      list: list
    });
  };

  componentDidMount() {
      this.makeList()
  }

  render() {
    const {markers} = this.props
    return <ul id="list">
    {/* {this.state.list} */}
    {
      markers.filter(marker => marker.getVisible()).map((marker) => {
<li key ={marker.id}>{marker.title}</li>})
      }
    
    </ul>;
  }
}

export default List;
