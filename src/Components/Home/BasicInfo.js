import React from 'react';
import '../../App.css';

// This is the last part of Home Component
function BasicInfo(){
    return(
    <div  className="Para-three-holder ">
        <div className="Intropara-three">
            <p className="Intropara-three-text">
            <span style={{fontSize:'40px',fontWeight: '500',lineHeight:'1.2'}}>The Golden Ratio</span><br/>
            <span>Let's learn some basic things related to Golden Ratio:</span><br/>

                <strong>Irrational Numbers</strong> - An Irrational Number is a real number that cannot be written as a simple fraction.<br/>
                <strong>Golden Ratio</strong> - The golden ratio (symbol is the Greek letter "phi") is a special number approximately equal to 1.618.<br/>
                <strong>Fibonacci Sequence</strong> - The Fibonacci Sequence is the series of numbers. The next number is found by adding up the two numbers before it.<br/>
                <strong>Golden Angle</strong> - The equivalent of 0.61803... rotations is 222.4922... degrees, or about 222.5°. In the other direction it is about 137.5°, called the "Golden Angle".<br/>
                <strong>Nature & Golden Ratio</strong> - Nature is full of amazing phenomena like Spiral Leaf Growth found in many plants not just like Sunflower, which follows Golden Ratio.<br/>
                <strong>Rule of Thirds</strong> - In Photography/Design, the Rule of Thirds is arguably the strongest, most important rule of composition.
                It tends to provide the overall framework for an image, creating “balance” and allowing other compositional elements to work within your photo.
                At the very least its a good starting point when composing a shot.<br/>

            </p>
            <img className = "golden-fibonacci" src={require('../../assets/golden-fibonacci.gif')} alt='' /> 
        </div>          
    </div>
    )
}

export default BasicInfo;