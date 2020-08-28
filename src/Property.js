import React from "react";
import "./App.js";
import Sidebar from './Sidebar.js';
import Image from 'react-bootstrap/Image'
import MathIntro from './Components/Mathematics/MathIntro.js'
import MathGeometry from './Components/Mathematics/MathGeometry.js'
import MathRect from './Components/Mathematics/MathRect.js'
import MathFib from './Components/Mathematics/MathFib.js'

function Property(){
    return (
        <div className="math-container">
            <MathIntro/>            
            {/* <Sidebar/>      */}
            <div>

                <MathGeometry/>
                <MathRect/>
                <MathFib/>
            </div>   
        </div>
    )
}
export default Property;