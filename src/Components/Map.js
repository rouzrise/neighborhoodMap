import React, { Component } from "react";

class Map extends Component {
  state = {
    map: {},
    markers: [],
    // infoWindow: new window.google.maps.InfoWindow
  };

  // function to initialize map
  initMap() {
    this.state.map = new window.google.maps.Map(
      document.getElementById("map"),
      {
        center: { lat: 55.755826, lng: 37.6173 },
        zoom: 12
      }
    );

    this.state.infoWindow = new window.google.maps.InfoWindow();

    this.createMarkers();
  
  }

  createMarkers() {
    let markers=[];
    //loop to create markers
    for (let i = 0; i < this.props.locations.length; i++) {
      let marker = new window.google.maps.Marker({
        position: this.props.locations[i].location,
        title: this.props.locations[i].title,
        id: i,
        map: this.state.map,
        animation: window.google.maps.Animation.DROP
      });
      // marker.setMap(this.state.map)
      markers.push(marker);  
      // let infowindow= this.state.infoWindow;
      // let showInfoWindow = this.showInfoWindow();

      marker.addListener("click", () => {
        this.showInfoWindow(marker, this.state.infoWindow);
      });

      this.setState ({
        markers: markers
      }
      )
    }
  }

  //function to create marker icon - USE IT LATER when finishing the appearance of project
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
    if (infoWindow.marker !== marker) {
      infoWindow.setContent("");
      infoWindow.marker = marker;
      infoWindow.addListener("closeclick", function() {
        infoWindow.marker = null;
      });
      infoWindow.setContent(`<div>${marker.title}</div>`);
    }    
  }

  // onClickListItem() {

  //   const openInfoWindow = (e) => {
  //     const index = this.state.markers.findIndex(marker => marker.title.toLowerCase() === e.target.innerText.toLowerCase())
  //     let newMarker = this.state.markers[index]
  //     let newInfoWindow = this.state.infoWindow
  //     console.log(newMarker, newInfoWindow)
  //     console.log(this.showInfoWindow)
     
  //     this.showInfoWindow(newMarker, newInfoWindow)
  //         }

  //   document.getElementById('list').addEventListener('click', (e) => {
  //     if (e.target && e.target.nodeName === 'LI') {
  //       openInfoWindow(e);
  //     }
  //   });

    
  // }

  componentDidMount() {
    // should be invoked immediately after a component is mounted
    this.initMap();
    // this.onClickListItem();
  }
  render() {
    return <div id="map" style={this.props.styleMap} />;
  }
}

export default Map;
