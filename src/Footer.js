import React from "react";
import "./logo.svg";
import "./App.js";

// Footer is defined here
function Footer(){
    return (   
        <div className='footerContainer'>
           <div className='footerInside'  >
               <span className='footerText'>Developed By Kshitij Darekar
               <div>
                    <span>Connect with me  </span>
                   <a href="https://www.linkedin.com/in/kshitij-darekar-38bb96192/"> <img src={require('./assets/linkedin_icon-circle.svg' )} alt='' /> </a>
               </div>
               </span>
               <span><i className="fab fa-linkedin"></i></span>
           </div>
        </div>
    )
    
}
export default Footer;