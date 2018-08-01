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
            <h1>Find Train Station</h1>
            <div className='filter'><input id='filter' placeholder='Filter...' type='text' value={this.props.query}
                        onChange={(e) =>this.props.updateQuery(e.target.value)}/></div>
            <div>
              <List locations = {this.props.locations} list={this.props.list}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
