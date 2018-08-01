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
        title: 'Leningradsky Railway Terminal',
        location: { lat: 55.776028, lng: 37.655425  }
      },
      {
        title: 'Kazansky Rail Terminal',
        location: { lat: 55.773603, lng: 37.656759 }
      },
      {
        title: 'Yaroslavsky Rail Terminal',
        location: { lat: 55.776785, lng: 37.657338 }
      },
      {
        title: "Kievsky Rail Terminal",
        location: { lat: 55.743087, lng: 37.56673 }
      },
      {
        title: 'Paveletsky Railway Station',
        location: { lat: 55.729746, lng: 37.639349 }
      },
      {
        title: 'Rizhsky Rail Terminal',
        location: { lat: 55.793159, lng: 37.632583 }
      },
      {
        title: 'Belorussky Rail Terminal',
        location: { lat: 55.776913, lng: 37.581465 }
      },
      {
        title: 'Kursky Rail Terminal',
        location: { lat: 55.75735474979769, lng: 37.6605351655094 }
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
