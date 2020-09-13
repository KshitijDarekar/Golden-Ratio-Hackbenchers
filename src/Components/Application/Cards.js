import React from "react"
import Card from 'react-bootstrap/Card'

//This is the Card Component with props passed to it
function Temp(props) {
   // React Props is passed to the function 
    return (
    <>           
  <Card data-aos="zoom-in" className="hvr-float-shadow " >

        <Card.Img variant="top"  src={props.url}  />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.text}
          </Card.Text>
        </Card.Body>
        {/* the footer can be used in future to make the app more dynamic */}
        <Card.Footer>
        <small className="text-muted"></small>
        </Card.Footer>
  </Card>
         </>
  
    )
}

export default Temp;