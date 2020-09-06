import React from "react";
import "./App.js";
import Sidebar from './Sidebar.js';
import Image from 'react-bootstrap/Image'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Temp from './Temp.js'
import Img1 from './assets/art.jpg'

function More(){
    return (
        
        <div className='card-deck-two'  > 
        
            <CardDeck style={{marginBottom:'40px'}}>
            <Temp
            url='./assets/art.jpg'
            title="Nature"
            text="It’s used as a valuable tool for composition decisions on position and proportion in ANY branch of the design arts, including art, logo design, product design, graphic design, cartoon character design, video layout and composition, fashion design, architecture, photography and much more.
            Renaissance artists, including Leonardo da Vinci, used it frequently."
            url={Img1}
            />

            <Temp
            url='./assets/art.jpg'
            title="Nature"
            text="It’s used as a valuable tool for composition decisions on position and proportion in ANY branch of the design arts, including art, logo design, product design, graphic design, cartoon character design, video layout and composition, fashion design, architecture, photography and much more.
            Renaissance artists, including Leonardo da Vinci, used it frequently."
            url={Img1}
            />

            <Temp
            url='./assets/art.jpg'
            title="Nature"
            text="It’s used as a valuable tool for composition decisions on position and proportion in ANY branch of the design arts, including art, logo design, product design, graphic design, cartoon character design, video layout and composition, fashion design, architecture, photography and much more.
            Renaissance artists, including Leonardo da Vinci, used it frequently."
            url={Img1}
            />
            
            </CardDeck>

<CardDeck>
            <Temp
            url='./assets/art.jpg'
            title="Nature"
            text="It’s used as a valuable tool for composition decisions on position and proportion in ANY branch of the design arts, including art, logo design, product design, graphic design, cartoon character design, video layout and composition, fashion design, architecture, photography and much more.
            Renaissance artists, including Leonardo da Vinci, used it frequently."
            url={Img1}
            />

            <Temp
            url='./assets/art.jpg'
            title="Nature"
            text="It’s used as a valuable tool for composition decisions on position and proportion in ANY branch of the design arts, including art, logo design, product design, graphic design, cartoon character design, video layout and composition, fashion design, architecture, photography and much more.
            Renaissance artists, including Leonardo da Vinci, used it frequently."
            url={Img1}
            />

            <Temp
            url='./assets/art.jpg'
            title="Nature"
            text="It’s used as a valuable tool for composition decisions on position and proportion in ANY branch of the design arts, including art, logo design, product design, graphic design, cartoon character design, video layout and composition, fashion design, architecture, photography and much more.
            Renaissance artists, including Leonardo da Vinci, used it frequently."
            url={Img1}
            />
            </CardDeck>           
        </div>
    )
}
export default More;