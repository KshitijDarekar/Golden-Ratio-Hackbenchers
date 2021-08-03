import React from 'react';
import Base from '../Core/Base.js';
import Gallery from './Gallery.js'

// This is the Parent Component of Example Tab 
function Example(){
    return(
       <Base className="flex-wrapper">
         <Gallery/>  
       </Base>         
     )
}

export default Example ;