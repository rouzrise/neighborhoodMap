import React from 'react'
import './App.css'
import {GoogleApiWrapper} from 'google-maps-react';
import Map from './Components/Map'


class App extends React.Component {

  render() {
    return (
      <Map google={this.props.google}/>
    )
  }
}

//functionality from https://www.npmjs.com/package/google-maps-react
export default GoogleApiWrapper({
  apiKey: 'AIzaSyA0Y4NitHWpQhi4poD85XyNZjYDqLk1oEg'
})(App)
