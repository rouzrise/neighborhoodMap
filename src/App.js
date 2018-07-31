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
        title: "Vodonapornaya Bashnya Raushena",
        location: { lat: 54.943433, lng: 20.15463 }
      },
      {
        title: 'Villa "Rosenhaus"',
        location: { lat: 54.940407, lng: 20.156668 }
      },
      {
        title: 'Skulptura "Nesushchaya Vodu"',
        location: { lat: 54.941844, lng: 20.155385 }
      },
      {
        title: "Church of St. Seraphim of Sarov",
        location: { lat: 54.940751, lng: 20.162496 }
      },
      {
        title: "Baptistskaya Kapella Raushena",
        location: { lat: 54.935728, lng: 20.161672 }
      },
      {
        title: "Zheleznodorozhnyy Vokzal Raushen-Ort",
        location: { lat: 54.933523, lng: 20.160724 }
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
