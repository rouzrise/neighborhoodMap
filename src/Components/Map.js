import React, { Component } from 'react';

class Map extends Component {
  state = {
    map: "",
    markers: [],
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
  };

  // function to initialize map
  initMap() {
    this.state.map = new window.google.maps.Map(
      document.getElementById("map"),
      {
        center: { lat: 54.939456, lng: 20.158471 },
        zoom: 15
      }
    );

    //loop to create
    for (let i = 0; i < this.state.locations.length; i++) {
      let marker = new window.google.maps.Marker({
        position: this.state.locations[i].location,
        title: this.state.locations[i].title,
        id: i,
        map: this.state.map,
        animation: window.google.maps.Animation.DROP
      });
      console.log(marker.icon);

      // marker.setMap(this.state.map)
      this.state.markers.push(marker);
    }
  }

  //function to create marker icon
  makeMarkerIcon(markerColor) {
    let markerImage = new window.google.maps.MarkerImage(
      `http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|${markerColor}|40|_|%E2%80%A2`,
      new window.google.maps.Size(21, 34),
      new window.google.maps.Point(0, 0),
      new window.google.maps.Point(10, 34),
      new window.google.maps.Size(21, 34)
    );
    return markerImage;
  }

  componentDidMount() {
    // should be invoked immediately after a component is mounted
    this.initMap();
  }
  render() {
    return <div id="map" style={this.props.styleMap} />;
  }
}

export default Map;
