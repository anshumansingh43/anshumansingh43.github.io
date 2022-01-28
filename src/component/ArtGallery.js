
import React from 'react';
import Frame from './Frame';
import './frame.css'

const ArtGallery = ({darkmode}) => {

  var artgalleryfont = darkmode?'artgallery-font-dark':'artgallery-font-light'
  var viewall = darkmode?'viewall-dark':'viewall-light'

  return (
    <div className='artgallery'>
        <div className='gallery-topbar'>
          <span className={artgalleryfont}>Art Gallery</span>
          <a href='https://www.instagram.com/anshumansart/' className={viewall} target='_blank'>

          <span >view..all</span>
          </a>
          
        </div>
        <div className='gallery-images'>
         <Frame 
          imageurl={require('../images/art1.jpg')}
          darkmode={darkmode}
          />
          <Frame 
          imageurl={require('../images/art2.jpg')}
          darkmode={darkmode}
          />
          <Frame 
          imageurl={require('../images/art3.jpg')}
          darkmode={darkmode}
          />
          <Frame 
          imageurl={require('../images/art4.jpg')}
          darkmode={darkmode}
          />      
    </div>

        </div>
  )
}

export default ArtGallery;
