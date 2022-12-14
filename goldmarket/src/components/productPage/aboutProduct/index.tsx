import React from 'react';
import "./style.css";
import {ProductImageSlice} from "./productImageSlice";
import {ProductsTypes} from "../../../data/products"
import {ProductSizeWeight} from "./productSizeWeight";
import {Description} from "./description";

interface AboutPageProps {
    productInformation: ProductsTypes
}

const AboutPage = ({productInformation}: AboutPageProps) => {
    const {NAME, IMAGES, SIZE, WEIGHT} = productInformation;
    return (
        <div>
            <div>
                <span>Product code: {NAME}</span>
            </div>
            <div>
                <ProductImageSlice images={IMAGES}/>
            </div>
            <div>
                <div>
                    <ProductSizeWeight sizeOrWeight={SIZE} title={"SIZE"}/>
                </div>
                <div>
                    <ProductSizeWeight sizeOrWeight={WEIGHT} title={"WEIGHT"}/>
                </div>
                <div>
                    <Description infoProduct={productInformation}/>
                </div>

            </div>
        </div>
    );
};
export default AboutPage;