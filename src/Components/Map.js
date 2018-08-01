import React, { Component } from 'react';

class Map extends Component {
  state = {
    map: {},
    markers: [],
    infoWindow: {}
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

    this.state.infoWindow = new window.google.maps.InfoWindow();

    //loop to create
    for (let i = 0; i < this.props.locations.length; i++) {
      let marker = new window.google.maps.Marker({
        position: this.props.locations[i].location,
        title: this.props.locations[i].title,
        id: i,
        map: this.state.map,
        animation: window.google.maps.Animation.DROP
      });

    // НАЧАТЬ ОТСЮДА - С ДОБАВЛЕНИЯ ИНФОВИНДОУ
     

      // marker.setMap(this.state.map)
      this.state.markers.push(marker);

        // let infowindow= this.state.infoWindow;
        // let showInfoWindow = this.showInfoWindow();
  
       marker.addListener('click', () => {
        this.showInfoWindow(marker, this.state.infoWindow)
       });

    }

   
  }

  count() {
    console.log('3');
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

  showInfoWindow(marker, infoWindow) {
    if (infoWindow.marker != marker) {
      infoWindow.setContent('');
      infoWindow.marker = marker;
      infoWindow.addListener('closeclick', function () {
        infoWindow.marker = null;
      });
          infoWindow.setContent(`<div>${marker.title}</div>`);
      }

      infoWindow.open(this.state.map, marker);
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
