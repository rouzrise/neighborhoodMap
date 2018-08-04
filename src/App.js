import React, { Component } from "react";
import "./App.css";
import { GoogleApiWrapper } from "google-maps-react";
import $ from "jquery";
import Map from "./Components/Map";
// import PropTypes from 'prop-types';

class App extends Component {
  state = {
    foursquareData: [],
    foursquareError: false,
    errorOnLoadingMap: false
  };

  //function to download 3d-party API - Foursquare API
  getFoursquareAPI() {
    $.ajax({
      url:
        "https://api.foursquare.com/v2/venues/search?ll=55.755826,37.6173&query=train&intent=browse&radius=10000&client_id=XLS14R0FF13HLWSQTW3OCWQIGVO22BPT2EBONMVZ54ISGVBQ&client_secret=TPHAWSJ0SEEO1DCZYIRYOJRTXVZFHOTAFIWAFGOJTFNSPRGB&v=20140806&m=foursquare",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ foursquareData: data.response.venues });
      }.bind(this),
      error: function(xhr, status, err) {
        this.setState({ foursquareError: true }); //handling errors on downloading API
      }.bind(this)
    });
  }

  componentDidMount() {
    // should be invoked immediately after a component is mounted
    this.getFoursquareAPI();
    if (window.google === undefined) {
      this.setState({ errorOnLoadingMap: true });
    }
    window.gm_authFailure = () => this.setState({ errorOnLoadingMap: true });
  }

  render() {
    //Destructuring
    const { google } = this.props;
    const { foursquareData, foursquareError, errorOnLoadingMap } = this.state;

    return (
      <div className="container">
        {/* Add Map Component, handle errors on loading using ternary operator cause usual 'if' doesn't work in react return */}
        {errorOnLoadingMap ? (
          //is rendered if there is error in loading map
          <div class="errorOnLoadingMessage">
            Google Map was not loaded due to error
          </div>
        ) : (
          //is rendered if no errors in loading map
          <Map
            google={google}
            foursquareData={foursquareData}
            foursquareError={foursquareError}
          />
        )}
      </div>
    );
  }
}

//functionality from https://www.npmjs.com/package/google-maps-react
export default GoogleApiWrapper({
  apiKey: "AIzaSyA0Y4NitHWpQhi4poD85XyNZjYDqLk1oEg"
})(App);
