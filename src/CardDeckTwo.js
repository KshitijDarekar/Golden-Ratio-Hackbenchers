import React from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

function CardDeckTwo(){

    return(
        <div data-aos="zoom-in"className="card-deck-two">
            <CardDeck>
  <Card data-aos="zoom-in" >
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
  </Card >
  <Card data-aos="zoom-in">
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
  <Card data-aos="zoom-in">
    <Card.Img variant="top" src={require('./assets/music.png')} />
    <Card.Body>
      <Card.Title>Music</Card.Title>
      <Card.Text>
      Fibonacci and phi relationships are often found in the timing of musical compositions.
      Ratios found in the first seven numbers of the Fibonacci series ( 0, 1, 1, 2, 3, 5, 8 ) are related to key frequencies of musical notes.
      Fibonacci and phi are used in the design of violins. 

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