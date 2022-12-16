import React from 'react';
import {products} from "../../data/products";
import AboutPage from "./aboutProduct";
import SlideCarousel from "./slideCarousel";
import Contacts from "./contacts";
import {useParams} from "react-router-dom";

const ProductPage = () => {
    //TODO: unused staff - remove or comment
    // const { id }  = useParams();
    let testId: string = "55";
    const productInfo:any  = products.find(product => product.productID === testId);

    console.log(productInfo, "data")
    return (
        <>
            <AboutPage productInformation={ productInfo } />
            <Contacts/>
            <SlideCarousel images={ products }/>
        </>
    );
};

export default ProductPage;