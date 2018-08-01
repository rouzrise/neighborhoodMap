import React from 'react';
import './App.css';
import { GoogleApiWrapper } from 'google-maps-react';
import Map from './Components/Map';
import Navbar from './Components/Navbar';
import Sidemenu from './Components/Sidemenu';


class App extends React.Component {

  state = {
    styleMap: {marginLeft: 0},
    styleSideMenu: {width: 0},
    locations: [
      {
        title: 'Gorky Park',
        location: { lat: 55.729601, lng: 37.597143 }
      },
      {
        title: 'Red Square',
        location: { lat: 55.753584, lng: 37.62247 }
      },
      {
        title: 'Novodevichy Park',
        location: { lat: 55.728722, lng: 37.558618 }
      },
      {
        title: "Vorobyovy Gory",
        location: { lat: 55.711593, lng: 37.561049 }
      },
      {
        title: 'Tretyakov Gallery',
        location: { lat: 55.741389, lng: 37.620864 }
      },
      {
        title: 'Sokolniki Park',
        location: { lat: 55.795065, lng: 37.676581 }
      }
    ]
  }

  // function to open/close sidemenu
  toggleSideMenu = () => {
    if (this.state.styleMap.marginLeft === 0 && this.state.styleSideMenu.width === 0) {
      this.setState({
        styleMap: {marginLeft: '250px'},
        styleSideMenu: {width: '250px'}
      })
    }
    else{
      this.setState({
        styleMap: {marginLeft: 0},
        styleSideMenu: {width: 0}
      })
    }
  }

  render() {
    return (
      <div className="container">
      {/* Add Map Component */}
        <Map google={this.props.google} styleMap={this.state.styleMap} locations={this.state.locations}/>
       {/* Add Navbar component */}
        <Navbar toggleSideMenu={this.toggleSideMenu}/>
        {/* add Sidemenu component */}
        <Sidemenu styleSideMenu={this.state.styleSideMenu} toggleSideMenu={this.toggleSideMenu} locations={this.state.locations}/>
      </div>
    );
  }
}

//functionality from https://www.npmjs.com/package/google-maps-react
export default GoogleApiWrapper({
  apiKey: "AIzaSyA0Y4NitHWpQhi4poD85XyNZjYDqLk1oEg"
})(App);
