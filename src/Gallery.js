import React,{useState} from 'react';
import {Container , Row, Col} from 'react-bootstrap/';
import Button from 'react-bootstrap/Button'
import GalleryData from "./GalleryData"

const style ={
    border:'20px',
    width:'300px',
    height:'300px',
    boxShadow: '3px 6px rgba(0,0,0,0.2)',
    borderRadius: '10px',

}
function Gallery(){
    // by Using arrow function handleClick can be rendered many times
    const [filterData,setData]=useState(GalleryData) // By Default pass GalleryData to display all the images 
     const handleClick=(e) => {
        
            if(e==='all'){
                // if showall data is clicked then all the data is passed down without filter
                setData(GalleryData)
            }
            else{
                setData(
                   // data is filtered on the basis of value of e(passed argument)
                    GalleryData.filter((product, index, products) => {
                        return product.alt === e;
                    })   
            )
                }
       }

    return(
        <>

        <div className='v-spacer'>
           {/* use arrow function to call handle events ,otherwise it will get call infinitely  */}
            <Button style={{marginBottom:'10px'}} variant="dark" onClick={()=>handleClick('all')}>Show all</Button>{' '}
            <Button style={{marginBottom:'10px'}}variant="primary" onClick={()=>handleClick('Art')}>Art</Button>{' '}
            <Button style={{marginBottom:'10px'}}variant="primary" onClick={()=>handleClick('Beauty')}>Beauty</Button>{' '}
            <Button style={{marginBottom:'10px'}}variant="primary" onClick={()=>handleClick('Geometry')}>Geometry</Button>{' '}
            <Button style={{marginBottom:'10px'}}variant="primary"onClick={()=>handleClick('Nature')}>Nature</Button>{' '}
            <Button style={{marginBottom:'10px'}}variant="primary"onClick={()=>handleClick('Music')}>Music</Button>{' '}
            <Button style={{marginBottom:'10px'}}variant="primary"onClick={()=>handleClick('Architecture')}>Architecture</Button>{' '}
        </div>

        <Container>
        
            <Row >
            {filterData.map(item => 
                // Map data from filterData
                <Col data-aos="zoom-in" className='v-spacer' key={item.id} md={4} sm={12}  xs={12} >
                    <img  style={style} alt={item.alt}  src={item.url}  />
                </Col>
                )
                }
            </Row>
        </Container>    
        </>
    )
}
export default Gallery;