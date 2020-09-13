import React from "react";
import "../../App.js";
import CardDeck from 'react-bootstrap/CardDeck'
import Temp from './Cards.js'
import Geometry from '../../assets/geometry.png'
import PlasticSurgery from '../../assets/plastic.jpg'
import Art from '../../assets/art.jpg'
import Nature from '../../assets/nature2.jpg'
import MarketAnalysis from '../../assets/stock.gif'
import Music from '../../assets/music.png'

// This contains all the Card data to be displayed on Application Tab
function More(){
    return (
        // The data to the props is assigned 
        <div className='card-deck-two v-spacer'  > 
            
            <CardDeck style={{marginBottom:'40px'}}>
            <Temp
            url={Art}
            title="Art"
            text="It’s used as a valuable tool for composition decisions on position and proportion in ANY branch of the design arts, including art, logo design, product design, graphic design, cartoon character design, video layout and composition, fashion design, architecture, photography and much more.
            Renaissance artists, including Leonardo da Vinci, used it frequently."
            />

            <Temp
            url={PlasticSurgery}
            title="Plastic surgery"
            text="It’s used in the facial plastic surgery to help assure that the results of facial proportions and positions are 
                  natural and aesthetically pleasing.The Golden Ratio can be seen all around us, and many believe that the proportions
                  of this ratio are naturally pleasing to the human eye.The Golden Ratio represents balance, and balance is aesthetically beautiful."
            
            />

            <Temp
            url={Geometry}
            title="Mathematics and Geometry"
            text="Because of its very unique properties in mathematics and frequent appearances in geometry, it is used to teach principles of mathematics and geometry.
            In modern mathematics, the golden ratio occurs in the description of fractals, figures that exhibit self-similarity and play an important role in the study of chaos and dynamical systems."
            
            />
            
            </CardDeck>

        <CardDeck>
            <Temp
            url={Nature}
            title="Nature"
            text="It’s used to understand the physical proportions and design of living organisms. 
               It appears not as a universal law or constant, but does appear with surprising frequency.
               When the golden ratio is applied as a growth factor, you get a type of logarithmic spiral known as a golden spiral."
            
            />

            <Temp
            url={MarketAnalysis}
            title="Market Analysis"
            text="Phi (1.618), the Golden Mean and the numbers of the Fibonacci series (0, 1, 1, 2, 3, 5, 8, …)
                 have been used with great success to analyze and predict stock market moves, known as retracements.
                It’s used in the analysis of financial markets to predict price and timing inflection points in stock price movements."
            
            />

            <Temp
            url={Music}
            title="Music"
            text="Fibonacci and phi relationships are often found in the timing of musical compositions.
            Ratios found in the first seven numbers of the Fibonacci series ( 0, 1, 1, 2, 3, 5, 8 )
             are related to key frequencies of musical notes.
            Fibonacci and phi are used in the design of violins."
            />
            </CardDeck>           
        </div>
    )
}
export default More;