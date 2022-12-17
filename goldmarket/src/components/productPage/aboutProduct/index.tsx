import React from 'react';
import "./style.css";
import {ProductImageSlice} from "./productImageSlice";
import {ProductsTypes} from "src/data/products"
import {ProductSizeWeight} from "./productSizeWeight";
import {Description} from "./description";

interface AboutPageProps {
    productInformation: ProductsTypes
}

const AboutPage = ({productInformation}: AboutPageProps) => {
    const {name, images, size, weight} = productInformation;
    return (
        <div>
            <div>
                <span>Product code: {name}</span>
            </div>
            <div>
                <ProductImageSlice images={images}/>
            </div>
            <div>
                <div>
                    <ProductSizeWeight sizeOrWeight={size} title={"SIZE"}/>
                </div>
                <div>
                    <ProductSizeWeight sizeOrWeight={weight} title={"WEIGHT"}/>
                </div>
                <div>
                    <Description infoProduct={productInformation}/>
                </div>

            </div>
        </div>
    );
};
export default AboutPage;