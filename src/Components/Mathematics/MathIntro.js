import React from "react";
import "../../App.js"; 
import maths from "../../assets/maths.svg"
const styles={
    backgroundColor: 'blanchedalmond',
    margin:'20px 30px 0 400px',
    fontWeight: '400',
    fontSize: '28px'
}
function MathIntro(){
    return (
        <div >
        <>
        {/* <img className = "mathsImg" src={maths}/> */}
        <img className = "mathsImg2" src={require('../../assets/math.gif')} /> <br/>
        <img className = "strollimg" src={require('../../assets/strolling.svg')} /> <br/>
        
        <div className='mathintro'style={styles}>
        <img className = "mathsImg" src={maths}/>
        
        
                <h1 >Mathematics   </h1>
                <p >
                    In mathematics, two quantities are in the golden ratio if their ratio is the same as the ratio of their sum to the larger of the two quantities.
                    The figure on the right illustrates the geometric relationship. 
                    Expressed algebraically, for quantities a and b with a > b > 0,<br/>
                    <img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/19a92f2bf1181d6d7b4e8af138d01004fe7fe530" class="mwe-math-fallback-image-inline" aria-hidden="true"  alt="{\displaystyle {\frac {a+b}{a}}={\frac {a}{b}}\ {\stackrel {\text{def}}{=}}\ \varphi ,}"></img>
                    <br/>
                    where the Greek letter phi  
                    <img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/33ee699558d09cf9d653f6351f9fda0b2f4aaa3e" class="mwe-math-fallback-image-inline" aria-hidden="true"  alt="\varphi " />  
                    or 
                    <img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/72b1f30316670aee6270a28334bdf4f5072cdde4" class="mwe-math-fallback-image-inline" aria-hidden="true"  alt="\phi " /> 
                    represents the golden ratio.
                    It is an irrational number that is a solution to the quadratic equation   
                    <img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/e22ea5278827fbb7e09fb5fbeb5f50b234410f84" class="mwe-math-fallback-image-inline" aria-hidden="true"  alt="x^{2}-x-1=0" ></img>
                     , with a value of:
                     <img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/d4010f92e33cc559bc8d7f24b4ed017273a0628d" class="mwe-math-fallback-image-inline" aria-hidden="true"  alt="\varphi ={\frac {1+{\sqrt {5}}}{2}}=1.6180339887\ldots ." />

                    <br/>
                
                 </p>
                 <br/>
                 <p>
                 Two quantities a and b are said to be in the golden ratio φ if <br/>
                 <img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/cf7e51356f54a831db021e7e46922c778bbd91c0" class="mwe-math-fallback-image-inline" aria-hidden="true"  alt="{\frac {a+b}{a}}={\frac {a}{b}}=\varphi ."></img>
                 <br/>
                 One method for finding the value of φ is to start with the left fraction. Through simplifying the fraction and substituting in<br/>
                 b/a = 1/φ,<br/>
                 <img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/5d253b8b63fe6f4a656787c015bec7e36645b04d" class="mwe-math-fallback-image-inline" aria-hidden="true"  alt="{\displaystyle {\frac {a+b}{a}}={\frac {a}{a}}+{\frac {b}{a}}=1+{\frac {b}{a}}=1+{\frac {1}{\varphi }}.}"></img>
                 Therefore,<br/>
                 <img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/73516b60e9391da6113e1df0eab685d732451cc2" class="mwe-math-fallback-image-inline" aria-hidden="true"  alt="1+{\frac {1}{\varphi }}=\varphi ."></img><br/>
                 Multiplying by φ gives

                 <img className = "strollimg" src={require('../../assets/jumping.svg')} />
                 <br/>
                 <img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/7452e786dfd2a1a3e0cdc7cf38b508d0ccb43796" class="mwe-math-fallback-image-inline" aria-hidden="true"  alt="\varphi +1=\varphi ^{2}" /><br/>
                 which can be rearranged to
                 <br/>
                 <img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/909a0da5459476692cb089d9b951d4284387e927" class="mwe-math-fallback-image-inline" aria-hidden="true"  alt="{\varphi }^{2}-\varphi -1=0."></img>
                 <br/>
                 Using the quadratic formula, two solutions are obtained:
                 <br/>
                 <img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/68dc7254348118480c0b51f9511f35f955ce86b1" class="mwe-math-fallback-image-inline" aria-hidden="true"  alt="{\displaystyle {\frac {1+{\sqrt {5}}}{2}}=1.618\,033\,988\,7\dots }"></img>
                 <br/>
                 <img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/60061ebfed9e4c449e7295a89dad486dd8381c61" class="mwe-math-fallback-image-inline" aria-hidden="true"  alt="{\displaystyle {\frac {1-{\sqrt {5}}}{2}}=-0.618\,033\,988\,7\dots }"></img>
                 <br/>
                 Because φ is the ratio between positive quantities, φ is necessarily positive:
                 <br/>
                 <img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/1c9b7ed65783d1cdb2dfa7abd1361b1c1553bbe6" class="mwe-math-fallback-image-inline" aria-hidden="true"  alt="\varphi ={\frac {1+{\sqrt {5}}}{2}}=1.61803\,39887\dots " />
                 <br/> 
                 </p>
            
                </div>        </>
        
           
        </div>
    )
}
export default MathIntro;