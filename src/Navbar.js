import React from "react";
import "./logo.svg";
import icon from "./assets/icon.png";
import "./App.js";
import { Button, Navbar, Nav,Form,FormControl } from 'react-bootstrap'; 


function NavbarComponent(){
    return (
        <div>
        <>
            <Navbar bg="dark" variant="dark"  collapseOnSelect expand="lg"  >
            <Navbar.Brand href="/">Golden Ratio  
            <img src={icon} width={'40px'} height={'30px'}  /> 
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">     
                <Nav.Link  href="/Example">Examples</Nav.Link>
                <Nav.Link href="/application">Application</Nav.Link>
                <Nav.Link href="/property">Mathematics</Nav.Link>
                <Nav.Link href="/more">More Resources</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </>
        
           
        </div>
    )
}
export default NavbarComponent;