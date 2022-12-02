import React from "react";
import Slider from "react-slick";
import "./style.css";
import BasicCard from "./card";

const OtherAssortment = ({data, title}) => {
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
    };
    return (
        <div>
            <h1 style={{textAlign: "center", margin: "20px 0px"}}>
    {title}
    </h1>

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
    {data?.map((item, index) =>
        <BasicCard key={item.id} item={item}/>
    )}
    </Slider>
    </div>
);
}
export default OtherAssortment;