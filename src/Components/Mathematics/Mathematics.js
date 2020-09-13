import React from "react";
import "../../App.js";
import MathIntro from './MathIntro.js'
import MathGeometry from './MathGeometry.js'
import MathRect from './MathRect.js'
import MathFib from './MathFib.js'

//  this is the main Parent component of the Mathematics Tab 
function Mathematics(){
    return (
        <div className="math-container">
            <MathIntro/>                        
            <MathGeometry/> 
            <MathRect/>
            <MathFib/> 
        </div>   
        
    )
}
export default Mathematics;