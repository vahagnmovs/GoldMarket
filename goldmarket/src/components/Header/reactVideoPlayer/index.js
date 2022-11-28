import React, {useRef, useState} from 'react';
import photo from "../../../Icons/Rectangle 5.png"
import "../reactVideoPlayer/Style/Video.scss"


function ReactVideoPlayer() {

    const [isPlay, setIsPlay] = useState(false)

    const videoRef = useRef(null)

    const handelPlay = () => {
        videoRef.current.play();
        setIsPlay(!isPlay)
    }
    const handelPause = () => {
        videoRef.current.pause();
        setIsPlay(!isPlay)
    }


    const handelFullScreen = () => {
        videoRef.current.requestFullscreen()

    }


    return (
        <div className={"videoContainer"}>
            <div className={'Video'}>



                <div className={"videoBtn"}>
                    <img
                        src={photo}
                    />
                    {
                        isPlay
                            ?
                            <img className={"icon_video"} alt={""}
                                 src={"https://static.thenounproject.com/png/1192916-200.png"} onClick={handelPlay}/>
                            :
                            <img className={"icon_video"} alt={""}
                                 src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/OOjs_UI_icon_pause.svg/1024px-OOjs_UI_icon_pause.svg.png"}
                                 onClick={handelPause}/>

                    }
                    <img className={"btnForVideo"} alt={""} src={"https://img.icons8.com/ios/500/full-screen--v2.png"}
                         onClick={handelFullScreen}/>
                </div>
            </div>
        </div>

    );
};

export default ReactVideoPlayer;