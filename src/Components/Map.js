import React, { Component } from "react";
import Navbar from "./Navbar";
import Sidemenu from "./Sidemenu";
import yellowMarker from "./../icons/yellowMarker.svg"; //imports icon for marker from folder
import PropTypes from "prop-types";
import redMarker from "./../icons/redMarker.svg"; 

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
    query: "",
    ariaHiddenSideMenu: "true" //state - if true  - sets side menu aria-hidden(if false - on the contrary)
  };

  // function to initialize map
  initMap() {
    if (this.props && this.props.google) {
      this.state.map = new window.google.maps.Map(
        document.getElementById("map"),
        {
          center: { lat: 55.755826, lng: 37.6173 },
          zoom: 12,
          styles:
          [
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f7f1df"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#d0e3b4"
                    }
                ]
            },
            {
                "featureType": "landscape.natural.terrain",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.business",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.medical",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#fbd3da"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#bde6ab"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffe15f"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#efd151"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "black"
                    }
                ]
            },
            {
                "featureType": "transit.station.airport",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#cfb2db"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#a2daf2"
                    }
                ]
            }
        ]
        }
      );
    }

    let infoWindow = new window.google.maps.InfoWindow();
    this.setState({
      infoWindow
    });

    this.createMarkers();
  }

  //function to create markers
  createMarkers() {
    let markers = [];
    //set icons
    let mouseOverIcon = this.makeMarkerIcon(yellowMarker);
    let mouseOutIcon = this.makeMarkerIcon(redMarker);
    let bounds = new window.google.maps.LatLngBounds();
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

      //set bounds
      bounds.extend(marker.position);

      //add listener to marker to show infowindow on click event
      marker.addListener("click", () => {
        this.showInfoWindow(marker, this.state.infoWindow);
      });

      //add listener to marker to change icon on mouseover event
      marker.addListener("mouseover", function() {
        this.setIcon(mouseOverIcon);
        // console.log(yellowMarker);
      });
      //add listener to marker to change icon on mouseoutevent
      marker.addListener("mouseout", function() {
        if (this.animating === false) {
        this.setIcon(mouseOutIcon);
        }
      });

      markers.push(marker);

      this.setState({
        markers: markers
      });
    }

    //set bounds for map
    this.state.map.fitBounds(bounds);
  }
  //function to create marker icon
  makeMarkerIcon(markerIcon) {
    let markerImage = new window.google.maps.MarkerImage(markerIcon, null, /* size is determined at runtime */
      null, /* origin is 0,0 */
      null, /* anchor is bottom center of the scaled image */
      new window.google.maps.Size(42, 68));
    return markerImage;
  }

  //function to set infoWindow
  showInfoWindow(marker, infoWindow) {
    let mouseOverIcon = this.makeMarkerIcon(yellowMarker);
    let mouseOutIcon = this.makeMarkerIcon(redMarker);

    if (infoWindow.marker !== marker) {
      if (infoWindow.marker !== undefined && infoWindow.marker !== null) {
        infoWindow.marker.setAnimation(null);
        infoWindow.marker.setIcon(mouseOutIcon);
      }
      infoWindow.setContent("");

      infoWindow.marker = marker;
      marker.setIcon(mouseOverIcon);
      marker.setAnimation(window.google.maps.Animation.BOUNCE);
      // console.log(marker.animation);
      infoWindow.addListener("closeclick", function() {
        marker.setIcon(mouseOutIcon);
        infoWindow.marker = null;
        marker.setAnimation(null);
      });
      // console.log(this.props.foursquareData)
      //checks for coincidence with data received from Foursquare API to find the item to populate infowindow with additional info
      const index = this.props.foursquareData.findIndex(
        elem =>
          elem.name.substring(0, 3).toLowerCase() ===
          marker.title.substring(0, 3).toLowerCase()
      );
      // console.log(this.props.foursquareData);
      let foursquareItem = this.props.foursquareData[index];

      //sets content of infowindow
      infoWindow.setContent(
        this.props.foursquareError
          ? //if there was an error in requesting data from Foursquare API we set this content to infowindow not to crash UI
            `<div tabIndex="1" className="infowindowContent"><div id="markerTitle">${
              marker.title
            }</div>
        <div>Address: There was an error on loading info from Foursquare. Try reload page later. </div>
        <a tabIndex="1" href=https://foursquare.com/ target="_blank" rel="nofollow noopener" className="linkTitle">Look at me on Foursquare</a></div>`
          : //if there was no error in requesting data from Foursquare API we set this content to Infowindow using data from Foursquare API
            `<div tabIndex="1" className="infowindowContent"><div id="markerTitle">${
              marker.title
            }</div>
      <div>Address: ${foursquareItem.location.address}</div>
      <a tabIndex="1" href=https://foursquare.com/v/foursquare-hq/${
        foursquareItem.id
      } target="_blank" rel="nofollow noopener" className="linkTitle">Look at me on Foursquare</a></div>`
      );
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
        styleSideMenu: { width: "250px" },
        ariaHiddenSideMenu: "false" //if sidemenu open
      });
    } else {
      this.setState({
        styleMap: { marginLeft: 0 },
        styleSideMenu: { width: 0 },
        ariaHiddenSideMenu: "true" //if sidemenu closed
      });
    }
  };

  //function to open Infowindow of location(marker) by clicking corresponding listItem
  onClickListItem() {
    const openInfoWindow = e => {
      const index = this.state.markers.findIndex(
        marker =>
          marker.title.toLowerCase() === e.target.innerText.toLowerCase()
      );
      let newMarker = this.state.markers[index];
      let newInfoWindow = this.state.infoWindow;

      this.showInfoWindow(newMarker, newInfoWindow);
      // console.log(newMarker);
    };

    //we catch event on clicking the list by checking if we clicked withing <ul> and nodeName of event target was li (technique from 3rd project)
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

  gm_authFailure() {
    alert("Hello world");
  }

  componentDidCatch() {
    this.gm_authFailure();
  }
  render() {
    //Destructuring
    const {
      locations,
      query,
      markers,
      infoWindow,
      styleSideMenu,
      styleMap,
      ariaHiddenSideMenu
    } = this.state;

    //functionality for filtering listItems and markers
    if (query) {
      locations.forEach((location, index) => {
        if (location.title.toLowerCase().includes(query.toLowerCase())) {
          //checks if markers and list coincide with the query(based on locations array)
          markers[index].setVisible(true); //influences markers showing on page
          location.visible = true; //influences listItems showing on sideMenu under the filter as soon as our items list is created based on location array
        } else {
          //if no coincidence - closes previousle opened infowindows for markers that won't be shown on page
          if (infoWindow.marker === markers[index]) {
            infoWindow.close();
          }
          markers[index].setVisible(false); //influences markers showing on page ( sets nonvisible)
          location.visible = false; //influences listItems showing on sideMenu under the filter  ( sets nonvisible)
        }
      });
    }
    //if there is no query
    else {
      locations.forEach((location, index) => {
        if (markers.length && markers[index]) {
          markers[index].setVisible(true); //influences markers showing on page
          location.visible = true; //influences listItems showing on sideMenu under the filter
        }
      });
    }

    return (
      <div className="container" role="main">
        <div id="map" style={styleMap} role="application" />

        <Navbar toggleSideMenu={this.toggleSideMenu} />

        <Sidemenu
          styleSideMenu={styleSideMenu}
          toggleSideMenu={this.toggleSideMenu}
          locations={locations}
          query={query}
          updateQuery={this.updateQuery}
          markers={markers}
          ariaHiddenSideMenu={ariaHiddenSideMenu}
        />
      </div>
    );
  }
}

Map.propTypes = {
  foursquareData: PropTypes.array
};

export default Map;
