import React, { Component } from "react";

class Map extends Component {
  //   state = {
  //     locations: [
  //       { title: 'Vodonapornaya Bashnya Raushena', location: { lat: 54.943433, lng: 20.15463 } },
  //       { title: 'Villa "Rosenhaus"', location: { lat: 54.940407, lng: 20.156668 } },
  //       { title: 'Skulptura "Nesushchaya Vodu"', location: { lat: 54.941844, lng: 20.155385 } },
  //       { title: 'Church of St. Seraphim of Sarov', location: { lat: 54.940751, lng: 20.162496 } },
  //       { title: 'Baptistskaya Kapella Raushena', location: { lat: 54.935728, lng: 20.161672 } },
  //       { title: 'Zheleznodorozhnyy Vokzal Raushen-Ort', location: { lat: 54.933523, lng: 20.160724 } }
  //   ]
  //   }

  initMap() {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 54.939456, lng: 20.158471 },
      zoom: 15
    });
  }

  componentDidMount() {
    this.initMap();
  }
  render() {
    return <div id="map"></div>;
  }
}

export default Map;
