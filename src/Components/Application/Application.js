import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Carousels from './Carousel.js'
import CardDeck from './CardCollection.js'

//  this is the main Parent component of the Application Tab 
 function Application(){
    return(
        <div>
            <Jumbotron fluid>
                <h1>Application</h1>
                <p className="jumbo-text">
                    Golden Ratio finds it Application almost everywhere.<br/>
                    Infact its upon you to find its applications in
                    your surroundings. 
                </p>
            </Jumbotron>
            <Carousels/>
            <CardDeck/>    
        </div>
    )
}
export default Application ;