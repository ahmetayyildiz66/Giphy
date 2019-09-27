import React,{ Component } from 'react'

import './Gif.css';

class Gif extends Component{

    state = {
        count: 0
    }

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
    
    render(){
        return(
            <img className="gif" src={this.props.prop.images.fixed_width.url} alt={this.props.prop.title} />
        )
    }
}

export default Gif;