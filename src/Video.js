import React from "react";

function Video(){
    return(
        <div data-aos="zoom-out"className="video" >
            <iframe width="853" height="480" src="https://www.youtube.com/embed/4xpda7WB87w" 
            frameborder="0" allow="accelerometer; autoplay; 
            encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
        </div>
    )

}

export default Video