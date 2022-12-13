import React from 'react';
import "./style.css";
import {ProductImageSLice} from "./productImageSlice";
import {ProductSize} from "./productSize";
import {ProductWeight} from "./productWeight";

const AboutPage = ({imagesInformation}) => {
    const {NAME, IMAGES, SIZE, WEIGHT} = imagesInformation

    // console.log(IMAGES)
    return (
        <div>
            <div>
                <span>Product code: {NAME}</span>
            </div>

            <div>
                <ProductImageSLice images={IMAGES}/>
            </div>
            <div>
                <div>
                    <ProductSize size={SIZE}/>
                </div>
                <div>
                <ProductWeight weight={WEIGHT} />
                </div>

            </div>


        </div>
    );
};

export default AboutPage;