import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import CarouselTemp from './CarouselTemp.js';
import CarouselData from "./CarouselData"


function Carousels(){
    // const productComponents = CarouselData.map(item => <CarouselTemp key={item.id}  product={item}/>)

        return(


            <div className="slide-container">
            <Carousel controls='false'>
                {/* {CarouselData.map(item => <CarouselTemp key={item.id}  product={item}/>)} */}
                {CarouselData.map(item => 
                // Map data from CarouselData.js
                <Carousel.Item key={item.id} >
                <img
                    className="d-block w-100"
                    style={ { maxHeight : '600px', 
                    maxWidth:'100%',
                    display:'none!important',
                    padding:'40px 40px 40px 40px',
                    background:'black'
                } }
                    
                    // src={props.product.url}
                    //*src={require(props.product.url)}
                    //src={require(item.url)}

                    src={item.url}
                    //  src="./assets/nature.jpg/800x400?text=First slide&bg=373940"
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


        //   <div className="slide-container">
        //     <Carousel>
        //         {productComponents}
        //         {/* <CarouselTemp 
        //         url = './assets/sunflower2.jpg'
        //         head= "Pencil"
        //         text = "Perfect for those who can't remember things! 5/5 Highly recommend."
        //         /> */}
        //     </Carousel>
        //     </div>
        )
}
export default Carousels;