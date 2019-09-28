import React, { Component } from "react";
import "./Search.css";
import Gif from "../Gifs/Gif/Gif";
import axios from "axios";

//  url = baseUrl + searchType.trending + apiKey + parameters.limit + parameters.rating;

import { baseUrl, searchType, apiKey, parameters } from '../const/endpoints'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", gifsResult: [], searchClicked: false, size: 40 };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMore = this.fetchMore.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }


  fetchMore() {
    this.setState({ size: this.state.size + 20})
    //const url = Singleton.searchUrl + this.state.value + Singleton.limit + this.state.size;
    
    // axios.get(url).then(res => {
    //     this.setState({ gifsResult: res.data.data})
    // })
  }


  //https://api.giphy.com/v1/gifs/search?api_key=JESzJ2z16TUhG1RQOVTs1h21nztW6Pqy&q=burger&limit=20
  fetchGif() {
    const url = baseUrl + searchType.trending + apiKey + parameters.query + this.state.value + parameters.limit + parameters.size;
    
    axios.get(url).then(res => {
      this.setState({ gifsResult: res.data.data });
    });
  }

  handleSubmit(event) {
    if (this.state.value !== "") {
      this.props.parentCallback(true);
    }

    this.fetchGif();

    this.setState({ searchClicked: true });

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <div className="inputWithIcon">
              <input
                type="text"
                onChange={this.handleChange}
                value={this.state.value}
                placeholder="Search gif"
              />
              <button type="submit">
                <i className="fas fa-search"></i>
              </button>
            </div>
            <div>
              {this.state.gifsResult.map((gif, index) => {
                return <Gif prop={gif} key={index} />;
              })}
            </div>
          </div>
        </form>
        {this.state.searchClicked ? (
          <div className="showMore">
            <button onClick={this.fetchMore}>Show More</button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Search;
