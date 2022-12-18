import React from 'react';
import  video from "src/style/img/video.png"
import "src/style/components/_banner.scss"


function Video() {
    return (
        <div className={"video"}>
            <img src={video}/>
        </div>
    );
}

export default Video;