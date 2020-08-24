import React from 'react';
import Card from 'react-bootstrap/Card'
import Jumbotron from 'react-bootstrap/Jumbotron'

const styles = {
    height : '10rem',
    width : '20rem',
  
}
function Application(){
        return(
            <div>
                <Jumbotron fluid>
            
                    <h1>Application</h1>
                    <p>
                    Golden Ratio finds it Application almost everywhere.Infact its upon you to find its applications in
                    your surroundings. 
                    </p>
               
</Jumbotron>
                <br/>
               <Card className="bg-light text-dark" >
                <Card.Img  src={require('./assets/art.jpg')} alt="Card image" style = {styles} />
                <Card.ImgOverlay>
                    <Card.Title>Art/Design</Card.Title>
                    <Card.Text>
                    It’s used as a valuable tool for composition decisions on position and proportion in ANY branch of the design arts, including art, logo design, product design, graphic design, cartoon character design, video layout and composition, fashion design, architecture, photography and much more.
                    Renaissance artists, including Leonardo da Vinci, used it frequently.
                    </Card.Text>
                    
                </Card.ImgOverlay>
                </Card>
                
                <br/>

                <Card className="bg-light text-dark">
                <Card.Img  src={require('./assets/stock.gif')} alt="Card image" style = {styles} />
                <Card.ImgOverlay>
                    <Card.Title>Market Analysis</Card.Title>
                    <Card.Text>
                    It’s used in the analysis of financial markets to predict price and timing inflection points in stock price movements.
                    </Card.Text>
                    
                </Card.ImgOverlay>
                </Card>

                <br/>

                <Card className="bg-light text-dark">
                <Card.Img  src={require('./assets/plastic.jpg')} alt="Card image" style = {styles} />
                <Card.ImgOverlay>
                    <Card.Title>Plastic surgery</Card.Title>
                    <Card.Text>
                    It’s used in the facial plastic surgery to help assure that the results of facial proportions and positions are natural and aesthetically pleasing.
                    </Card.Text>
                    
                </Card.ImgOverlay>
                </Card>
                <br/>
                <Card className="bg-light text-dark">
                <Card.Img  src={require('./assets/geometry.png')} alt="Card image" style = {styles} />
                <Card.ImgOverlay>
                    <Card.Title>Mathematics and Geometry</Card.Title>
                    <Card.Text>
                    Because of its very unique properties in mathematics and frequent appearances in geometry, it is used to teach principles of mathematics and geometry.
                    </Card.Text>
                    
                </Card.ImgOverlay>
                </Card>
                <br/>
                <Card className="bg-light text-dark">
                <Card.Img  src={require('./assets/nature2.jpg')} alt="Card image" style = {styles} />
                <Card.ImgOverlay>
                    <Card.Title>Nature</Card.Title>
                    <Card.Text>
                    It’s used to understand the physical proportions and design of living organisms. It appears not as a universal law or constant, but does appear with surprising frequency.
                    </Card.Text>
                    
                </Card.ImgOverlay>
                </Card>

                <br/>
            </div>
        )
}

export default Application ;