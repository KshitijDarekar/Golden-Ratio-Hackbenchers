import React from "react";
import "./logo.svg";
import "./App.js";
import { Button, Navbar, Nav,Form,FormControl } from 'react-bootstrap'; 

function Footer(){
    return (
        <div className='footerContainer'>
           <div classname='footerInside'  >
               <span className='footerText'> Made By Kshitij Darekar</span>
               <span><i class="fab fa-linkedin"></i></span>
           </div>
        </div>
    )
}
export default Footer;