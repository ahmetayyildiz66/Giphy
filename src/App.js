import React, { Component } from "react";
import "./App.css";

import axios from "axios";

import Gifs from "./Gifs/Gifs";
import Search from './Search/Search';
import { baseUrl, searchType, apiKey, parameters} from './const/endpoints'

class App extends Component {

  state = {
    gifs: [],
    isSearching: false,
    size: parameters.size
  };

  callbackFunction = (childData) => {
    this.setState({isSearching: childData})
  }

  //https://api.giphy.com/v1/gifs/trending?api_key=JESzJ2z16TUhG1RQOVTs1h21nztW6Pqy&limit=20&rating=G

  url = baseUrl + searchType.trending + apiKey + parameters.limit + this.state.size + parameters.rating;

  fetchMoreData() {
    const limit = this.state.size + 20;
    const url = baseUrl + searchType.trending + apiKey + parameters.limit + limit + parameters.rating;

    this.setState({ size: limit })
    console.log('urll: '+ url);
  

    axios.get(url).then(res => {
      this.setState({ gifs: res.data.data });
    });
    
  }

  onScroll = () => {
    if ((window.innerHeight + window.scrollY + 0.5) >= document.body.offsetHeight ) {
      this.fetchMoreData();
    }
  };

  componentDidMount() {
    console.log('component mount : '+ this.url);
    //First 20 gifs
    axios.get(this.url).then(res => {
      this.setState({ gifs: res.data.data });
    });

    //Event listener
    window.addEventListener("scroll", this.onScroll);
  }

  componentDidUpdate(){
    console.log('component update: '+ this.url);
  }

  render() {
    console.log('Re render: ' + this.state.isSearching);
    const {gifs,isSearching } = this.state;
    return (
      <div className="App">
        <Search parentCallback = { this.callbackFunction }/>
        {
          !isSearching && <Gifs gifs={gifs} />
        }
      </div>
    );
  }
}

export default App;
