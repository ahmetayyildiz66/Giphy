import React, { Component } from "react";
import "./App.css";

import axios from "axios";

import Gifs from "./Gifs/Gifs";
import "./Singleton";
import { Singleton } from "./Singleton";

class App extends Component {
  state = {
    gifs: []
  };

  url = Singleton.url + Singleton.defaultSize + Singleton.rating;

  fetchMoreData() {
    Singleton.defaultSize += 20;
    this.url = Singleton.url + Singleton.defaultSize + Singleton.rating;
    
    axios.get(this.url).then(res => {
      this.setState({ gifs: res.data.data });
    });
  }

  onScroll = () => {
    if ((window.innerHeight + window.scrollY + 0.5) >= document.body.offsetHeight ) {
      this.fetchMoreData();
    }
  };

  componentDidMount() {
    
    //First 20 gifs
    axios.get(this.url).then(res => {
      this.setState({ gifs: res.data.data });
    });

    //Event listener
    window.addEventListener("scroll", this.onScroll);
  }

  render() {
    return (
      <div className="App">
        <Gifs gifs={this.state.gifs} />
      </div>
    );
  }
}

export default App;
