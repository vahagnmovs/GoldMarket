import React, {useState} from 'react';
import "./style.css";
import image from "../../Information/Image";

const ProductImageSLice = ({images}) => {
    const [index, setIndex] = useState(0);

    console.log(images)

    const nextImage = () => {
        if(index === images.length -1) {
            setIndex(0)
        } else {
            setIndex(index => index += 1)
        }
    };

    const prevIndex = () => {
        if(index === 0) {
            setIndex(index => index = images.length - 1)
        }else {
            setIndex(index => index -= 1)
        }
    };
    const clickImage = (i) => {
        setIndex(i)
    };


    return (
        <div style={{height: "650px"}}>
            <h1>IMAGES</h1>
            <img src="" alt=""/>
            <img style={{height: "450px"}} src={images[index]} alt=""/>
            <div style={{display:"flex", justifyContent:"space-around"}}>
                <button onClick={prevIndex}>prev</button>
                <button onClick={nextImage}>next</button>
            </div>
            <img src="" alt=""/>
            <div style={{width: "100%"}}>
                {images.map((image, i) =>
                    <img
                        key={image}
                        style={{height:"180px", cursor:"pointer",}}
                        src= {image} alt="no photo"
                        onClick={() => clickImage(i)}
                        className = {index === i ? "active": ""}
                    />
                )}
            </div>
        </div>
    );
};

export  {ProductImageSLice};