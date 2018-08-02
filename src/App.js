import React from 'react';
import './App.css';
import { GoogleApiWrapper } from 'google-maps-react';
import $ from 'jquery';
import Map from './Components/Map';



class App extends React.Component {

  state = {
    
    locations: [
      {
        title: 'Leningradsky Railway Terminal',
        location: { lat: 55.776028, lng: 37.655425  }
      },
      {
        title: 'Kazansky Rail Terminal',
        location: { lat: 55.773603, lng: 37.656759 }
      },
      {
        title: 'Yaroslavsky Rail Terminal',
        location: { lat: 55.776785, lng: 37.657338 }
      },
      {
        title: "Kievsky Rail Terminal",
        location: { lat: 55.743087, lng: 37.56673 }
      },
      {
        title: 'Paveletsky Railway Station',
        location: { lat: 55.729746, lng: 37.639349 }
      },
      {
        title: 'Rizhsky Rail Terminal',
        location: { lat: 55.793159, lng: 37.632583 }
      },
      {
        title: 'Belorussky Rail Terminal',
        location: { lat: 55.776913, lng: 37.581465 }
      },
      {
        title: 'Kursky Rail Terminal',
        location: { lat: 55.757409, lng: 37.661102}
      }
    ],
    foursquareData: [],
    chosenLocation: {}
  }

  getFoursquareAPI(){
    $.ajax({
      url: 'https://api.foursquare.com/v2/venues/search?ll=55.755826,37.6173&query=train&intent=browse&radius=10000&client_id=XLS14R0FF13HLWSQTW3OCWQIGVO22BPT2EBONMVZ54ISGVBQ&client_secret=TPHAWSJ0SEEO1DCZYIRYOJRTXVZFHOTAFIWAFGOJTFNSPRGB&v=20140806&m=foursquare',
      dataType: 'json',
      cache: false,
      success: function(data) {
          this.setState({foursquareData: data.response.venues})
      }.bind(this), 
      error: function(xhr, status, err){
          console.log(err);
      }
    });
  }



  // makeList = () => {
  //   let list = [];
  //   for (let i = 0; i < this.state.locations.length; i++) {
  //     list.push(<li key={i}>{this.state.locations[i].title}</li>);
  //   }
  //   this.setState({
  //     list: list
  //   });
  // };


  // updateQuery = (query) => {
  //   this.setState({query: query}) 
    
  //     if (query.trim() === '') {
  //         this.setState({list: []})
  //     }
  //   }

  //     else {
  //       getFoursquareAPI(){
  //         $.ajax({
  //           url: 'https://api.foursquare.com/v2/venues/search?ll=55.755826,37.6173&query=train&intent=browse&radius=10000&client_id=XLS14R0FF13HLWSQTW3OCWQIGVO22BPT2EBONMVZ54ISGVBQ&client_secret=TPHAWSJ0SEEO1DCZYIRYOJRTXVZFHOTAFIWAFGOJTFNSPRGB&v=20140806&m=foursquare',
  //           dataType: 'json',
  //           cache: false,
  //           success: function(data) {
  //             let result = (data) => 
  //               this.setState({foursquareData: data.response.venues})
  //           }.bind(this), 
  //           error: function(xhr, status, err){
  //               console.log(err);
  //           }
  //         });
  //       }


  componentDidMount() {
    this.getFoursquareAPI();
    // this.makeList()
  }

  render() {

    return (
      <div className="container">
      {/* Add Map Component */}
        <Map google={this.props.google} styleMap={this.state.styleMap} locations={this.state.locations} foursquareData={this.state.foursquareData}/>
       {/* Add Navbar component */}
    
        {/* add Sidemenu component */}
       
      </div>
    );
  }
}

//functionality from https://www.npmjs.com/package/google-maps-react
export default GoogleApiWrapper({
  apiKey: "AIzaSyA0Y4NitHWpQhi4poD85XyNZjYDqLk1oEg"
})(App);
