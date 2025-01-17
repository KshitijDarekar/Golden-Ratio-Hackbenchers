import React, { useEffect } from 'react';
import '../../App.css';
import Image from 'react-bootstrap/Image'
import meditate from "../../assets/meditate.svg";
import BasicInfo from './BasicInfo.js'
import Video from './Video.js'
import Aos from 'aos';
import 'aos/dist/aos.css';
import Base from '../Core/Base';

//  this is the main Parent component of the Home Tab  
// Home page start here!
function Home(){

    useEffect( ()=>{
        Aos.init(
            {duration: 1000},
            {offset:300},
            {easing: 'ease-in-sine'},
            // {delay: 50},
            {once: false},
            {mirror:"true"},
            {anchorPlacement: 'top-bottom'}
            );
    },[]);
    return(
        <Base>
        <div  className="header-image back">
        <span style={{fontSize:'64px',fontWeight:'700',paddingTop:'40px',color:'black',
                        textShadow: '3px 6px rgba(50,50,70,0.5)', fontFamily: 'cursive' }}> 
                       Divine Ratio</span>

        </div>
        <div   className="introduction-wrapper">
            <div>    
                <div data-aos="zoom-in" className="frontpage">
                    <h1>What is Golden Ratio?<img className = "meditate .hvr-icon-forward:before" src={meditate} alt=''/></h1>
                </div>
            <div data-aos="zoom-in">
                <p className="Intropara ">
                The Golden ratio is a special irrational number like pi (π) represented as phi, Φ. 
                Its value is around 1.61803398874989484820... If the ratio of 2 numbers turns out to be tending to this 1.618 special value, the two numbers are said to be in Golden Ratio. These 2 numbers can be anything, from sides of a rectangle to curvature of spirals. Rule of thumb is, just remember that if the ratio of 2 things converges to 1.61803398874989484820 or anything even near that value, these things are said to be in Golden Ratio. By definition, Two numbers are in the golden ratio if the ratio of the sum of the numbers (a+b) divided by the larger number (a) is equal to the ratio of the larger number divided by the smaller number (a/b).
                
                </p>    
            </div> 

            <h1 data-aos="zoom-in" >
                Hmmm..Sounds Interesting
                <img  className="App-logo" src={require('../../assets/thoughts.svg') } alt=''/>

            </h1>
             <p data-aos="zoom-in" className="Intropara2 ">
                The golden ratio is best approximated by the famous "Fibonacci numbers."
                Fibonacci numbers are a never-ending sequence starting with 0 and 1 and continuing by adding the previous two numbers. 
                The next numbers in the Fibonacci sequence, for instance, are 1,2,3, and 5.
                The ratios of sequential Fibonacci numbers (2/1, 3/2, 5/3, etc.) approach the golden ratio. In fact, the higher the Fibonacci numbers, the closer their relationship is to 1.618.
                <br/>
                 2/1 = 2<br/>
                 3/2 = 1.5<br/>
                 5/3 = 1.66666666 . . .<br/>
                The golden ratio is sometimes called the "divine proportion," because of its frequency in the natural world. The number of petals on a flower, for instance, will often be a Fibonacci number. The seeds of sunflowers and pine cones twist in opposing spirals of Fibonacci numbers. Even the sides of an unpeeled banana will usually be a Fibonacci number—and the number of ridges on a peeled banana will usually be a larger Fibonacci number.
                Golden ratio has its applications in all aspects of nature, art, finance, and much more. Below are some examples of the Golden ratio in action:
             </p>
            <Image className="frontpageImg" src={require('../../assets/fib1.gif')} fluid />
            <Video  />
            <BasicInfo/>

        </div>
    </div>
     </Base>      
    )
}

export default Home; 