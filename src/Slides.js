import React from 'react';
import Carousel from 'react-bootstrap/Carousel'


function Slides(){
        
        return(
          <div class="slide-container">
             <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require('./assets/nature.jpg')}
                    //  src="./assets/nature.jpg/800x400?text=First slide&bg=373940"
                    alt="First slide"
                    />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={require('./assets/sunflower2.jpg')}
                //src="./assets/sunflower.jpg/800x400?text=Second slide&bg=282c34"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Sunflower</h3>
                <p>Plants that are formed in spirals, such as pinecones, pineapples and sunflowers, illustrate Fibonacci numbers</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={require('./assets/plant.jpg')}
                //src="./assets/plant.jpg/800x400?text=Third slide&bg=20232a"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>

          </div>
        )
}

export default Slides ;