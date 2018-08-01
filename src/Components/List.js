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
    return <ul id="list">
    <li><input placeholder='Search...'/></li>
    {this.state.list}
    </ul>;
  }
}

export default List;
