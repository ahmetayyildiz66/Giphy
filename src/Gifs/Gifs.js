import React from "react";

const gifs = props => {
  return (
    <div>
      {
          props.gifs.map(gif => {
              console.log('gif id: ', gif.id)
          })

      }

      <h1>Gifs works!</h1>
    </div>
  );
};

export default gifs;
