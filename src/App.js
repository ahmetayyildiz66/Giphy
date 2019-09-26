import React, { Component } from "react";
import "./App.css";

import axios  from 'axios';

import Gifs from "./Gifs/Gifs";


class App extends Component {

  state = {
    gifs: []
  };

  defaultSize = 20;
  url = 'https://api.giphy.com/v1/gifs/trending?api_key=JESzJ2z16TUhG1RQOVTs1h21nztW6Pqy&limit='+this.defaultSize+'&rating=G';

  componentDidMount(){
    axios.get(this.url)
      .then(res => {
        this.setState({gifs: res.data.data})
        console.log('gifs: ',this.state.gifs)
      })
  }

  render() {
    return (
      <div className="App">
        <Gifs gifs={this.state.gifs}/>
      </div>
    );
  }
}

export default App;
