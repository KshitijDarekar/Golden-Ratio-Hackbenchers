import React from 'react';
import './App.css';
import Image from 'react-bootstrap/Image'
import meditate from "./assets/meditate.svg";
import Sidebar from './Sidebar.js';
import IntroThree from './IntroThree.js'
import Video from './Video.js'

function Introduction(){
    return(
        <div className="introduction-wrapper">
            {/* <div className="header-image">
            </div> */}

            <div>
            
            <div className="frontpage">
                <h1>What is Golden Ratio?<img className = "meditate .hvr-icon-forward:before" src={meditate}/></h1>
            </div>
            <div>
                <p className="Intropara hvr-grow-shadow">
                The Golden ratio is a special irrational number like pi (π) represented as phi, Φ. 
                Its value is around 1.61803398874989484820... If the ratio of 2 numbers turns out to be tending to this 1.618 special value, the two numbers are said to be in Golden Ratio. These 2 numbers can be anything, from sides of a rectangle to curvature of spirals. Rule of thumb is, just remember that if the ratio of 2 things converges to 1.61803398874989484820 or anything even near that value, these things are said to be in Golden Ratio. By definition, Two numbers are in the golden ratio if the ratio of the sum of the numbers (a+b) divided by the larger number (a) is equal to the ratio of the larger number divided by the smaller number (a/b).
                
                </p>    
            </div>
            {/* <img className="frontpageImg" src={require('./assets/fib1.gif')} /> */}
            

            <h1>
                Hmmm..Sounds Interesting
                <img className="App-logo" src={require('./assets/thoughts.svg')} />

            </h1>
             <p className="Intropara2 hvr-grow-shadow">
             The golden ratio is best approximated by the famous "Fibonacci numbers."
              Fibonacci numbers are a never-ending sequence starting with 0 and 1 and continuing by adding the previous two numbers. 
              The next numbers in the Fibonacci sequence, for instance, are 1,2,3, and 5.

enter image description here

The ratios of sequential Fibonacci numbers (2/1, 3/2, 5/3, etc.) approach the golden ratio. In fact, the higher the Fibonacci numbers, the closer their relationship is to 1.618.

                 2/1 = 2

                 3/2 = 1.5

                 5/3 = 1.66666666 . . .

The golden ratio is sometimes called the "divine proportion," because of its frequency in the natural world. The number of petals on a flower, for instance, will often be a Fibonacci number. The seeds of sunflowers and pine cones twist in opposing spirals of Fibonacci numbers. Even the sides of an unpeeled banana will usually be a Fibonacci number—and the number of ridges on a peeled banana will usually be a larger Fibonacci number.

Golden ratio has its applications in all aspects of nature, art, finance, and much more. Below are some examples of the Golden ratio in action:


             </p>
             <Image className="frontpageImg" src={require('./assets/fib1.gif')} fluid />
             <Video/>

            <IntroThree/>

        </div>
            </div>
                )
}

export default Introduction 