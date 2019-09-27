import React,{ Component } from 'react'
import './Gif.css';


class Gif extends Component{

    render(){
        return(
            <img className="gif" src={this.props.prop.images.fixed_width.url} alt={this.props.prop.title} />
        )
    }
}



export default Gif;