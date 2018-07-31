import React from "react";
import "./App.css";
import { GoogleApiWrapper } from "google-maps-react";
import Map from "./Components/Map";
import Navbar from "./Components/Navbar";
import Sidemenu from "./Components/Sidemenu";


class App extends React.Component {

  state = {
    styleMap: {marginLeft: 0},
    styleSideMenu: {width: 0}
  }

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
        <Map google={this.props.google} styleMap={this.state.styleMap} />
        <Navbar toggleSideMenu={this.toggleSideMenu}/>
        <Sidemenu styleSideMenu={this.state.styleSideMenu} toggleSideMenu={this.toggleSideMenu}/>
      </div>
    );
  }
}

//functionality from https://www.npmjs.com/package/google-maps-react
export default GoogleApiWrapper({
  apiKey: "AIzaSyA0Y4NitHWpQhi4poD85XyNZjYDqLk1oEg"
})(App);
