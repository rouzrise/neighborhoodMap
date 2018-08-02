import React, { Component } from "react";
import Navbar from "./Navbar";
import Sidemenu from "./Sidemenu";
import yellowMarker from "./../icons/markerYellow.png";
import redMarker from "./../icons/markerRed.png";

class Map extends Component {
  state = {
    locations: [
      {
        title: "Leningradsky Railway Terminal",
        location: { lat: 55.776028, lng: 37.655425 },
        visible: true
      },
      {
        title: "Kazansky Rail Terminal",
        location: { lat: 55.773603, lng: 37.656759 },
        visible: true
      },
      {
        title: "Yaroslavsky Rail Terminal",
        location: { lat: 55.776785, lng: 37.657338 },
        visible: true
      },
      {
        title: "Kievsky Rail Terminal",
        location: { lat: 55.743087, lng: 37.56673 },
        visible: true
      },
      {
        title: "Paveletsky Railway Station",
        location: { lat: 55.729746, lng: 37.639349 },
        visible: true
      },
      {
        title: "Rizhsky Rail Terminal",
        location: { lat: 55.793159, lng: 37.632583 },
        visible: true
      },
      {
        title: "Belorussky Rail Terminal",
        location: { lat: 55.776913, lng: 37.581465 },
        visible: true
      },
      {
        title: "Kursky Rail Terminal",
        location: { lat: 55.757409, lng: 37.661102 },
        visible: true
      }
    ],
    map: {},
    markers: [],
    styleMap: { marginLeft: 0 },
    styleSideMenu: { width: 0 },
    infoWindow: {},
    query: ""
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
    let markers = [];
    let mouseOverIcon = this.makeMarkerIcon(yellowMarker);
    let mouseOutIcon = this.makeMarkerIcon(redMarker);
    //loop to create markers
    for (let i = 0; i < this.state.locations.length; i++) {
      let marker = new window.google.maps.Marker({
        position: this.state.locations[i].location,
        title: this.state.locations[i].title,
        id: i,
        icon: mouseOutIcon,
        map: this.state.map,
        animation: window.google.maps.Animation.DROP
      });

      // let infowindow= this.state.infoWindow;
      // let showInfoWindow = this.showInfoWindow();
      marker.addListener("click", () => {
        this.showInfoWindow(marker, this.state.infoWindow);
      });

      marker.addListener("mouseover", function() {
        this.setIcon(mouseOverIcon);
        console.log(yellowMarker);
      });
      marker.addListener("mouseout", function() {
        this.setIcon(mouseOutIcon);
      });

      // marker.setMap(this.state.map)
      markers.push(marker);

      this.setState({
        markers: markers
      });
    }
  }
  //function to create marker icon 
  makeMarkerIcon(markerIcon) {
    let markerImage = new window.google.maps.MarkerImage(markerIcon);
    return markerImage;
  }

  showInfoWindow(marker, infoWindow) {
    if (infoWindow.marker !== marker) {
      console.log(infoWindow);
      if (infoWindow.marker !== undefined && infoWindow.marker !== null) {
        infoWindow.marker.setAnimation(null);
      }
      infoWindow.setContent("");

      infoWindow.marker = marker;
      marker.setAnimation(window.google.maps.Animation.BOUNCE);
      console.log(marker.animation);
      infoWindow.addListener("closeclick", function() {
        infoWindow.marker = null;
        marker.setAnimation(null);
      });
      // console.log(this.props.foursquareData)
      const index = this.props.foursquareData.findIndex(
        elem =>
          elem.name.substring(0, 3).toLowerCase() ===
          marker.title.substring(0, 3).toLowerCase()
      );
      console.log(this.props.foursquareData);
      let foursquareItem = this.props.foursquareData[index];
      infoWindow.setContent(`<div id='markerTitle'>${marker.title}</div>
      <div>Address: ${foursquareItem.location.address}</div>
      <a href=https://foursquare.com/v/foursquare-hq/${
        foursquareItem.id
      } target='_blank' className='linkTitle'>Look at me on Foursquare</a>`);
    }
    infoWindow.open(this.state.map, marker);
  }

  // function to open/close sidemenu
  toggleSideMenu = () => {
    if (
      this.state.styleMap.marginLeft === 0 &&
      this.state.styleSideMenu.width === 0
    ) {
      this.setState({
        styleMap: { marginLeft: "250px" },
        styleSideMenu: { width: "250px" }
      });
    } else {
      this.setState({
        styleMap: { marginLeft: 0 },
        styleSideMenu: { width: 0 }
      });
    }
  };

  onClickListItem() {
    const openInfoWindow = e => {
      const index = this.state.markers.findIndex(
        marker =>
          marker.title.toLowerCase() === e.target.innerText.toLowerCase()
      );
      let newMarker = this.state.markers[index];
      let newInfoWindow = this.state.infoWindow;
      console.log(newMarker, newInfoWindow);
      console.log(this.showInfoWindow);

      this.showInfoWindow(newMarker, newInfoWindow);
      console.log(newMarker);
    };

    document.getElementById("list").addEventListener("click", e => {
      if (e.target && e.target.nodeName === "LI") {
        openInfoWindow(e);
        // console.log(e.target)
      }
    });
  }

  updateQuery = e => {
    this.setState({ query: e.target.value }); //this is done so that everything you print in searchbox could be reflected on the page
  };

  componentDidMount() {
    // should be invoked immediately after a component is mounted
    this.initMap();
    this.onClickListItem();
  }
  render() {
    const { locations, query, markers, infoWindow, styleSideMenu, styleMap } = this.state
    if (query) {
      locations.forEach((location, index) => {
        if (location.title.toLowerCase().includes(query.toLowerCase())) {
          markers[index].setVisible(true);
          location.visible = true;
        } else {
          if (infoWindow.marker === markers[index]) {
            infoWindow.close();
          }
          markers[index].setVisible(false);
          location.visible = false;
        }
      });
    } else {
      locations.forEach((location, index) => {
        if (markers.length && markers[index]) {
          markers[index].setVisible(true);
          location.visible = true;
        }
      });
    }

    return (
      <div className="container">
        <div id="map" style={styleMap} />

        <Navbar toggleSideMenu={this.toggleSideMenu} />

        <Sidemenu
          styleSideMenu={styleSideMenu}
          toggleSideMenu={this.toggleSideMenu}
          locations={locations}
          query={query}
          updateQuery={this.updateQuery}
          markers={markers}
        />
      </div>
    );
  }
}

export default Map;
