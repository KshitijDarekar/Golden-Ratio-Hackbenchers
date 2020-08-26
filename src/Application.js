import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import CardDeckOne from './CardDeckOne.js'
import CardDeckTwo from './CardDeckTwo.js'

const styles = {
    height : '10rem',
    width : '20rem',
  
}
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
                <CardDeckOne/>
                <CardDeckTwo/>
            </div>
        )
}

export default Application ;