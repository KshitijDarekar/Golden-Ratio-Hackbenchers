import React from "react";
import "../../App.js";
import {Container , Row, Col} from 'react-bootstrap/';
 
// Geometry Page starts here
function MathGeometry(){
    return (
        <>
        <Container >
            
            <Row className="v-spacer">
                <Col  xs={12} md={8}>
                <div data-aos="fade-up"className='info-container'>
                <img  className = "Icosahedron-golden-rectangles v-spacer" alt="" src={require('../../assets/Icosahedron-golden-rectangles.png')} />
                 <h1>Geometry</h1>
  
                 <p>
                    The number φ turns up frequently in geometry, particularly in figures with pentagonal symmetry. The length of a regular pentagon's diagonal is φ times its side. 
                    The vertices of a regular icosahedron are those of three mutually orthogonal golden rectangles.
                    There is no known general algorithm to arrange a given number of nodes evenly on a sphere, for any of several definitions of even distribution (see, for example, Thomson problem).
                    However, a useful approximation results from dividing the sphere into parallel bands of equal surface area and placing one node in each band at longitudes spaced by a golden section of the circle, i.e. 360°/φ ≅ 222.5°.
                    This method was used to arrange the 1500 mirrors of the student-participatory satellite Starshine-3.
                 </p>
                 </div>         
                </Col>
                <Col  xs={12} md={4}>
                    <img data-aos="fade-up" className = "golden-rectangles-3 v-spacer" alt="" src={require('../../assets/3-golden-rectangles.gif')} /> 
                </Col>
            </Row>
        </Container >    
        </>

    )
}
export default MathGeometry;