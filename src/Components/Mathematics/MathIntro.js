import React from "react";
import "../../App.js"; 
import {Container , Row, Col} from 'react-bootstrap/';
import maths from "../../assets/maths.svg"

function MathIntro(){
    return (
        <div  className="math-intro-container">
        <>
        <Container >
            <Row >
                <Col md={12}>
                    <div  className="header-image">
                    </div>
                </Col>
            </Row>
            <Row  className="v-spacer">
                <Col data-aos="fade-up" xs={12} md={4}>
                <img  alt="" src={require('../../assets/math.gif')} /> <br/>
                
                </Col>
                <Col data-aos="fade-up" xs={12} md={8}>
                    <div  className="info-container" >
                        <img className = "mathsImg" alt="" src={maths}/>
                        <h1 >Mathematics   </h1>
                        <p >
                            
                            In mathematics, two quantities are in the golden ratio if their ratio is the same as the ratio of their sum to the larger of the two quantities.
                            The figure on the right illustrates the geometric relationship. 
                            Expressed algebraically, for quantities a and b with a &gt; b &gt; 0,
                        </p>
                        <img  src="https://wikimedia.org/api/rest_v1/media/math/render/svg/19a92f2bf1181d6d7b4e8af138d01004fe7fe530" className="mwe-math-fallback-image-inline" aria-hidden="true"  alt="{\displaystyle {\frac {a+b}{a}}={\frac {a}{b}}\ {\stackrel {\text{def}}{=}}\ \varphi ,}"></img>
                        <br/>where the Greek letter phi<br/>  
                    <img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/33ee699558d09cf9d653f6351f9fda0b2f4aaa3e" className="mwe-math-fallback-image-inline" aria-hidden="true"  alt="\varphi " />  
                    or <br/>
                    <img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/72b1f30316670aee6270a28334bdf4f5072cdde4" className="mwe-math-fallback-image-inline" aria-hidden="true"  alt="\phi " /> 
                    represents the golden ratio.
                    It is an irrational number that is a solution to the quadratic equation   
                    <img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/e22ea5278827fbb7e09fb5fbeb5f50b234410f84" className="mwe-math-fallback-image-inline" aria-hidden="true"  alt="x^{2}-x-1=0" ></img>
                     , with a value of:
                     <img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/d4010f92e33cc559bc8d7f24b4ed017273a0628d" className="mwe-math-fallback-image-inline" aria-hidden="true"  alt="\varphi ={\frac {1+{\sqrt {5}}}{2}}=1.6180339887\ldots ." />

                    <br/>
                    <img alt="" src={require('../../assets/Golden_ratio_line.svg')} /> <br/>
                    <br/>
                    </div>
                </Col>
                </Row>
        </Container>
                  </>
        </div>
    )
}
export default MathIntro;