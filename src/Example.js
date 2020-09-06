import React from 'react';
import Slides from "./Slides.js"
import Carousel from 'react-bootstrap/Carousel'

function Example(){
        return(
            
            <div class="flex-wrapper">
            <div className="header-image">
            </div>
            <div>
                <p className="example-para">
                Golden Ratio examples can be found in everyday life including nature and in manmade artifacts as well 
                as buildings and even music.
                </p>
            </div>

                {/* <img className = "reading" src={require('./assets/reading.svg')} /> <br/> */}
                
               <Slides/>
            </div>
        )
}

export default Example ;