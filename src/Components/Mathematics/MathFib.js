import React from "react";
import "../../App.js";
import {Container , Row, Col} from 'react-bootstrap/';

//Fibonacci in Golden Ratio Page starts here,its the end of Mathematics Component
function MathFib(){
    return (

        <>
        <Container >
            
            <Row className="v-spacer">
                <Col data-aos="fade-up" xs={12} md={4}>
                    <img className="v-spacer"style={{maxWidth:'250px'}} src={require('../../assets/fib2.gif')} alt=''/>
                </Col>

                <Col  xs={12} md={8}>
                <div data-aos="fade-up" className='info-container'>
                    <h1>Relationship to Fibonacci sequence</h1>
                    <p>
                        The mathematics of the golden ratio and of the Fibonacci sequence are intimately interconnected. The Fibonacci sequence is:
                        <br/>
                            1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, ...<br/>
                            A closed-form expression for the Fibonacci sequence involves the golden ratio:<br/>
                        <br/>
                        <img style={{maxWidth:'100%'}}src="https://wikimedia.org/api/rest_v1/media/math/render/svg/06861150616f57b78785cbd98651586f2a83d5af" className="mwe-math-fallback-image-inline" aria-hidden="true"  alt="{\displaystyle F\left(n\right)={{\varphi ^{n}-(1-\varphi )^{n}} \over {\sqrt {5}}}={{\varphi ^{n}-(-\varphi )^{-n}} \over {\sqrt {5}}}.}"></img>
                        <br/>
                        The golden ratio is the limit of the ratios of successive terms of the Fibonacci sequence (or any Fibonacci-like sequence), as shown by Kepler:<br/>
                        <img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/c97c57b45024325087cc20cbfd9af27fc6c5a5bf" className="mwe-math-fallback-image-inline" aria-hidden="true" alt="{\displaystyle \lim _{n\to \infty }{\frac {F_{n+1}}{F_{n}}}=\varphi .}" /><br/>
                        In other words, if a Fibonacci number is divided by its immediate predecessor in the sequence, the quotient approximates φ;<br/> e.g., 987/610 ≈ 1.6180327868852.<br/> 
                        </p>
                 </div>         
                </Col>
                
            </Row>
        </Container >    
        </>
    )
}
export default MathFib;

