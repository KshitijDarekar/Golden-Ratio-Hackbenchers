import React from "react";
import "./logo.svg";
import "./App.js";
import { Button, Navbar, Nav,Form,FormControl } from 'react-bootstrap'; 
import Card from 'react-bootstrap/Card'

function Sidebar(){
    return (
        <div className='sidebar'>
        <>
        <Card className="mathCard" >
        {/* style={{ width: '20rem' } */}
            
  <Card.Img variant="top" src={require('./assets/fib1.gif')} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
        </>
           
        </div>
    )
}
export default Sidebar;