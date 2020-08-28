import React from "react";
import "./logo.svg";
import "./App.js";
import { Button, Navbar, Nav,Form,FormControl } from 'react-bootstrap'; 

function Footer(){
    return (
        
        <div className='footerContainer'>
           <div classname='footerInside'  >
               <span className='footerText'> Made By Kshitij Darekar
               <div>
                    <span>Connect with me  </span><br/>
                   <a href="https://www.linkedin.com/in/kshitij-darekar-38bb96192/"> <img src={require('./assets/linkedin_icon-circle.svg' )} /> </a>
               </div>
               </span>
               {/* <span><img src={require('./assets/linkedin_icon-circle.svg')} /></span> */}
               <span><i class="fab fa-linkedin"></i></span>
           </div>
        </div>
    )
    
}
export default Footer;