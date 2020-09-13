import React from "react";
// Video Function embeds an external video
function Video(){
    return(
        <div data-aos="zoom-in"className="video v-spacer" >
            <iframe title="InfoVideo"width="579" height="380" src="https://www.youtube.com/embed/4xpda7WB87w" 
            frameBorder="0" allow="accelerometer; autoplay; 
            encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
            </iframe>
        </div>
    )

}

export default Video