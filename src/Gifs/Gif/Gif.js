import React, { Component } from "react";

import "./Gif.css";

class Gif extends Component {
  state = {
    count: 0
  };

  // fetchMoreData(){

  // }

  // componentDidMount(){
  //     window.addEventListener('scroll', this.onScroll);
  //     this.fetchMoreData();
  // }

  // onScroll = () => {
  //     if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
  //         console.log('You are at the bottom right now!');
  //     }
  // }

  render() {
    const { prop } = this.props;
    return (
      <img className="gif" src={prop.images.fixed_width.url} alt={prop.title} />
    );
  }
}

export default Gif;
