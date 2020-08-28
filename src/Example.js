import React from 'react';
import Slides from "./Slides.js"
import Carousel from 'react-bootstrap/Carousel'

function Example(){
        return(
            
            <div class="flex-wrapper">
                {/* <img className = "reading" src={require('./assets/reading.svg')} /> <br/> */}
               <Slides/>
            </div>
        )
}

export default Example ;