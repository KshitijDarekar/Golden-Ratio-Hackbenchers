import React from "react";
import "./logo.svg";
import "./App.js";
import { Button, Navbar, Nav,Form,FormControl } from 'react-bootstrap'; 

function NavbarComponent(){
    return (
        <div>
        <>
            <Navbar bg="dark" variant="dark" expand="lg" >
                <Navbar.Brand href="/">Golden Ratio</Navbar.Brand>
                <Nav className="mr-auto">     
                <Nav.Link  href="/Example">Examples</Nav.Link>
                <Nav.Link href="/application">Application</Nav.Link>
                <Nav.Link href="/property">Mathematics</Nav.Link>
                <Nav.Link href="#pricing">More Resources</Nav.Link>
                </Nav>
            </Navbar>
        </>
        
           
        </div>
    )
}
export default NavbarComponent;