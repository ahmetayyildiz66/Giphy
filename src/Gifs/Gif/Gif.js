import React, { Component } from "react";

import "./Gif.css";

class Gif extends Component {
  render() {
    const { prop } = this.props;
    return (
      <img className="gif" src={prop.images.fixed_width.url} alt={prop.title} />
    );
  }
}

export default Gif;
