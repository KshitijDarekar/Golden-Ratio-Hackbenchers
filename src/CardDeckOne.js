import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

function CardDeckOne(){
   
    return(
        <div data-aos="zoom-out" className="card-deck-two">
            <CardDeck>
  <Card>
    <Card.Img variant="top" src={require('./assets/art.jpg')} />
    <Card.Body>
      <Card.Title>Art</Card.Title>
      <Card.Text>
      It’s used as a valuable tool for composition decisions on position and proportion in ANY branch of the design arts, including art, logo design, product design, graphic design, cartoon character design, video layout and composition, fashion design, architecture, photography and much more.
                    Renaissance artists, including Leonardo da Vinci, used it frequently.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={require('./assets/plastic.jpg')} />
    <Card.Body>
      <Card.Title>Plastic surgery</Card.Title>
      <Card.Text>
      It’s used in the facial plastic surgery to help assure that the results of facial proportions and positions are natural and aesthetically pleasing.

      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={require('./assets/geometry.png')} />
    <Card.Body>
      <Card.Title>Mathematics and Geometry</Card.Title>
      <Card.Text>
      Because of its very unique properties in mathematics and frequent appearances in geometry, it is used to teach principles of mathematics and geometry.

      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>

</CardDeck>

        </div>
    )

}

export default CardDeckOne;