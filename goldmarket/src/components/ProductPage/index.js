import React from "react";
import Footer from "../Footer";
import ProductInformation from "./productInformation/indexc";
import ContactPage from "./contactPage";

import Description from "./productInformation/description";
import SlideCarousel from "./slideCarousel";

const ProductPage = () => {
    return (
        <div>
            <ProductInformation/>
            <Description/>
            <ContactPage/>
            <SlideCarousel/>
            <Footer/>
        </div>
    );
};

export default ProductPage;