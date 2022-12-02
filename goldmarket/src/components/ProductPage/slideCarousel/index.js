import React from "react";

import OtherAssortment from "../cardSliceCarousel";

import { productsSilver } from "../../../data/dataSilverCard";
import { productsGold } from "../../../data/dataGoldCard";

const SlideCarousel = () => {
    return (
        <div>
            <OtherAssortment data={ productsGold } title = {"Other assortment of the salon"}/>
            <OtherAssortment data={ productsSilver } title = {"Similar Product"}/>
        </div>
    );
};

export default SlideCarousel;