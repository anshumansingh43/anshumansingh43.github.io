import React from 'react';
import './frame.css'
const Frame = ({imageurl, darkmode}) => {

    var frame = darkmode?'frame-dark':'frame-light'
    console.log(imageurl)

    return(
    <span>
        <img src={imageurl} className={frame} ></img>
    </span>
  ) 
}

export default Frame;
