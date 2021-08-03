import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import CarouselData from "./CarouselData"

//Carousel is defined here and is used in the Application Component
function Carousels(){
    return(
        <div  className="slide-container">
            <Carousel >
            {CarouselData.map(item => 
                // Map data from CarouselData.js
                <Carousel.Item key={item.id} >
                <img
                    className="d-block w-100"
                    style={ { maxHeight : '600px', 
                    maxWidth:'100%',
                    display:'none!important',
                    padding:'40px 40px 40px 40px',   } }
                    src={item.url}
                    alt={item.alt}
                    />
                <Carousel.Caption>
                    <h3>{item.head}</h3>
                    <p>{item.text}</p>
                </Carousel.Caption>
                </Carousel.Item>
                )
            }    
            </Carousel> 
        </div>
        )
}
export default Carousels;