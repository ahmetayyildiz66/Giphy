import React from "react";
import Gif from './Gif/Gif';

const gifs = props => {
  return (
    <div>
      {
          props.gifs.map((gif,index) => {
              console.log('In gif: ', gif)
              return <Gif prop={gif} key={index}/>
          })
      }

    </div>
  );
};

export default gifs;
