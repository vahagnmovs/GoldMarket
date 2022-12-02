import React from 'react';
import { useSelector} from "react-redux";
import {nextImage, prevImage, clickImage} from "../../../../store/imagesSlice";
import { useDispatch } from "react-redux";

const ImageSlice = () => {
    const dispatch = useDispatch();
    const images = useSelector(state => state.imagesSlice.IMAGES)
    const index = useSelector(state => state.imagesSlice.index)
    return (
        <div>
            <img style={{height:"650px"}} src={images[index]} alt=""/>
            <div style={{display:"flex", justifyContent:"space-around"}}>
                <button onClick={() => dispatch(prevImage(1))}>prev</button>
                <button onClick={() => dispatch(nextImage(1))}>next</button>
            </div>
            <div className={"buttonImage"} >
                {images.map((img, i)=>
                    <img
                        key={i}
                        style={{height:"180px", cursor:"pointer",}}
                        src={img} alt=""
                        onClick={() => dispatch(clickImage(i))}
                        className={index === i ? "active" : ""}
                    />
                )}
            </div>
        </div>
    );
};

export default ImageSlice;