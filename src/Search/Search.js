import React, { Component } from "react";
import "./Search.css";
import { Singleton } from "../Singleton";
import Gif from "../Gifs/Gif/Gif";
import axios from "axios";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", gifsResult: [] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  fetchGif() {
    const url =
      Singleton.searchUrl +
      this.state.value +
      Singleton.limit +
      Singleton.defaultSize;
    console.log("search url: " + url);

    axios.get(url).then(res => {
      console.log("url in     :" + url);
      this.setState({ gifsResult: res.data.data });
    });
  }

  handleSubmit(event) {
    if (this.state.value !== "") {
      this.props.parentCallback(true);
    }

    this.fetchGif();

    event.preventDefault();
  }

  render() {
    return (
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
    );
  }
}

export default Search;
