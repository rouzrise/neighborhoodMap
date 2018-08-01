import React, { Component } from 'react';

class MarkerList extends Component {

    createMarker() {
              let marker = new window.google.maps.Marker({
                position: this.props.locations[0].location,
                title: this.props.locations[0].title,
                id: 1,
                map: this.state.map,
                animation: window.google.maps.Animation.DROP
              });

                marker.setMap(this.state.map)
              this.state.markers.push(marker);
            }
  

  render() {
    return null
  }
}

export default MarkerList;
