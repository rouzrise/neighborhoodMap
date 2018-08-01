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
     
      // let infowindow= this.state.infoWindow;
      // let showInfoWindow = this.showInfoWindow();

      marker.addListener("click", () => {
        this.showInfoWindow(marker, this.state.infoWindow);
      });

       // marker.setMap(this.state.map)
       markers.push(marker);  

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
      console.log(infoWindow)
      if (infoWindow.marker !== undefined && infoWindow.marker !== null) {
      infoWindow.marker.setAnimation(null);
    }
      infoWindow.setContent("");
      
      infoWindow.marker = marker;
      marker.setAnimation(window.google.maps.Animation.BOUNCE)
      console.log(marker.animation)
      infoWindow.addListener("closeclick", function() {
        infoWindow.marker = null;
        marker.setAnimation(null)
      });
      // console.log(this.props.foursquareData)
      const index = this.props.foursquareData.findIndex(elem => elem.name.substring(0,3).toLowerCase() === marker.title.substring(0,3).toLowerCase())
      console.log(this.props.foursquareData)
      let foursquareItem = this.props.foursquareData[index];
      infoWindow.setContent(`<div id='markerTitle'>${marker.title}</div>
      <div>Address: ${foursquareItem.location.address}</div>
      <a href=https://foursquare.com/v/foursquare-hq/${foursquareItem.id} target='_blank' className='linkTitle'>Look at me on Foursquare</a>`);
    }    
    infoWindow.open(this.state.map, marker);
  }


  onClickListItem() {

    const openInfoWindow = (e) => {
      const index = this.state.markers.findIndex(marker => marker.title.toLowerCase() === e.target.innerText.toLowerCase())
      let newMarker = this.state.markers[index]
      let newInfoWindow = this.state.infoWindow
      console.log(newMarker, newInfoWindow)
      console.log(this.showInfoWindow)
     
     
      this.showInfoWindow(newMarker, newInfoWindow)
      console.log(newMarker)
      
          }

    document.getElementById('list').addEventListener('click', (e) => {
      if (e.target && e.target.nodeName === 'LI') {
        openInfoWindow(e);
        // console.log(e.target)
      }
    });

    
  }

  componentDidMount() {
    // should be invoked immediately after a component is mounted
    this.initMap();
    this.onClickListItem();
  }
  render() {
    return <div id="map" style={this.props.styleMap} />;
  }
}

export default Map;
