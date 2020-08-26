import React from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

function CardDeckTwo(){

    return(
        <div className="card-deck-two">
            <CardDeck>
  <Card>
    <Card.Img variant="top" src={require('./assets/nature2.jpg')} />
    <Card.Body>
      <Card.Title>Nature</Card.Title>
      <Card.Text>
      It’s used to understand the physical proportions and design of living organisms. It appears not as a universal law or constant, but does appear with surprising frequency.

      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={require('./assets/stock.gif')} />
    <Card.Body>
      <Card.Title>Market Analysis</Card.Title>
      <Card.Text>
      It’s used in the analysis of financial markets to predict price and timing inflection points in stock price movements.

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

export default CardDeckTwo;