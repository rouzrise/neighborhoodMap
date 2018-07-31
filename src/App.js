import React from "react";
import "./App.css";
import { GoogleApiWrapper } from "google-maps-react";
import Map from "./Components/Map";
import Navbar from "./Components/Navbar";
import Sidemenu from "./Components/Sidemenu";


class App extends React.Component {
  render() {
    return (
      <div class="container">
        <Map google={this.props.google} />
        <Navbar />
        <Sidemenu />
      </div>
    );
  }
}

//functionality from https://www.npmjs.com/package/google-maps-react
export default GoogleApiWrapper({
  apiKey: "AIzaSyA0Y4NitHWpQhi4poD85XyNZjYDqLk1oEg"
})(App);
