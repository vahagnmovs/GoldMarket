import React, {useRef, useState} from 'react';
import video_photo from "../../../style/Icons/Rectangle 5.png"
import "src/style/components/_video.scss"
import full_screen from "src/style/Icons/ico-fullscreen.png"
import  pause from "src/style/Icons/pause.png"
import  sound from "src/style/Icons/icon.png"

function ReactVideoPlayer() {

    // const [isPlay, setIsPlay] = useState(false)
    //
    // const videoRef = useRef(null)
    //
    // const handelPlay = () => {
    //     videoRef.current.play();
    //     setIsPlay(!isPlay)
    // }
    // const handelPause = () => {
    //     videoRef.current.pause();
    //     setIsPlay(!isPlay)
    // }
    //
    //
    // const handelFullScreen = () => {
    //     videoRef.current.requestFullscreen()
    //
    // }


    return (
        <div className={"videoContainer"}>

            <img className={"video_photo"} src={video_photo}/>
            {/*{*/}
            {/*    isPlay*/}
            {/*        ?*/}
            {/*        <img className={"icon_video"} alt={""}*/}
            {/*             src={sound} onClick={handelPlay}/>*/}

            {/*        :*/}

            {/*        <img className={"icon_video"} alt={""}*/}
            {/*             src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/OOjs_UI_icon_pause.svg/1024px-OOjs_UI_icon_pause.svg.png"}*/}
            {/*             onClick={handelPause}/>*/}


            {/*}*/}
            {/*<img className={"btnForVideo"} alt={""} src={pause}*/}
            {/*     onClick={handelFullScreen}/>*/}
            {/*<img className={"btnForVideo"} alt={""} src={full_screen}*/}
            {/*     onClick={handelFullScreen}/>*/}
        </div>

    );
};

export default ReactVideoPlayer;