import React, { Component } from "react";
import "./Search.css";
import Gif from "../Gifs/Gif/Gif";
import axios from "axios";

import { baseUrl, searchType, apiKey, parameters } from "../const/endpoints";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      gifsResult: [],
      searchClicked: false,
      size: parameters.size
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMore = this.fetchMore.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  fetchMore() {
    const limit = this.state.size + parameters.size;
    const url =
      baseUrl +
      searchType.search +
      apiKey +
      parameters.query +
      this.state.value +
      parameters.limit +
      limit;

    this.setState({ size: limit });

    axios.get(url).then(res => {
      this.setState({ gifsResult: res.data.data });
    });
  }

  fetchGif() {
    const url =
      baseUrl +
      searchType.search +
      apiKey +
      parameters.query +
      this.state.value +
      parameters.limit +
      parameters.size;

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
    const { value } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <div className="inputWithIcon">
              <input
                type="text"
                onChange={this.handleChange}
                value={value}
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
        {this.state.searchClicked && (
          <div className="showMore">
            <button onClick={this.fetchMore}>Show More</button>
          </div>
        )}
      </div>
    );
  }
}

export default Search;
