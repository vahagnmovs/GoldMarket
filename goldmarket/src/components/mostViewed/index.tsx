import React, {createRef, RefObject, useRef} from "react";
import Slider from "react-slick";
import {products} from "src/data/products";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

const MostViewed = () => {
    const ref = useRef(null)
    const handleNextSlide = () => {
        // @ts-ignore
        ref.current.slickNext();
    };

    const handlePrevSlide = () => {
        // @ts-ignore
        ref.current.slickPrev();
    };

    let settings = {
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        autoplay: true,
        arrows: false,
        speed: 500,
        autoplaySpeed: 5000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };

    return (
        <div>
            <div>
                <h3>Most Viewed</h3>
                <div>
                    <button onClick={handlePrevSlide}>{"<"}</button>
                    <button onClick={handleNextSlide}>{">"}</button>
                </div>
            </div>

            <Slider ref={ref} {...settings}>
                {
                    products.map(product =>
                        <div>
                            <div className="badge_item">
                                <div className="relative">
                                    <img style={{width: 200, height: 200}} src={product.images[0]} alt="list_item"/>
                                </div>
                                <div className="list_content">
                                    <div className="flex justify-between">
                                        <div>
                                            <span className="currentPrice">{product.prices.currentPrice}$</span>
                                            <span className="oldPrice">{product.prices.oldPrice}$</span>
                                        </div>
                                        <div>
                                            {/*FIXME: after having norm seller data will change this to normal seller name*/}
                                            {product.sellerID.split("-")[0]}
                                        </div>
                                    </div>
                                    <p>{product.name}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </Slider>
        </div>
    );
}

export default MostViewed;