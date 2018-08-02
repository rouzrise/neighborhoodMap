import React from "react";
import "./App.css";
import { GoogleApiWrapper } from "google-maps-react";
import $ from "jquery";
import Map from "./Components/Map";
// import PropTypes from 'prop-types';


class App extends React.Component {
  state = {
    foursquareData: []
  };

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
        console.log(err);
      }
    });
  }

  componentDidMount() {
    this.getFoursquareAPI();
  }

  render() {
    //Destructuring
    const { google } = this.props;
    const { foursquareData } = this.state;
    return (
      <div className="container">
        {/* Add Map Component */}
        <Map google={google} foursquareData={foursquareData} />
      </div>
    );
  }
}

//functionality from https://www.npmjs.com/package/google-maps-react
export default GoogleApiWrapper({
  apiKey: "AIzaSyA0Y4NitHWpQhi4poD85XyNZjYDqLk1oEg"
})(App);
