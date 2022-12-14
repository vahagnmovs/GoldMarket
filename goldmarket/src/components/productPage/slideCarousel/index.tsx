import React, { useMemo, useRef } from 'react';

import Slider from "react-slick";

import "./style.css"
import Card from "./card";
import { ProductsTypes } from "../../../data/products";

interface  SlideCarouselProps {
    images: ProductsTypes[];
}


const SlideCarousel = ({ images }: SlideCarouselProps) => {
    const slider = useRef<any>(null);
    const imagesArr = useMemo<string[]>(() => {
        return images.map(image => image.IMAGES[0])
    }, [images]);

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
            <div style={{ margin: 20 }}>
                <button onClick={() => slider?.current?.slickPrev()}>Prev</button>
                <button
                    style={{ marginLeft: 20 }}
                    onClick={() => slider?.current?.slickNext()}
                >
                    Next
                </button>
            </div>

            <Slider ref={slider} {...settings}>
                {!!imagesArr.length && imagesArr.map((item) =>
                    // <BasicCard key={item} {...item}/>
                    <Card key={item} image={item}/>
                )}
            </Slider>
        </div>
    );
}

export default SlideCarousel;