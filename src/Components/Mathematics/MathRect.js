import React from "react";
import "../../App.js";
import {Container , Row, Col} from 'react-bootstrap/';


function MathRect(){
    return (

        <>
        <Container >
            
            <Row className="v-spacer">
                <Col  xs={12} md={8}>
                <div className='info-container'>
                <h3>The Golden Rectangle</h3>
                 <img className = "maths-rect-2" style={{maxWidth:'300px'}} src={require('../../assets/Golden_Rectangle_Construction.svg')} /> <br/>

                
                 <p>
                 In geometry, a golden rectangle is a rectangle whose side lengths are in the golden ratio, 
                 <img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/44db8a4b37b3b565433c4337a2197175615beff0" class="mwe-math-fallback-image-inline" aria-hidden="true" alt="1:\varphi " />
                 ,which is 
                 <img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/67896455b27ecf5591251b2375e860fae437e5e1" class="mwe-math-fallback-image-inline" aria-hidden="true"  alt="1:\varphi " />
                 (the Greek letter phi), where <img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/33ee699558d09cf9d653f6351f9fda0b2f4aaa3e" class="mwe-math-fallback-image-inline" aria-hidden="true" alt="\varphi " />
                  is approximately 1.618.
                 Golden rectangles exhibit a special form of self-similarity: All rectangles created by adding or removing a square are Golden rectangles as well.  </p>    
                
                 </div>         
                </Col>
                {/* <Col xs={12} md={4}>
                    <img className = "golden-rectangles-3" src={require('../../assets/3-golden-rectangles.gif')} /> <br/>
                </Col> */}
            </Row>
        </Container >    
        </>



        // <div>
        // <>

        // <div className='rectangle'>
        //         <h3>The Golden Rectangle</h3>
        //         <img className = "maths-rect-2" src={require('../../assets/Golden_Rectangle_Construction.svg')} /> <br/>

                
        //         <p>
        //         In geometry, a golden rectangle is a rectangle whose side lengths are in the golden ratio, 
        //         <img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/44db8a4b37b3b565433c4337a2197175615beff0" class="mwe-math-fallback-image-inline" aria-hidden="true" alt="1:\varphi " />
        //         ,which is 
        //         <img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/67896455b27ecf5591251b2375e860fae437e5e1" class="mwe-math-fallback-image-inline" aria-hidden="true"  alt="1:\varphi " />
        //         (the Greek letter phi), where <img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/33ee699558d09cf9d653f6351f9fda0b2f4aaa3e" class="mwe-math-fallback-image-inline" aria-hidden="true" alt="\varphi " />
        //          is approximately 1.618.
        //         Golden rectangles exhibit a special form of self-similarity: All rectangles created by adding or removing a square are Golden rectangles as well.  </p>    
        //         </div>        
        // </>   
        // </div>
    )
}
export default MathRect;

