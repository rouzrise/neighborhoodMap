import React from 'react';
import './App.css';
import { GoogleApiWrapper } from 'google-maps-react';
import $ from 'jquery';
import Map from './Components/Map';
import Navbar from './Components/Navbar';
import Sidemenu from './Components/Sidemenu';


class App extends React.Component {

  state = {
    styleMap: {marginLeft: 0},
    styleSideMenu: {width: 0},
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

  // function to open/close sidemenu
  toggleSideMenu = () => {
    if (this.state.styleMap.marginLeft === 0 && this.state.styleSideMenu.width === 0) {
      this.setState({
        styleMap: {marginLeft: '250px'},
        styleSideMenu: {width: '250px'}
      })
    }
    else{
      this.setState({
        styleMap: {marginLeft: 0},
        styleSideMenu: {width: 0}
      })
    }
  }

  updateQuery = (query) => {
    this.setState({query: query}) //this is done so that everything you print in searchbox could be reflected on the page
    
      if (query.trim() === '') {
          this.setState({showingBooks: []})
          console.log(this.state.showingBooks, "print some possible words in query - 'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'")
      }

      else {
        BooksAPI.search(query).then(response => {
        if (response.error) {
          this.setState({showingBooks: []})
                          // automatically making query empty is not ok here as soon as it can confuse user
                          // query: ''}) 
          console.log(this.state.showingBooks, "Error:", response.error, ". If error you see is 'empty query' it means you are searching for invalid words. Please try these ones - 'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'")

        }
        else {
          //No need to do line below as soon as 'none' is automatically set for the book with no book.shelf in Book.js
          // response.map(b => b.shelf='none')
          this.setShelf(response)
          this.setState({showingBooks: response})
          console.log(this.state.showingBooks, 'Hurrah')
        }
      })
    }
   }

  componentDidMount() {
    this.getFoursquareAPI();
  }

  render() {
    return (
      <div className="container">
      {/* Add Map Component */}
        <Map google={this.props.google} styleMap={this.state.styleMap} locations={this.state.locations} foursquareData={this.state.foursquareData}/>
       {/* Add Navbar component */}
        <Navbar toggleSideMenu={this.toggleSideMenu}/>
        {/* add Sidemenu component */}
        <Sidemenu styleSideMenu={this.state.styleSideMenu} toggleSideMenu={this.toggleSideMenu} locations={this.state.locations}/>
      </div>
    );
  }
}

//functionality from https://www.npmjs.com/package/google-maps-react
export default GoogleApiWrapper({
  apiKey: "AIzaSyA0Y4NitHWpQhi4poD85XyNZjYDqLk1oEg"
})(App);
