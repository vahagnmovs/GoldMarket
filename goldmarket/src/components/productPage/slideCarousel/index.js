import React from 'react';
// import SampleNextArrow from "./cardSliceCarousel/childComponent/sampleNextArrow";
// import SamplePrevArrow from "./cardSliceCarousel/childComponent/samplePrevArrow";
import Slider from "react-slick";
// import BasicCard from "./cardSliceCarousel/childComponent/card";
import "./style.css"
import Card from "./card";
import image from "../../Information/Image";


const SladeCarousel = ({images}) => {

    let imagesArr = [];

    (function () {
        images.map(image => {
           imagesArr.push(image.IMAGES[0])
        })
    })()


    const slider = React.useRef(null);
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 2,
        responsive: [
            {
                breakpoint: 1424,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },

            {
                breakpoint: 1124,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
        ],

        // nextArrow: <SampleNextArrow/>,
        // prevArrow: <SamplePrevArrow/>,
    };

    return (
        <div>
            <div style={{margin: 20}}>
                <button onClick={() => slider?.current?.slickPrev()}>Prev</button>
                <button
                    style={{marginLeft: 20}}
                    onClick={() => slider?.current?.slickNext()}
                >
                    Next
                </button>
            </div>

            <Slider ref={slider} {...settings}>
                {imagesArr.map((item) =>
                    // <BasicCard key={item} {...item}/>
                    <Card key={item} image={item}/>
                )}
            </Slider>
        </div>
    );
}

export default SladeCarousel;