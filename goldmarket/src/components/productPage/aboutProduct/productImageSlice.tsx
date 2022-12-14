import React, {useState} from 'react';
import "./style.css";

interface ProductImageSliceProps {
    images: string[]
}

const ProductImageSlice = ({images}:ProductImageSliceProps ) => {
    const [imageIndex, setImageIndex] = useState(0);
    console.log(images, "images")
    const nextImage = () => {
        if(imageIndex === images.length - 1) {
            setImageIndex(0)
            return;
        }
        setImageIndex(imageIndex + 1)
    };
    const prevImage = () => {
        if (imageIndex === 0) {
            setImageIndex( images.length - 1)
            return;
        }
        setImageIndex( imageIndex - 1)
    };
    const clickImage = (i: number) => {
        setImageIndex(i)
    };
    return (
        <div style={{height: "650px"}}>
            <h1>IMAGES</h1>
            <img style={{height: "450px"}} src={images[imageIndex]} alt=""/>
            <div style={{display:"flex", justifyContent:"space-around"}}>
                <button onClick={prevImage}>prev</button>
                <button onClick={nextImage}>next</button>
            </div>
            <img src="" alt=""/>
            <div style={{width: "100%"}}>
                {images.map((image, i) =>
                    <img
                        key={image}
                        style={{height:"180px", cursor:"pointer",}}
                        src={image} alt="no photo"
                        onClick={() => clickImage(i)}
                        className={imageIndex === i ? "active": ""}
                    />
                )}
            </div>
        </div>
    );
};

export { ProductImageSlice };