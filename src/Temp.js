import React from "react"
import Jumbotron from 'react-bootstrap/Jumbotron'
import CardDeckOne from './CardDeckOne.js'
import CardDeckTwo from './CardDeckTwo.js'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
function Temp(props) {
    return (
    <>
             {/* <CardDeck>  */}
             
  <Card data-aos="zoom-in" className="hvr-float-shadow " >
        {/* <Card.Img variant="top"  src={require('./assets/art.jpg')} /> */}

        <Card.Img variant="top"  src={props.url}  />
        {/* src={props.url} */}
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.text}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>

  </Card>

{/* </CardDeck> */}
         </>
  
    )
}

export default Temp;