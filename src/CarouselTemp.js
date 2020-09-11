import React from "react"
import Carousel from 'react-bootstrap/Carousel'
import './App.css'

function CarouselTemp(props) {
    return (
 
    <>
             <Carousel.Item>
                <img
                    className="d-block w-100"
                    // src={props.product.url}
                    //*src={require(props.product.url)}

                    src={props.product.url}
                    //  src="./assets/nature.jpg/800x400?text=First slide&bg=373940"
                    alt={props.product.alt}
                    />
                <Carousel.Caption>
                    <h3>{props.product.head}</h3>
                    <p>{props.product.text}</p>
                </Carousel.Caption>
            </Carousel.Item>

         </>
    )
}

export default CarouselTemp;